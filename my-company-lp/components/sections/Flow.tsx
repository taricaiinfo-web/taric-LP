'use client'

import { MessageCircle, ClipboardList, Lightbulb, Wrench, Rocket } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Step {
  number: string
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  duration?: string
  gradient: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: MessageCircle,
    title: '無料相談',
    subtitle: 'Free Consultation',
    description:
      'お気軽にお問い合わせください。現状のお悩みや「こんなことできる？」というご質問でも大歓迎です。オンラインで対応しますので全国どこからでもご相談いただけます。',
    duration: '当日〜翌営業日以内にご返信',
    gradient: 'from-electric-blue to-blue-500',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'ヒアリング',
    subtitle: 'Hearing',
    description:
      '業務内容・課題・ご要望を詳しくお伺いします。現状の業務フロー・使用中のツール・予算感なども確認しながら、最適なご提案のための情報を整理します。',
    duration: '30〜60分程度（オンライン）',
    gradient: 'from-blue-500 to-vivid-purple',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'ご提案',
    subtitle: 'Proposal',
    description:
      'ヒアリングをもとに、お客様に本当に必要な仕組みのみをご提案します。不要な機能は省き、費用対効果の高いプランをわかりやすくご説明します。',
    duration: '数日以内にご提案書を提出',
    gradient: 'from-vivid-purple to-purple-500',
  },
  {
    number: '04',
    icon: Wrench,
    title: '制作・開発',
    subtitle: 'Development',
    description:
      'ご承認いただいた内容をもとに制作・開発を開始します。進捗は随時ご報告し、途中のフィードバックにも柔軟に対応します。AIを活用した効率的な開発で、スピーディーに納品します。',
    duration: '1週間〜1ヶ月程度（内容による）',
    gradient: 'from-purple-500 to-electric-blue',
  },
  {
    number: '05',
    icon: Rocket,
    title: '納品・運用開始',
    subtitle: 'Launch & Support',
    description:
      '完成したサービスをお渡しし、運用開始をサポートします。操作方法のご説明・初期設定のサポートも行います。導入後も継続的な運用サポートで長期的にお支えします。',
    duration: '納品後も継続サポート',
    gradient: 'from-electric-blue to-vivid-purple',
  },
]

export default function Flow() {
  return (
    <section id="flow" className="section-padding bg-navy-800 relative overflow-hidden">
      {/* 背景アクセント */}
      <div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        {/* セクションヘッダー */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
            Flow
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ご依頼の流れ
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full mb-6" />
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            お問い合わせから納品まで、丁寧にサポートします。<br className="hidden md:block" />
            まずはお気軽にご相談ください。
          </p>
        </ScrollReveal>

        {/* ステップリスト */}
        <div className="relative">
          {/* 縦線（デスクトップ） */}
          <div className="absolute left-[28px] top-8 bottom-8 w-px bg-gradient-to-b from-electric-blue via-vivid-purple to-electric-blue opacity-30 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="flex gap-6 group">
                    {/* ステップ番号バッジ */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* カードコンテンツ */}
                    <div className="flex-grow gradient-border-card p-6 md:p-7">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-inter font-black text-2xl gradient-text">
                              {step.number}
                            </span>
                            <h3 className="text-white font-bold text-lg">{step.title}</h3>
                          </div>
                          <p className="font-inter text-electric-blue/50 text-xs tracking-widest uppercase">
                            {step.subtitle}
                          </p>
                        </div>
                        {step.duration && (
                          <span className="flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs glass border border-white/10 text-white/50">
                            ⏱ {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
