import Hero from '../components/Hero'
import ContactSec from '../components/ContactSec'
import QnaSec from '../components/qnaSec'
import RecSec from '../components/RecSec'
import ContactBtn from '../components/ContactBtn'
import Footer from '../components/Footer'

import styles from '../styles/index.module.css'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import Link from 'next/link'
import Head from 'next/head'

const SITE_URL = 'https://www.rainbow-asd.com'
const TITLE = 'סיון ורונסקי | ליווי אוטיזם והדרכת הורים בפתח תקווה'
const DESCRIPTION =
  'ליווי אישי למתבגרים ובוגרים על הרצף האוטיסטי, הדרכת הורים ושילוב יחידני עם סיון ורונסקי. קליניקה בקריית אונו ושירות באזור פתח תקווה והסביבה.'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'Rainbow ASD - סיון ורונסקי',
  alternateName: 'Rainbow ASD',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/img/Logo_icon_noshadow_Custom%20(Custom).png`,
  image: `${SITE_URL}/img/Logo_with_NO_shadow_wide%20-%20Copy%20(Custom).png`,
  description: DESCRIPTION,
  telephone: '+972-54-649-5902',
  email: 'levanonski@gmail.com',
  sameAs: ['https://www.facebook.com/sivan.levanon.3/'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'צה״ל 115',
    addressLocality: 'קריית אונו',
    addressCountry: 'IL',
  },
  areaServed: [
    { '@type': 'City', name: 'פתח תקווה' },
    { '@type': 'City', name: 'קריית אונו' },
    { '@type': 'AdministrativeArea', name: 'גוש דן' },
  ],
  founder: {
    '@type': 'Person',
    name: 'סיון ורונסקי',
    jobTitle: 'מנחה ומלווה משפחות ומתבגרים בתחום האוטיזם',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'שירותי ליווי והדרכה בתחום האוטיזם',
    itemListElement: [
      'ליווי מתבגרים ובוגרים על הרצף האוטיסטי',
      'הדרכת הורים',
      'ליווי שילוב יחידני בחינוך הרגיל',
      'הדרכת צוותים חינוכיים ומעסיקים',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

export default function Home() {
  return (
    <main className={styles.FirstBox}>
      <Head>
        <meta
          name='google-site-verification'
          content='uZoWhNZLcOSIykKg17oSR5_C0tcDTr8IcnrjGAjY0FQ'
        />
        <title>{TITLE}</title>
        <meta name='description' content={DESCRIPTION} />
        <meta name='robots' content='index, follow, max-image-preview:large' />
        <link rel='canonical' href={`${SITE_URL}/`} />
        <link rel='alternate' hrefLang='he-IL' href={`${SITE_URL}/`} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='he_IL' />
        <meta property='og:site_name' content='Rainbow ASD' />
        <meta property='og:url' content={`${SITE_URL}/`} />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta
          property='og:image'
          content={`${SITE_URL}/img/Logo_with_NO_shadow_wide%20-%20Copy%20(Custom).png`}
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='313' />
        <meta
          property='og:image:alt'
          content='Rainbow ASD - סיון ורונסקי, ליווי והדרכה בתחום האוטיזם'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta
          name='twitter:image'
          content={`${SITE_URL}/img/Logo_with_NO_shadow_wide%20-%20Copy%20(Custom).png`}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div id='top'></div>
      <Link
        href='#top'
        className={styles.button}
        aria-label='חזרה לראש העמוד'
      >
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
