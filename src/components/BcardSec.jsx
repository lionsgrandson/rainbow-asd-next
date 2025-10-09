import Image from 'next/image'
import Styles from '@/styles/bCard.module.css'
import largeLogo from '../../public/img/Logo_with_NO_shadow_wide.png'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Bcard() {
  return (
    <section className={Styles.bcardSec}>
      <Image src={largeLogo} className={Styles.largeLogo} />
      <h1 className={Styles.bcardHeader}>סיוון ורונסקי</h1>
      <h2 className={Styles.secondheaderBcard}>
        פסיכותרפיסטית קוגנטיבית התנהגותית CBT
      </h2>
      <ul className={Styles.ulBcard}>
        <li className={Styles.contactlist}>
          <Link className={Styles.bCardLink} href='tel:+972546495902'>
            <FaPhoneAlt className={Styles.bcardIcon} />
            נייד
          </Link>
        </li>
        <li className={Styles.contactlist}>
          <Link className={Styles.bCardLink} href='mailto:levanonski@gmail.com'>
            <MdEmail className={Styles.bcardIcon} />
            אימייל
          </Link>
        </li>
        <li className={Styles.contactlist}>
          <Link
            className={Styles.bCardLink}
            href='https://wa.me/972546495902?text=היי%20הגעתי%20דרך%20האתר%20אשמח%20לקבל%20עוד%20פרטים'
          >
            <FaWhatsapp className={Styles.bcardIcon} />
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
      <button className={Styles.saveContact}>שמירה באנשי קשר</button>
    </section>
  )
}
