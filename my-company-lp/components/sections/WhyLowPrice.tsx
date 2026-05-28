'use client'

import { Cpu, Target, Heart } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const reasons = [
  {
    icon: Cpu,
    title: 'AIを活用した効率的な開発体制',
    description:
      '私たち自身がAIを最大限に活用した開発・運営体制を構築しています。これにより余計な工数・コストを削減し、その分をお客様への価格に還元しています。',
    gradient: 'from-electric-blue to-blue-500',
  },
  {
    icon: Target,
    title: '必要な機能へ絞ったご提案',
    description:
      '中小企業向けに本当に必要な機能だけを厳選してご提案します。不要な機能を省くことで開発コストを抑えながら、高品質なサービスを導入しやすい価格で提供します。',
    gradient: 'from-vivid-purple to-purple-500',
  },
  {
    icon: Heart,
    title: '「適正価格」へのこだわり',
    description:
      '安さだけを追求するのではなく、「必要なものを、適正価格で提供すること」を大切にしています。長期的なパートナーとして、信頼できる品質をお届けします。',
    gradient: 'from-electric-blue to-vivid-purple',
  },
]

export default function WhyLowPrice() {
  return (
    <section id="why-low-price" className="section-padding bg-navy-800 relative overflow-hidden">
      {/* 背景アクセント */}
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* セクションヘッダー */}
        <ScrollReveal className="text-center mb-14">
          <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
            Why Low Price
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            なぜ低価格で提供できるのか
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full mb-6" />
          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            安さだけを追求するのではなく、<br className="hidden md:block" />
            「必要なものを、適正価格で提供すること」を大切にしています。
          </p>
        </ScrollReveal>

        {/* 理由カード（3列） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <ScrollReveal key={reason.title} delay={index * 0.1}>
                <div className="gradient-border-card p-7 h-full text-center">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4">{reason.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* 引用ブロック */}
        <ScrollReveal delay={0.3}>
          <div
            className="relative rounded-2xl p-8 md:p-10 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(123,47,255,0.06))',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="text-6xl font-inter font-black gradient-text opacity-20 absolute top-4 left-8 leading-none select-none"
              aria-hidden="true"
            >
              "
            </div>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed relative z-10">
              必要なものを、<span className="gradient-text font-bold">適正価格</span>で提供すること。
              <br className="hidden md:block" />
              それが私たちタリック AI Solutions のモットーです！
            </p>
            <div
              className="text-6xl font-inter font-black gradient-text opacity-20 absolute bottom-0 right-8 leading-none select-none"
              aria-hidden="true"
            >
              "
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
