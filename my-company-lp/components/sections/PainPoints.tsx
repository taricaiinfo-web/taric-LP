'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Info,
  MessageCircle,
  FileText,
  Search,
  RefreshCw,
  Users,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const painPoints = [
  '何をAI化すればいいか分からない',
  '費用対効果が見えない',
  '導入後の運用が不安',
  '情報漏洩・セキュリティ不安',
  '社員が使いこなせない',
  '自社に合ったAIがない',
]

const effects = [
  {
    label: '問い合わせ対応の自動化',
    icon: MessageCircle,
    gradient: 'from-electric-blue to-blue-500',
    glow: 'rgba(0,212,255,0.25)',
  },
  {
    label: '文書作成時間の短縮',
    icon: FileText,
    gradient: 'from-vivid-purple to-purple-500',
    glow: 'rgba(123,47,255,0.25)',
  },
  {
    label: '社内情報検索の効率化',
    icon: Search,
    gradient: 'from-blue-500 to-vivid-purple',
    glow: 'rgba(0,212,255,0.2)',
  },
  {
    label: '定型業務の自動化',
    icon: RefreshCw,
    gradient: 'from-vivid-purple to-electric-blue',
    glow: 'rgba(123,47,255,0.2)',
  },
  {
    label: '人手不足への対応',
    icon: Users,
    gradient: 'from-electric-blue to-vivid-purple',
    glow: 'rgba(0,212,255,0.25)',
  },
]

export default function PainPoints() {
  return (
    <>
      {/* ─────────────────────────────────────────
          セクション①: こんなお悩みありませんか？
      ───────────────────────────────────────── */}
      <section id="pain-points" className="section-padding bg-navy-800 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
              Pain Points
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              こんなお悩みありませんか？
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full" />
          </ScrollReveal>

          {/* お悩みグリッド（2列） */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {painPoints.map((point, index) => (
              <ScrollReveal key={point} delay={index * 0.07}>
                <div className="gradient-border-card px-6 py-4 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-vivid-purple/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-vivid-purple" />
                  </div>
                  <span className="text-white/75 text-base leading-snug">{point}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ブリッジ: これらの課題、まとめて解決します
      ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-dark-navy">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 90% 80% at 50% 50%, rgba(0,212,255,0.13) 0%, rgba(123,47,255,0.10) 45%, transparent 75%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-inter text-electric-blue/60 text-sm tracking-[0.3em] uppercase mb-6">
              Solution
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
              >
                <span className="text-white">これらの課題、</span>
                <br />
                <span className="gradient-text">タリック AI Solutions</span>
                <span className="text-white"> が</span>
                <br />
                <span className="text-white">まとめて</span>
                <span
                  className="gradient-text"
                  style={{ fontSize: 'clamp(2.4rem, 7vw, 4.8rem)' }}
                >
                  解決
                </span>
                <span className="text-white">します</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              AIチャットボット・HP制作・業務効率化システム開発を一社で対応。
              <br className="hidden md:block" />
              初期費用0円・初月無料で始められます。
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="flex flex-col items-center gap-1 text-electric-blue/50">
                <ArrowRight className="w-6 h-6 rotate-90 animate-bounce" />
                <ArrowRight className="w-6 h-6 rotate-90 animate-bounce" style={{ animationDelay: '0.15s' }} />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          セクション②: AI活用で期待できる効果
      ───────────────────────────────────────── */}
      <section id="ai-effects" className="section-padding bg-navy-800 relative overflow-hidden">
        <div
          className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14">
            <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
              Expected Effects
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              AI活用で期待できる効果
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full" />
          </ScrollReveal>

          {/* 効果カード（5枚均等 flex wrap） */}
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            {effects.map((effect, index) => {
              const Icon = effect.icon
              return (
                <ScrollReveal
                  key={effect.label}
                  delay={index * 0.09}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(20%-16px)]"
                >
                  <div
                    className="gradient-border-card p-7 flex flex-col items-center text-center gap-4 h-full"
                    style={{ minHeight: '180px' }}
                  >
                    {/* アイコン */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${effect.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      style={{ boxShadow: `0 8px 24px ${effect.glow}` }}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                    </div>

                    {/* ラベル */}
                    <span className="text-white/80 text-sm font-medium leading-snug">
                      {effect.label}
                    </span>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* 注釈 */}
          <ScrollReveal delay={0.35}>
            <div className="flex flex-col gap-2 items-center">
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <Info className="w-3.5 h-3.5 flex-shrink-0" />
                <span>効果は業務内容や運用方法によって異なります。</span>
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <Info className="w-3.5 h-3.5 flex-shrink-0" />
                <span>総務省・IPA・中小企業庁等の公開資料を参考にしています。</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
