import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// シングルトンパターンでSupabaseクライアントを生成
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// contactsテーブルの型定義
export interface ContactRecord {
  id?: string
  name: string
  company?: string
  email: string
  phone?: string
  message: string
  inquiry_type?: string
  created_at?: string
}
