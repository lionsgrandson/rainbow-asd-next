import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
// import logoLongTxt from '../../public/img/Logo_with_NO_shadow_text.png'
import logoLongTxt from '../../public/img/Logo_icon_noshadow.png'
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.footerSec}>
        <div className={styles.footerSecimg}>
          <Image
            src={logoLongTxt}
            className={styles.footerImg}
            alt='לוגו עם סיסמה ופאזל בצבעי הקשת'
          />
          <p className={styles.footerSecimgp}>
            הנחייה אישית להורים וילדים עם אוטיזם
          </p>
        </div>
        <div className={styles.ContactFooter}>
          <div>
            <a href='tel:+972546495902'>054-649-5902</a>
            <FaPhoneAlt />
          </div>
          <div>
            <a href='mailto:LEVANONSKI@GMAIL.COM'>levanonski@gmail.com</a>
            <MdEmail />
          </div>
          <div className={styles.legalLinks}>
            <Link href='/tos'>תנאי שימוש</Link>
            <Link href='/privacy'>מדיניות פרטיות</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>© 2024 Raindbow ASD</div>
    </>
  )
}
