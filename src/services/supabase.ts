import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://bsefxbnbvvnnwpczdamr.supabase.co';

export const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZWZ4Ym5idnZubndwY3pkYW1yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDIxNDAxNywiZXhwIjoyMDE1NzkwMDE3fQ.9yUGRErgxNu92Di22tdOC3wMJ6BYjN7FMnvKbKvJzxA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
