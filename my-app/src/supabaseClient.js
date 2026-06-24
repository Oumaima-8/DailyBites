import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zkahyqpnbawhuychxysr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprYWh5cXBuYmF3aHV5Y2h4eXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNzc5MTQsImV4cCI6MjA5Njk1MzkxNH0.4nr8mTEk64BkpNbpjdnNjm4SMu47PVdZoE34TWJ5okU"

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)