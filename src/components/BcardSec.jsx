import Image from 'next/image'
import Styles from '@/styles/bCard.module.css'
import largeLogo from '../../public/img/Logo_with_NO_shadow_wide.png'
import Link from 'next/link'
export default function Bcard() {
  return (
    <section>
      <Image src={largeLogo} />
      <h1>סיוון ורונסקי</h1>
      <h2>פסיכותרפיסטית קוגנטיבית התנהגותית CBT</h2>
      <ul>
        <li className={Styles.contactlist}>
          <Link href='tel:+972546495902'>נייד</Link>
        </li>
        <li className={Styles.contactlist}>
          <Link href='mailto:levanonski@gmail.com'>אימייל</Link>
        </li>
        <li className={Styles.contactlist}>
          <Link href='https://wa.me/972546495902?text=היי%20הגעתי%20דרך%20האתר%20אשמח%20לקבל%20עוד%20פרטים'>
            וואטסאפ
          </Link>
        </li>
        {/* <li className={Styles.contactlist}>
          <Link href=''>אינסטגרם</Link>
        </li>
        <li className={Styles.contactlist}>
          <Link href=''>פייסבוק</Link>
        </li>
        <li className={Styles.contactlist}>
          <Link href=''>waze</Link>
        </li> */}
      </ul>
      <button>שמירה באנשי קשר</button>
    </section>
  )
}
