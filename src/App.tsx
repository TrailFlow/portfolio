import { BackgroundDecor } from './components/BackgroundDecor'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Included } from './components/Included'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <>
      <BackgroundDecor />
      <Header />
      <main>
        <Hero />
        <Features />
        <Included />
        <WhyUs />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
