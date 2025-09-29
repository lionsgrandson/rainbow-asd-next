// components/TermsOfService.js
import React from 'react'
import Link from 'next/link'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const TermsOfService = () => {
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
      <div id='top'></div>
      <Link
        href='/'
        style={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
      >
        חזרה לדף הבית
      </Link>
      <h1 style={styles.heading}>תנאי שימוש</h1>
      <p style={styles.paragraph}>
        ברוכים הבאים לאתר Rainbow-ASD. השימוש באתר ובשירותים המוצעים בו כפופים
        לתנאים המפורטים להלן. אנא קראו אותם בעיון.
      </p>
      <h2 style={styles.subHeading}>1. הגדרות</h2>
      <p style={styles.paragraph}>המשתמש: כל אדם או גוף המשתמש בשירותי האתר.</p>
      <p style={styles.paragraph}>
        השירותים: הנחייה אישית להורים ולבוגרים על הרצף האוטיסטי, סדנאות להורים,
        וייעוץ מקצועי.
      </p>
      <p style={styles.paragraph}>
        האתר: האתר הרשמי של Rainbow-ASD בכתובת https://rainbow-asd.com.
      </p>
      <h2 style={styles.subHeading}>2. קבלת תנאי השימוש</h2>
      <p style={styles.paragraph}>
        השימוש באתר ובשירותים המוצעים בו מעיד על הסכמתך המלאה והבלתי מותנית
        לתנאים אלה.
      </p>
      <h2 style={styles.subHeading}>3. זכויות יוצרים</h2>
      <p style={styles.paragraph}>
        כל התוכן באתר, כולל טקסטים, תמונות, גרפיקה, ויישומים, מוגן בזכויות
        יוצרים. אין להעתיק, לשכפל, להפיץ או להשתמש בתוכן האתר ללא אישור מראש
        ובכתב.
      </p>
      <h2 style={styles.subHeading}>4. פרטיות</h2>
      <p style={styles.paragraph}>
        פרטי המשתמשים נאספים ומטופלים בהתאם למדיניות הפרטיות של האתר, המפורטת
        להלן.
      </p>
      <h2 style={styles.subHeading}>5. הגבלת אחריות</h2>
      <p style={styles.paragraph}>
        האתר מספק שירותים מקצועיים בתחום האוטיזם. עם זאת, אין לראות בשירותים אלה
        תחליף לייעוץ רפואי או פסיכולוגי.
      </p>
      <h2 style={styles.subHeading}>6. שינויים בתנאים</h2>
      <p style={styles.paragraph}>
        האתר שומר לעצמו את הזכות לשנות את תנאי השימוש מעת לעת. השינויים ייכנסו
        לתוקף מיד עם פרסומם באתר.
      </p>
      <Link href='#top' style={styles.buttontop}>
        <FaArrowAltCircleUp />
      </Link>
    </div>
  )
}

export default TermsOfService
