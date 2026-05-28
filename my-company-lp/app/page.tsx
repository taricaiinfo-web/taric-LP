import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import PainPoints from '@/components/sections/PainPoints'
import Services from '@/components/sections/Services'
import WhyLowPrice from '@/components/sections/WhyLowPrice'
import Flow from '@/components/sections/Flow'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

// セクション順: Hero → お悩み → サービス → なぜ低価格か → 依頼の流れ → 私たちについて → お問い合わせ
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <WhyLowPrice />
      <Flow />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
