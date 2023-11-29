import { supabase } from './supabase';
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
    console.log(email, password);
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
