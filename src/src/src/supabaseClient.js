import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://beoeatxlyddmouruqotg.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlb2VhdHhseWRkbW91cnVxb3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4ODczNTMsImV4cCI6MjEwNDQ2MzM1M30.yK3H-UV9G008L6GUYla9OcwyFTwbRfChpw5A-WpQCn0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
export const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`
