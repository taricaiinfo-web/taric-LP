'use client'

import { Twitter, Instagram, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: '私たちについて', href: '#about' },
  { label: 'サービス一覧', href: '#services' },
  { label: '制作実績', href: '#works' },
  { label: 'ご依頼の流れ', href: '#flow' },
  { label: 'お問い合わせ', href: '#contact' },
]

const serviceLinks = [
  { label: 'AIチャットボット導入', href: '#services' },
  { label: 'HP・LP制作', href: '#services' },
  { label: '受注生産システム開発', href: '#services' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#060910] border-t border-white/5">
      {/* メインフッター */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ロゴ・会社情報 */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue to-vivid-purple flex items-center justify-center font-inter font-black text-white">
                T
              </div>
              <div>
                <span className="block font-noto font-black text-white text-lg leading-tight">
                  タリック <span className="gradient-text">AI Solutions</span>
                </span>
                <span className="block font-inter text-white/30 text-[10px] tracking-wider">
                  TARIC AI SOLUTIONS
                </span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              中小企業のDXをワンストップで支援。AIチャットボット導入・HP制作・業務効率化システム開発で、
              お客様の業務を楽にすることが私たちの使命です。
            </p>

            {/* 会社情報 */}
            <div className="space-y-1.5 text-white/40 text-xs mb-6">
              <p>屋号：タリック AI Solutions</p>
              <p>代表者：高橋 陸</p>
              <p>事業内容：AI導入支援・業務効率化サービス</p>
              <p>対応エリア：全国（オンライン対応）</p>
            </div>

            {/* SNSリンク */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 hover:text-electric-blue hover:border-electric-blue/30 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 hover:text-electric-blue hover:border-electric-blue/30 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">メニュー</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-electric-blue text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">サービス</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-electric-blue text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* キャンペーン */}
            <div className="mt-8 p-4 rounded-xl border border-electric-blue/15 bg-electric-blue/5">
              <p className="text-electric-blue text-xs font-bold mb-1">🎉 キャンペーン実施中</p>
              <p className="text-white/60 text-xs leading-relaxed">
                初期費用0円 ＋ 初月無料<br />
                お気軽にご相談ください。
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 mt-3 text-electric-blue text-xs hover:underline"
              >
                無料相談する
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ボトムバー */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-inter">
            © {currentYear} タリック AI Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/25 text-xs">
            <a href="#" className="hover:text-white/50 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white/50 transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
