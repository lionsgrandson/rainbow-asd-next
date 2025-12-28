import Hero from '../components/Hero'
import ContactSec from '../components/ContactSec'
import QnaSec from '../components/QnaSec'
import RecSec from '../components/RecSec'
import ContactBtn from '../components/ContactBtn'
import Footer from '../components/Footer'

import styles from '../styles/index.module.css'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import Link from 'next/link'
import Head from 'next/head'
import Bcard from '@/components/BcardSec'
import { Html } from 'next/document'

export default function Home() {
  return (
    <main className={styles.FirstBox}>
      <Head>
        <Html lang='he' />
        {/* Primary Meta Tags */}
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name='google-site-verification'
          content='uZoWhNZLcOSIykKg17oSR5_C0tcDTr8IcnrjGAjY0FQ'
        />
        <title>
          הנחייה אישית - לשילוב יחידני ולמתבגרים ובוגרים על הרצף האוטיסטי
        </title>
        <link rel='canonical' href='https://www.rainbow-asd.com/' />
        <meta
          name='title'
          content='הנחייה אישית - לשילוב יחידני ולמתבגרים ובוגרים על הרצף האוטיסטי'
        />
        <meta
          name='description'
          content='אני כאן בשבילכם – ללוות, להדריך ולבנות יחד מסלול מותאם אישית לילד שלכם, צעד אחר צעד. ליווי אישי למתבגרים ובוגרים עם אוטיזם, סדנאות להורים, וייעוץ מקצועי מבוסס ניסיון אישי, קליני ואקדמי.'
        />
        {/* 
<!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://rainbow-asd.com/' />
        <meta
          property='og:title'
          content='הנחייה אישית - לשילוב יחידני ולמתבגרים ובוגרים על הרצף האוטיסטי'
        />
        <meta
          property='og:description'
          content='אני כאן בשבילכם – ללוות, להדריך ולבנות יחד מסלול מותאם אישית לילד שלכם, צעד אחר צעד. ליווי אישי למתבגרים ובוגרים עם אוטיזם, סדנאות להורים, וייעוץ מקצועי מבוסס ניסיון אישי, קליני ואקדמי.'
        />
        <meta
          property='og:image'
          content='https://rainbow-asd.com/_next/static/media/Logo_icon_noshadow.408216b7.png'
        />
        {/* <!-- X (Twitter) --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://rainbow-asd.com/_next/static/media/Logo_icon_noshadow.408216b7.png'
        />
        <meta
          property='twitter:title'
          content='הנחייה אישית - לשילוב יחידני ולמתבגרים ובוגרים על הרצף האוטיסטי'
        />
        <meta
          property='twitter:description'
          content='אני כאן בשבילכם – ללוות, להדריך ולבנות יחד מסלול מותאם אישית לילד שלכם, צעד אחר צעד. ליווי אישי למתבגרים ובוגרים עם אוטיזם, סדנאות להורים, וייעוץ מקצועי מבוסס ניסיון אישי, קליני ואקדמי.'
        />
        <meta
          property='twitter:image'
          content='https://rainbow-asd.com/_next/static/media/Logo_icon_noshadow.408216b7.png'
        />
      </Head>
      <div id='top'></div>
      <Link href='#top' className={styles.button}>
        <FaArrowAltCircleUp />
      </Link>
      {/* <Bcard /> */}
      <Hero />
      <ContactSec />
      <QnaSec />
      <RecSec />
      <ContactBtn />
      <Footer />
    </main>
  )
}
