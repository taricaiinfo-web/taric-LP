'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Zap, Globe, HeadphonesIcon, ShieldCheck, Cpu, Users } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

// カウントアップフック
function useCountUp(end: number, duration: number = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return { count, ref }
}

const features = [
  {
    icon: Zap,
    title: '低コストで導入しやすい',
    description:
      'AIを活用した効率的な開発体制により余計なコストを削減。中小企業向けに必要な機能へ絞ったご提案で、高品質なサービスを適正価格で提供します。',
    color: 'from-electric-blue to-blue-400',
  },
  {
    icon: Globe,
    title: 'ワンストップ対応',
    description:
      'AI導入だけでなくHP制作も、HP制作だけでなく業務改善まで。全国オンライン対応で、一社で完結するサポート体制を整えています。',
    color: 'from-vivid-purple to-purple-400',
  },
  {
    icon: HeadphonesIcon,
    title: '継続的な運用サポート',
    description:
      '導入後も安心の運用サポート対応。初心者にも分かりやすく丁寧にご対応します。導入して終わりではなく、長期的なパートナーとして支援します。',
    color: 'from-electric-blue to-vivid-purple',
  },
  {
    icon: Cpu,
    title: 'AI活用の開発体制',
    description:
      '私たち自身がAIを最大限活用した開発体制を構築。最新の技術トレンドを取り入れながら、お客様のビジネスに最適なソリューションをご提案します。',
    color: 'from-blue-400 to-electric-blue',
  },
  {
    icon: ShieldCheck,
    title: 'オーダーメイド開発',
    description:
      '「こういうシステムが欲しい」をそのまま形に。汎用パッケージではなく、お客様の業務フローに合わせたシステムをゼロから構築します。',
    color: 'from-purple-400 to-vivid-purple',
  },
  {
    icon: Users,
    title: 'まずは現状のヒアリングから',
    description:
      '大掛かりなシステムや高額な導入費用は必要ありません。まずは現状のお悩みをお聞かせください。本当に必要な仕組みだけをご提案します。',
    color: 'from-vivid-purple to-electric-blue',
  },
]

interface StatItemProps {
  end: number
  suffix: string
  label: string
  prefix?: string
}

function StatItem({ end, suffix, label, prefix = '' }: StatItemProps) {
  const { count, ref } = useCountUp(end)
  return (
    <div ref={ref} className="text-center">
      <div className="font-inter font-black text-xl sm:text-2xl md:text-3xl gradient-text mb-1 break-all">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/50 text-xs sm:text-sm">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-navy relative overflow-hidden">
      {/* 背景アクセント */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* セクションヘッダー */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            私たちについて
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full mb-6" />
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            タリック AI Solutionsは「AIを導入すること」ではなく、
            <br className="hidden md:block" />
            「お客様の業務を楽にすること」を目的にサービスを提供しています。
          </p>
        </ScrollReveal>

        {/* 代表者メッセージ */}
        <ScrollReveal delay={0.1} className="mb-20">
          <div className="glass rounded-2xl p-8 md:p-10 max-w-4xl mx-auto border border-electric-blue/10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-vivid-purple flex items-center justify-center text-white font-black text-xl font-inter">
                  高橋
                </div>
              </div>
              <div>
                <p className="text-white/70 leading-relaxed mb-4">
                  問い合わせ対応に追われている。手作業が多く本来の業務に集中できない。ホームページが集客につながっていない。
                  こうした課題は、多くの中小企業や個人事業主の方が抱えています。
                </p>
                <p className="text-white/70 leading-relaxed">
                  私たちはAIチャットボット、ホームページ制作、業務効率化システム開発を通じて、事業の成長をサポートします。
                  まずは現状のお悩みをお聞かせください。お客様にとって本当に必要な仕組みだけをご提案いたします。
                </p>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <p className="text-white font-bold">高橋 陸</p>
                  <p className="text-electric-blue/70 text-sm">タリック AI Solutions 代表</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 強みカード（6枚） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={feature.title} delay={index * 0.08}>
                <div className="gradient-border-card p-7 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* 数字で見る実績 */}
        <ScrollReveal>
          <div className="glass rounded-2xl px-4 sm:px-8 py-8 sm:py-10 border border-white/5">
            <p className="text-center text-white/40 text-xs font-inter tracking-widest uppercase mb-8">
              Service Highlights
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <StatItem end={30000} prefix="¥" suffix="〜" label="月額費用（最安）" />
              <StatItem end={24} suffix="時間" label="AIが自動対応" />
              <StatItem end={3} suffix="種類" label="サービスメニュー" />
              <StatItem end={0} suffix="円" label="今なら初期費用" prefix="¥" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
