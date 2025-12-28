import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
import logoLongTxt from '../../public/img/Logo_icon_noshadow.png'
import styles from '../styles/footer.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Footer() {
  const router = useRouter()
  const handleClick = (href) => {
    router.push(href)
  }
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
            <button
              className={styles.btnSty}
              onClick={() => handleClick('/tos')}
            >
              תנאי שימוש
            </button>
            <button
              className={styles.btnSty}
              onClick={() => handleClick('/privacy')}
            >
              מדיניות פרטיות
            </button>
          </div>
        </div>
      </div>
      <div className={styles.copyRightSec}>
        <div className={styles.copyRight}>© 2024 Raindbow ASD</div>
        <div className={styles.copyRight}>
          Designed and Developed by{' '}
          <Link
            target='_blank'
            href='https://mosheschwartzberg.com'
            alt='CodeCrafter'
          >
            CodeCrafter
          </Link>
        </div>
      </div>
    </>
  )
}
