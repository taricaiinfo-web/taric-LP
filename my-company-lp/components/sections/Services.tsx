'use client'

import { Bot, Globe, Code2, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Service {
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  features: string[]
  price: {
    setup: string
    monthly: string
  }
  badge?: string
  gradient: string
  inquiryType: string  // Contactフォームの選択肢に対応するキー
}

const services: Service[] = [
  {
    icon: Bot,
    title: 'AIチャットボット導入',
    subtitle: 'AI Chatbot',
    description:
      '24時間自動対応で問い合わせ業務を効率化。HP・LINE・社内システムへの組み込みに対応し、独自ナレッジを学習させたカスタムAIを構築します。',
    features: [
      'HP / LP への埋め込み対応',
      'LINE公式アカウント連携',
      '社内用チャットボット',
      'FAQ・独自ナレッジ対応',
      'AI自動応答システム',
    ],
    price: { setup: '50,000', monthly: '10,000' },
    badge: '人気No.1',
    gradient: 'from-electric-blue to-blue-500',
    inquiryType: 'AIチャットボットについて',
  },
  {
    icon: Globe,
    title: 'HP・LP制作',
    subtitle: 'Web Design',
    description:
      '集客につながるシンプルで見やすいサイトを制作。スマホ対応・SEO対策・セキュリティ設定まで含む、運用しやすいウェブサイトを低コストで提供します。',
    features: [
      'ホームページ・LP制作',
      'スマートフォン対応',
      'SEO対策・メタタグ設定',
      'セキュリティ設定',
      'お問い合わせフォーム・SNS連携',
    ],
    price: { setup: '30,000', monthly: '10,000' },
    gradient: 'from-vivid-purple to-purple-500',
    inquiryType: 'HP・LP制作について',
  },
  {
    icon: Code2,
    title: '受注生産システム開発',
    subtitle: 'Custom System',
    description:
      '「こういうシステムが欲しい」をオーダーメイドで形にします。業務効率化・予約管理・顧客管理・見積書自動作成など、あらゆる業務システムに対応します。',
    features: [
      '業務効率化・自動化ツール',
      '予約管理・顧客管理システム',
      '見積書自動作成',
      'AIシステム・Webアプリ開発',
      '既存システムとの連携',
    ],
    price: { setup: '30,000〜100,000', monthly: '10,000〜30,000' },
    gradient: 'from-electric-blue to-vivid-purple',
    inquiryType: 'システム開発について',
  },
]

// サービスカードクリック時にContactフォームへ種別を伝えてスクロール
function handleServiceInquiry(inquiryType: string) {
  window.dispatchEvent(
    new CustomEvent('selectInquiryType', { detail: inquiryType })
  )
  // 少し待ってからスクロール（イベント処理後にフォームが更新されるよう）
  setTimeout(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }, 50)
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy-800 relative overflow-hidden">
      {/* 背景アクセント */}
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* セクションヘッダー */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-inter text-electric-blue/70 text-sm tracking-[0.2em] uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            サービス一覧
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-vivid-purple mx-auto rounded-full mb-6" />
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            中小企業・個人事業主のDXをまとめてサポート。<br className="hidden md:block" />
            必要なサービスだけを、導入しやすい価格でご提供します。
          </p>
        </ScrollReveal>

        {/* サービスカード */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={index * 0.12}>
                <div
                  className="gradient-border-card p-8 h-full flex flex-col relative overflow-hidden cursor-pointer"
                  onClick={() => handleServiceInquiry(service.inquiryType)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleServiceInquiry(service.inquiryType)}
                  aria-label={`${service.title}について相談する`}
                >
                  {/* バッジ */}
                  {service.badge && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-electric-blue to-vivid-purple text-white">
                      {service.badge}
                    </div>
                  )}

                  {/* アイコン */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* タイトル */}
                  <div className="mb-1">
                    <p className="font-inter text-electric-blue/60 text-xs tracking-widest uppercase mb-1">
                      {service.subtitle}
                    </p>
                    <h3 className="text-white font-black text-xl">{service.title}</h3>
                  </div>

                  {/* 説明 */}
                  <p className="text-white/55 text-sm leading-relaxed mt-4 mb-6">
                    {service.description}
                  </p>

                  {/* 機能リスト */}
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                        <span className="text-white/65 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 料金 */}
                  <div className="border-t border-white/8 pt-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/40 text-xs">設置・制作費用</span>
                      <span className="text-white font-bold font-inter">
                        ¥{service.price.setup}
                        <span className="text-white/40 text-xs font-normal ml-1">円</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/40 text-xs">月額費用</span>
                      <span className="gradient-text font-bold font-inter text-sm">
                        ¥{service.price.monthly}
                        <span className="text-white/40 text-xs font-normal ml-1">円/月</span>
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* キャンペーンバナー */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,255,0.15))',
              border: '1px solid rgba(0,212,255,0.2)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,47,255,0.05))',
              }}
            />
            <p className="text-electric-blue font-bold text-lg md:text-xl mb-2 relative z-10">
              🎉 キャンペーン実施中
            </p>
            <p className="text-white font-black text-2xl md:text-3xl mb-4 relative z-10">
              今なら 初期費用<span className="gradient-text">0円</span> ＋ 初月<span className="gradient-text">無料</span>
            </p>
            <p className="text-white/50 text-sm mb-6 relative z-10">
              まずはお気軽にご相談ください。お客様にとって本当に必要な仕組みだけをご提案いたします。
            </p>
            <a href="#contact" className="btn-primary inline-block relative z-10">
              無料相談する
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
