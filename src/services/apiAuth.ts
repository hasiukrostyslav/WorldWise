import { SUPABASE_URL, supabase } from './supabase';
import type { LoginInputs, SignUpInputs } from '../types';

const STORAGE_PATH = '/storage/v1/object/public/avatars/';

export async function signUp({ name, email, password }: SignUpInputs) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) throw new Error(error.message);

    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function login({ email, password }: LoginInputs) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    return data;
  } catch (err) {
    throw new Error('Invalid email or password');
  }
}

export async function getCurrentUser() {
  try {
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    return data?.user;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function logout() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function updateUserPhoto(file: File | null | undefined) {
  try {
    const user = await deleteUserPhoto();

    if (!file) throw new Error('Photo could not be found');

    const imageName = `${user?.id}-${Math.random()}-user`;
    const imagePath = `${SUPABASE_URL}${STORAGE_PATH}${imageName}`;

    const { error: storageError } = await supabase.storage
      .from('avatars')
      .upload(imageName, file);

    if (storageError) throw new Error('Photo could not be uploaded');

    const { error: authError } = await supabase.auth.updateUser({
      data: { avatar_url: imagePath },
    });

    if (authError) throw new Error('Photo could not be added');

    const { data, error } = await supabase
      .from('profiles')
      .update({ avatar_url: imagePath })
      .eq('id', user?.id)
      .select();

    if (error) throw new Error('Photo could not be added');

    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function deleteUserPhoto() {
  try {
    const user = await getCurrentUser();
    const imageName = user?.user_metadata?.avatar_url?.replace(
      `${SUPABASE_URL}${STORAGE_PATH}`,
      ''
    );

    if (!imageName) return user;

    const { error } = await supabase.storage
      .from('avatars')
      .remove([imageName]);

    if (error) throw new Error('Photo could not be deleted');

    const { error: authError } = await supabase.auth.updateUser({
      data: { avatar_url: null },
    });

    if (authError) throw new Error('Photo could not be deleted');

    const { error: profileError } = await supabase
      .from('profiles')
      .update({ avatar_url: null })
      .eq('id', user?.id)
      .select();

    if (profileError) throw new Error('Photo could not be deleted');

    return user;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}

export async function deleteUser() {
  try {
    const user = await getCurrentUser();
    if (!user) throw new Error('User account could not be deleted');

    await deleteUserPhoto();
    await logout();

    const { data, error } = await supabase.auth.admin.deleteUser(user.id);

    if (error) throw new Error('User account could not be deleted');

    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : '');
  }
}
