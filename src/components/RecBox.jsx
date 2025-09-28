// import '../styles/App.css'
import styles from '../styles/recBox.module.css'
import logo from '../../public/img/Logo_icon_noshadow.png'
import Image from 'next/image'

function RecBox(props) {
  return (
    <div className={(styles.FirstBox, styles.divrecbox)}>
      <p className={styles.StartRev}>
        <Image
          src={logo}
          className={styles.startLogo}
          alt='puzzle peice with rainbow colors'
        />
        <Image
          src={logo}
          className={styles.startLogo}
          alt='puzzle peice with rainbow colors'
        />
        <Image
          src={logo}
          className={styles.startLogo}
          alt='puzzle peice with rainbow colors'
        />
        <Image
          src={logo}
          className={styles.startLogo}
          alt='puzzle peice with rainbow colors'
        />
        <Image
          src={logo}
          className={styles.startLogo}
          alt='puzzle peice with rainbow colors'
        />
      </p>
      <p className={styles.RevPCon}>{props.RevText}</p>
      <p className={styles.RevName}>{props.RevName}</p>
    </div>
  )
}

export default RecBox
