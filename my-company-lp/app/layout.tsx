import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'タリック AI Solutions | AI導入からHP制作まで中小企業のDXをワンストップ支援',
  description:
    'タリック AI Solutionsは、AIチャットボット導入・HP制作・業務効率化システム開発で中小企業のDX推進をワンストップでサポートします。初期費用0円・初月無料キャンペーン実施中。',
  keywords: [
    'AI導入',
    'チャットボット',
    'HP制作',
    '業務効率化',
    'DX支援',
    '中小企業',
    'タリック AI Solutions',
    'LINE連携',
    '受注管理システム',
  ],
  authors: [{ name: 'タリック AI Solutions' }],
  openGraph: {
    title: 'タリック AI Solutions | 中小企業のDXをワンストップ支援',
    description:
      'AIチャットボット導入・HP制作・業務効率化システム開発まで。初期費用0円・初月無料キャンペーン実施中。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'タリック AI Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'タリック AI Solutions | 中小企業のDXをワンストップ支援',
    description: 'AIチャットボット導入・HP制作・業務効率化システム開発まで。初期費用0円・初月無料。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${inter.variable}`}
    >
      <body className="bg-dark-navy text-white font-noto antialiased">
        {children}
      </body>
    </html>
  )
}
