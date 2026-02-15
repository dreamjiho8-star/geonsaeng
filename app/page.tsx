import Header from '../components/Header'
import Hero from '../components/Hero'
import Principles from '../components/Principles'
import Challenges from '../components/Challenges'
import Nutrients from '../components/Nutrients'
import Fermented from '../components/Fermented'
import Acupuncture from '../components/Acupuncture'
import Practice from '../components/Practice'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Acupuncture />
      <Fermented />
      <Principles />
      <Challenges />
      <Nutrients />
      <Practice />
      <Contact />
      <Footer />
    </main>
  )
}
