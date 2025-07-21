import { createClient } from '@supabase/supabase-js'

const URL = 'https://cmjulrpnhduoszeufpmv.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtanVscnBuaGR1b3N6ZXVmcG12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMzMyMTIsImV4cCI6MjA2ODYwOTIxMn0.9sQAmUrgxTWfg0bN9lxOTOmHsIBpAPBc0nRjO41mOlg'

export const supabase = createClient(URL, API_KEY)
