import Hero from '../components/Hero'
import ContactSec from '../components/ContactSec'
import QnaSec from '../components/QnaSec'
import RecSec from '../components/RecSec'
import ContactBtn from '../components/ContactBtn'
import Footer from '../components/Footer'
import styles from '../styles/index.module.css'
export default function Home() {
  return (
    <main className={styles.FirstBox}>
      <Hero />
      <ContactSec />
      <QnaSec />
      <RecSec />
      <ContactBtn />
      <Footer />
    </main>
  )
}
