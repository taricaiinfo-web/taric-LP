'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  drift: number
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  // クライアント側のみでパーティクルを生成（ハイドレーションエラー回避）
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      drift: (Math.random() - 0.5) * 80,
    }))
    setParticles(generated)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  }

  const lineVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-navy"
    >
      {/* グリッドライン背景 */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* パーティクル */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-electric-blue"
            style={{
              left: `${p.x}%`,
              bottom: `-${p.size * 2}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: 0,
              '--drift': `${p.drift}px`,
              animation: `particleFloat ${p.duration}s ${p.delay}s ease-in-out infinite`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* 放射グラデーション */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(0,212,255,0.12) 0%, rgba(123,47,255,0.08) 40%, transparent 70%)',
        }}
      />

      {/* 右上アクセントブラー */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,255,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        {/* キャンペーンバッジ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1 px-4 sm:px-5 py-2 rounded-2xl sm:rounded-full glass mb-8 text-xs sm:text-sm font-medium max-w-[95vw]"
        >
          <Sparkles className="w-4 h-4 text-electric-blue flex-shrink-0" />
          <span className="text-electric-blue text-center">
            🎉 今なら初期費用0円 ＋ 初月無料キャンペーン実施中
          </span>
        </motion.div>

        {/* メインキャッチコピー */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.div variants={lineVariant} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
            <motion.a
              href="#services"
              className="gradient-text inline-block cursor-pointer"
              whileHover={{ y: -6, filter: 'drop-shadow(0 0 16px rgba(0,212,255,0.7))' }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              title="サービス一覧を見る"
            >
              AI導入
            </motion.a>
            <span className="text-white">から</span>
            <motion.a
              href="#services"
              className="gradient-text inline-block cursor-pointer"
              whileHover={{ y: -6, filter: 'drop-shadow(0 0 16px rgba(123,47,255,0.7))' }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              title="サービス一覧を見る"
            >
              HP制作
            </motion.a>
            <span className="text-white">まで</span>
          </motion.div>
          <motion.div variants={lineVariant} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
            <span className="text-white">中小企業の</span>
            <span className="gradient-text">DX</span>
            <span className="text-white">を</span>
          </motion.div>
          <motion.div variants={lineVariant} className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="gradient-text">ワンストップ</span>
            <span className="text-white">支援</span>
          </motion.div>
        </motion.div>

        {/* 英語サブタイトル */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-inter text-electric-blue/70 text-[10px] sm:text-sm md:text-base tracking-wider sm:tracking-[0.15em] md:tracking-[0.2em] uppercase mb-4 px-2"
        >
          One-Stop DX Support for Small & Medium Businesses
        </motion.p>

        {/* 日本語サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-white/50 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          チャットボット導入・HP制作・業務効率化システム開発まで
          <br className="hidden md:block" />
          まとめてサポート。お客様の業務を楽にすることが私たちの使命です。
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#contact" className="btn-primary text-base">
            無料相談する
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full font-bold text-base text-white glass border border-white/15 hover:border-electric-blue/40 transition-all duration-300 hover:scale-105"
          >
            サービスを見る
          </a>
        </motion.div>

        {/* 実績数字バー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {[
            { value: '30,000円〜', label: '月額費用' },
            { value: '24時間', label: 'AI自動対応' },
            { value: '全国', label: 'オンライン対応' },
            { value: '3種類', label: 'サービスメニュー' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-inter font-black text-xl md:text-2xl gradient-text">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  )
}
