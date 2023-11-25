import axios from 'axios';
import { SUPABASE_KEY, SUPABASE_URL } from './supabase';
import type { City } from '../types';

const HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
};

export async function getCities(): Promise<City[] | undefined> {
  try {
    const res = await axios(`${SUPABASE_URL}/rest/v1/Cities`, {
      params: { select: '*' },
      headers: { ...HEADERS },
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

export async function getCity(
  id: string | undefined
): Promise<City | undefined> {
  try {
    const res = await axios(`${SUPABASE_URL}/rest/v1/Cities`, {
      params: { select: '*', id: `eq.${id}` },
      headers: {
        ...HEADERS,
        Range: '0-9',
      },
    });

    return res.data.at(0);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error();
    } else if (error instanceof Error) {
      throw error.message;
    }
  }
}
