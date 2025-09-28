import Link from 'next/link'
import styles from '../styles/contactBtn.module.css'

export default function ContactBtn() {
  return (
    <div className={styles.contactBtn}>
      <Link href='/#contact' className={styles.btContact}>
        צור קשר עכשיו
      </Link>
    </div>
  )
}
