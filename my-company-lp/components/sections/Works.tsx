'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Work {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  gradient: string
  icon: string
}

const works: Work[] = [
  {
    id: 1,
    title: 'ECサイト向けAIチャットボット',
    category: 'AIチャットボット',
    description: '商品の問い合わせ・注文状況確認・返品対応をAIが24時間自動対応。カスタマーサポートの工数を大幅削減。',
    tags: ['チャットボット', 'AI', 'EC'],
    gradient: 'from-electric-blue/20 to-blue-600/20',
    icon: '🤖',
  },
  {
    id: 2,
    title: '飲食店向けコーポレートサイト',
    category: 'HP・LP制作',
    description: 'メニュー・店舗情報・予約フォームを備えたスマホ対応の飲食店サイト。SEO対策で検索流入を改善。',
    tags: ['HP制作', 'SEO', 'スマホ対応'],
    gradient: 'from-vivid-purple/20 to-purple-600/20',
    icon: '🍽️',
  },
  {
    id: 3,
    title: '建設業向け受注管理システム',
    category: 'システム開発',
    description: '案件の受注から請求書発行まで一元管理。Excelでの手作業をシステム化し、ミスと工数を大幅削減。',
    tags: ['システム開発', '業務効率化', 'Webアプリ'],
    gradient: 'from-electric-blue/20 to-vivid-purple/20',
    icon: '🏗️',
  },
  {
    id: 4,
    title: '医療機関向けFAQボット',
    category: 'AIチャットボット',
    description: '診療時間・アクセス・診療科目などのよくある質問にAIが自動回答。受付スタッフの電話対応を削減。',
    tags: ['チャットボット', 'FAQ', 'LINE連携'],
    gradient: 'from-blue-500/20 to-electric-blue/20',
    icon: '🏥',
  },
  {
    id: 5,
    title: '不動産会社の採用LP',
    category: 'HP・LP制作',
    description: '求職者向けに最適化されたランディングページ。採用情報・社員インタビューを掲載し応募率を改善。',
    tags: ['LP制作', '採用', 'CTA最適化'],
    gradient: 'from-purple-500/20 to-vivid-purple/20',
    icon: '🏢',
  },
  {
    id: 6,
    title: '小売業向け顧客管理システム',
    category: 'システム開発',
    description: '顧客情報・購買履歴・来店記録を管理するシステム。LINEとも連携し、リピート促進メッセージを自動送信。',
    tags: ['CRM', 'システム開発', 'LINE連携'],
    gradient: 'from-vivid-purple/20 to-electric-blue/20',
    icon: '🛍️',
  },
]

const categories = ['すべて', 'AIチャットボット', 'HP・LP制作', 'システム開発']

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('すべて')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered =
    activeCategory === 'すべて'
      ? works
      : works.filter((w) => w.category === activeCategory)

  return (
    <section id="works" className="section-padding bg-dark-navy relative overflow-hidden">
      {/* 背景アクセント */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* セクションヘッダー */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
            Works
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            制作実績
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full mb-6" />
          <p className="text-white/50 text-sm">
            ※ 制作実績は随時更新中です。掲載許可をいただいたものを公開しています。
          </p>
        </ScrollReveal>

        {/* カテゴリフィルター */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-electric-blue to-vivid-purple text-white shadow-lg shadow-electric-blue/20'
                  : 'glass text-white/60 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* 実績グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* カード本体 */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${work.gradient} border border-white/8 rounded-2xl overflow-hidden`}
                >
                  {/* アイコン（中央大表示） */}
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 group-hover:opacity-10 transition-opacity duration-300">
                    {work.icon}
                  </div>

                  {/* 通常表示 */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between group-hover:opacity-0 transition-opacity duration-300">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 text-white/70 mb-3">
                        {work.category}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-snug">{work.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded text-xs text-electric-blue/80 bg-electric-blue/10 border border-electric-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ホバーオーバーレイ */}
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,255,0.25))',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <div className="text-4xl mb-3">{work.icon}</div>
                    <h3 className="text-white font-bold text-base mb-2">{work.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded text-xs text-white bg-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 問い合わせCTA */}
        <ScrollReveal delay={0.2} className="text-center mt-14">
          <p className="text-white/50 text-sm mb-4">
            あなたのプロジェクトについてご相談ください
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            無料相談する
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
