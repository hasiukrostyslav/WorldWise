import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://gstmniggfqzmqiikdmjy.supabase.co';

export const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzdG1uaWdnZnF6bXFpaWtkbWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4ODg1NDgsImV4cCI6MjA2NDQ2NDU0OH0.9hJ8P9kjLHHWERz3rNy21pq9j9t3ySUm9OPzrWB0CEA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
 