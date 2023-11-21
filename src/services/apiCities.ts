import axios from 'axios';
import { SUPABASE_KEY, SUPABASE_URL } from './supabase';
import type { City } from '../types';

export async function getCities(): Promise<City[] | undefined> {
  try {
    const res = await axios(`${SUPABASE_URL}/rest/v1/Cities`, {
      params: { select: '*' },
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error();
    } else if (error instanceof Error) {
      throw error.message;
    }
  }
}
