'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

// バリデーションスキーマ
const contactSchema = z.object({
  name: z.string().min(1, 'お名前は必須です').max(50, '50文字以内で入力してください'),
  company: z.string().max(100, '100文字以内で入力してください').optional(),
  email: z
    .string()
    .min(1, 'メールアドレスは必須です')
    .email('正しいメールアドレスを入力してください'),
  phone: z
    .string()
    .regex(/^[\d\-+() ]*$/, '正しい電話番号を入力してください')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, '10文字以上入力してください')
    .max(1000, '1000文字以内で入力してください'),
})

type ContactFormData = z.infer<typeof contactSchema>

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const inquiryTypes = [
  'AIチャットボットについて',
  'HP・LP制作について',
  'システム開発について',
  'その他',
]

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [selectedType, setSelectedType] = useState<string>('')

  // Servicesセクションのボタンから問い合わせ種別を受け取る
  useEffect(() => {
    const handler = (e: Event) => {
      const type = (e as CustomEvent<string>).detail
      setSelectedType(type)
    }
    window.addEventListener('selectInquiryType', handler)
    return () => window.removeEventListener('selectInquiryType', handler)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, inquiryType: selectedType }),
      })

      if (!res.ok) throw new Error('送信に失敗しました')

      setStatus('success')
      reset()
      setSelectedType('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-dark-navy relative overflow-hidden">
      {/* 背景グロー */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(123,47,255,0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-3xl mx-auto px-4">
        {/* セクションヘッダー */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            お問い合わせ
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full mb-6" />
          <p className="text-white/60 text-base">
            相談・見積もりは完全無料です。しつこい営業は一切行いません。<br className="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
        </ScrollReveal>

        {/* キャンペーンリマインダー */}
        <ScrollReveal delay={0.1} className="mb-8">
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 border border-electric-blue/15">
            <span className="text-2xl">🎉</span>
            <p className="text-white/70 text-sm">
              <span className="text-electric-blue font-bold">今なら初期費用0円 ＋ 初月無料キャンペーン実施中。</span>
              まずはお気軽にご相談ください。
            </p>
          </div>
        </ScrollReveal>

        {/* フォーム */}
        <ScrollReveal delay={0.15}>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 text-center border border-electric-blue/15"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-vivid-purple flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-black text-2xl mb-3">送信が完了しました！</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  お問い合わせありがとうございます。<br />
                  確認メールをお送りしました。営業日1〜2日以内にご返信いたします。
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-electric-blue text-sm hover:underline"
                >
                  別のお問い合わせをする
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                className="glass rounded-2xl p-8 md:p-10 border border-white/5 space-y-6"
                noValidate
              >
                {/* お問い合わせ種別 */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-3">
                    お問い合わせ内容
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                          selectedType === type
                            ? 'bg-gradient-to-r from-electric-blue to-vivid-purple text-white'
                            : 'glass border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2列グリッド（名前・会社名） */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      お名前 <span className="text-electric-blue text-xs">*必須</span>
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="山田 太郎"
                      className="form-input w-full px-4 py-3 text-sm"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      会社名 <span className="text-white/30 text-xs">任意</span>
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      placeholder="株式会社〇〇"
                      className="form-input w-full px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                {/* 2列グリッド（メール・電話） */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      メールアドレス <span className="text-electric-blue text-xs">*必須</span>
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="example@email.com"
                      className="form-input w-full px-4 py-3 text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      電話番号 <span className="text-white/30 text-xs">任意</span>
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="090-0000-0000"
                      className="form-input w-full px-4 py-3 text-sm"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* メッセージ */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    お問い合わせ内容 <span className="text-electric-blue text-xs">*必須</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="ご質問・ご相談内容をご記入ください。現在の課題や「こういうことできる？」という質問でも大歓迎です。"
                    className="form-input w-full px-4 py-3 text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* エラーメッセージ */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <p>送信に失敗しました。しばらく経ってから再度お試しください。</p>
                  </div>
                )}

                {/* 送信ボタン */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      無料相談を申し込む
                    </>
                  )}
                </button>

                <p className="text-center text-white/30 text-xs">
                  送信後、確認メールをお送りします。1〜2営業日以内にご返信いたします。
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  )
}
