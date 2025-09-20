import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Paste your Supabase Project URL here
const supabaseUrl = "https://tarzxjmlzbwxvtnndvgc.supabase.co"; 

// Paste your Supabase anon key here
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcnp4am1semJ3eHZ0bm5kdmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMTE1NDgsImV4cCI6MjA3MzY4NzU0OH0.nDXwEMw-Lx9C1uTRMN8uKWqkdSr1hY4SYcfOKIgKRKM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});