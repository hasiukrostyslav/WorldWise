import { SUPABASE_URL, supabase } from './supabase';
import type { LoginInputs, SignUpInputs } from '../types';

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
    const user = await getCurrentUser();

    if (!file) throw new Error('Photo could not be found');

    const imageName = `${user?.id}-${Math.random()}-user`;
    const imagePath = `${SUPABASE_URL}/storage/v1/object/public/avatars/${imageName}`;

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
