import { supabase } from './supabase';
import type { LoginInputs, SignUpInputs } from '../types';

export async function login({ email, password }: LoginInputs) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    return data;
  } catch (err) {
    throw Error('Invalid email or password');
  }
}
