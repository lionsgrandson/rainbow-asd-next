import Image from 'next/image'
import Icon from '../../public/img/Logo_icon_noshadow.png'
import styles from '../styles/hero.module.css'
import heroSesh from '../../public/img/therapySesh.png'

function Hero() {
  return (
    <div className={styles.HeroSec} id='hero'>
      <header>
        <Image
          src={Icon}
          alt='לוגו Rainbow ASD של סיון ורונסקי'
          className={styles.iconHead}
        />
      </header>
      <section className={styles.FirstBox}>
        <h1>ליווי אישי בתחום האוטיזם</h1>
        <h2 className={styles.topHeroH2}>
          הדרכת הורים, שילוב יחידני וליווי מתבגרים ובוגרים באזור פתח תקווה
          והסביבה
        </h2>
        <div className={styles.HeroSpli}>
          {/* Right side */}
          <div className={styles.HeroDiv}>
            <div className={styles.TextHeroDiv}>
              <ul>
                <li>איך אדע אם מתאים לילד/ה שילוב יחידני בכיתה רגילה?</li>
                <li>
                  כיצד ניתן להכשיר משלבת טובה ומדויקת שתתן מענה בזמן הנכון?
                </li>
                <li>
                  מה צריך לעשות כדי לרתום את הצוות החינוכי לסייע ולקדם את השילוב
                  היחידני?
                </li>
              </ul>
            </div>
          </div>

          <Image
            src={heroSesh}
            alt='איור של מפגש ליווי אישי ותומך בתחום האוטיזם'
            className={styles.headshot}
          />

          {/* Left side */}
          <div className={styles.HeroDiv}>
            <div className={styles.TextHeroDiv}>
              <ul>
                <li>
                  האם מתאים לבן/בת שלי שירות צבאי, לאומי אולי בכלל מסגרת אחרת?
                </li>
                <li>
                  איזו מסגרת לימודים תאפשר מענה מותאם וליווי אקדמי לאדם על הרצף
                  האוטיסטי?
                </li>
                <li>מהו מקום העבודה המתאים לצרכים המיוחדים של הבן/בת שלי?</li>
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.bottomDivText}>
          אני כאן בשבילכם – ללוות, להדריך ולבנות יחד מסלול מותאם אישית לילד/ה
          שלכם, צעד אחר צעד. <br />
          <br />
          ליווי אישי למתבגרים ובוגרים עם אוטיזם, סדנאות להורים, וייעוץ מקצועי
          מבוסס ניסיון אישי, קליני ואקדמי. המפגשים מתקיימים בקליניקה בקריית אונו,
          בסמוך לפתח תקווה, ונותנים מענה למשפחות מהאזור ומגוש דן.
        </p>
        <h3 className={styles.heroCTA}>
          מלאו פרטים בטופס ואחזור אליכם לשיחת היכרות
        </h3>
      </section>
    </div>
  )
}

export default Hero
