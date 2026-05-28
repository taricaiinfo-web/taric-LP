import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { supabase } from '@/lib/supabase'

interface ContactBody {
  name: string
  company?: string
  email: string
  phone?: string
  message: string
  inquiryType?: string
}

// Nodemailerトランスポーター（Gmail App Password使用）
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

// 管理者への通知メール本文
function buildAdminMailBody(body: ContactBody): string {
  return `
タリック AI Solutions へのお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
お名前：${body.name}
会社名：${body.company || '（未入力）'}
メール：${body.email}
電話番号：${body.phone || '（未入力）'}
種別：${body.inquiryType || '（未選択）'}

メッセージ：
${body.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
タリック AI Solutions 問い合わせシステム
`.trim()
}

// 問い合わせ者への自動返信メール本文
function buildAutoReplyBody(body: ContactBody): string {
  return `
${body.name} 様

この度はタリック AI Solutions へお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを受け付けました。
担当者より、1〜2営業日以内にご返信いたします。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 受付内容の確認
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
お名前：${body.name}
会社名：${body.company || '（未入力）'}
メールアドレス：${body.email}
種別：${body.inquiryType || '（未選択）'}

メッセージ：
${body.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

なお、このメールは自動送信です。返信はできませんのでご了承ください。

--
タリック AI Solutions
代表：高橋 陸
AI導入支援・業務効率化サービス
`.trim()
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json()

    // 必須項目の検証
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: '必須項目が不足しています' },
        { status: 400 }
      )
    }

    // Supabaseにデータを保存
    const { error: dbError } = await supabase.from('contacts').insert({
      name: body.name,
      company: body.company || null,
      email: body.email,
      phone: body.phone || null,
      message: body.message,
      inquiry_type: body.inquiryType || null,
    })

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      // DB保存失敗でもメール送信は試みる
    }

    // メール送信（環境変数が設定されている場合のみ）
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = createTransporter()
      const adminEmail = process.env.GMAIL_USER

      await Promise.all([
        // 管理者への通知メール
        transporter.sendMail({
          from: `"タリック AI Solutions" <${adminEmail}>`,
          to: adminEmail,
          subject: `【新規お問い合わせ】${body.name} 様 - ${body.inquiryType || 'お問い合わせ'}`,
          text: buildAdminMailBody(body),
        }),
        // 問い合わせ者への自動返信
        transporter.sendMail({
          from: `"タリック AI Solutions" <${adminEmail}>`,
          to: body.email,
          subject: '【タリック AI Solutions】お問い合わせありがとうございます',
          text: buildAutoReplyBody(body),
        }),
      ])
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}
