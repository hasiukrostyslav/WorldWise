import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://bsefxbnbvvnnwpczdamr.supabase.co';

export const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZWZ4Ym5idnZubndwY3pkYW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMTQwMTcsImV4cCI6MjAxNTc5MDAxN30.D-J86riTwrX4bZUdH6G5Gjot5XJ2sf3L2S47G-GbV90';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
