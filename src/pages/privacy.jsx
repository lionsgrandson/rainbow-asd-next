import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const PrivacyPolicy = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1.5rem',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      position: 'relative',
    },
    heading: {
      fontSize: '5rem',
      marginBottom: '1rem',
      color: '#111',
    },
    subHeading: {
      fontSize: '2.4rem',
      marginTop: '1.5rem',
      marginBottom: '0.5rem',
      color: '#222',
    },
    paragraph: {
      fontSize: '2.2rem',
      marginBottom: '1rem',
    },
    buttontop: {
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      height: 'fit-content',
      padding: '0.5rem',
      display: 'flex',
      borderRadius: '20%',
      fontSize: '5rem',
      textAlign: 'center',
      zIndex: '1',
    },
    button: {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      padding: '0.8rem 1.5rem',
      fontSize: '1.6rem',
      backgroundImage:
        'linear-gradient(45deg, #beffab, #abff5d9e, #ff91a9, #9900ffdb)',
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    },
  }

  return (
    <div style={styles.container}>
      <Head>
        <title>מדיניות פרטיות - Rainbow-ASD</title>
        <meta name='description' content='מדיניות פרטיות - Rainbow ASD' />
        <link rel='canonical' href='https://www.rainbow-asd.com/privacy' />
      </Head>
      <div id='top'></div>
      <Link
        href='/'
        style={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
      >
        חזרה לדף הבית
      </Link>
      <h1 style={styles.heading}>מדיניות פרטיות</h1>
      <p style={styles.paragraph}>
        Rainbow-ASD מחויבת לשמירה על פרטיות המשתמשים. מדיניות פרטיות זו מפרטת
        כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.
      </p>
      <h2 style={styles.subHeading}>1. המידע שאנו אוספים</h2>
      <p style={styles.paragraph}>
        בעת השימוש באתר, אנו עשויים לאסוף את המידע הבא:
      </p>
      <p style={styles.paragraph}>
        - פרטי קשר (שם, טלפון, דוא"ל) לצורך יצירת קשר.
      </p>
      <p style={styles.paragraph}>- מידע על השירותים בהם אתה מתעניין.</p>
      <h2 style={styles.subHeading}>2. שימוש במידע</h2>
      <p style={styles.paragraph}>המידע שנאסף משמש לצורך:</p>
      <p style={styles.paragraph}>- מתן שירותים מותאמים אישית.</p>
      <p style={styles.paragraph}>- יצירת קשר עם המשתמש.</p>
      <p style={styles.paragraph}>- שיפור השירותים המוצעים.</p>
      <h2 style={styles.subHeading}>3. הגנה על המידע</h2>
      <p style={styles.paragraph}>
        אנו נוקטים באמצעי זהירות סבירים כדי להגן על המידע האישי שלך מפני גישה לא
        מורשית, שינוי או חשיפה.
      </p>
      <h2 style={styles.subHeading}>4. שיתוף המידע</h2>
      <p style={styles.paragraph}>
        אנו לא נשתף את המידע האישי שלך עם צדדים שלישיים, אלא אם כן נדרש על פי
        חוק או בהסכמתך המפורשת.
      </p>
      <h2 style={styles.subHeading}>5. זכויותיך</h2>
      <p style={styles.paragraph}>
        אתה זכאי לגשת למידע האישי שלך, לעדכן אותו או לבקש למחוק אותו. לשם כך,
        אנא צור קשר באמצעות פרטי הקשר המופיעים באתר.
      </p>
      <Link href='#top' style={styles.buttontop}>
        <FaArrowAltCircleUp />
      </Link>
    </div>
  )
}

export default PrivacyPolicy
