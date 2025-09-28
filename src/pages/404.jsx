import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - עמוד לא נמצא</h1>
      <p style={styles.text}>מצטערים, העמוד שאתם מחפשים אינו קיים.</p>
      <p>
        <Link href='/' style={styles.link}>
          חזור לדף הבית
        </Link>
      </p>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '5rem',
    height: '100vh',
  },
  heading: {
    fontSize: '7rem',
    color: '#e74c3c',
  },
  text: {
    fontSize: '5.2rem',
  },
  link: {
    color: '#3498db',
    fontSize: '4rem',
    textDecoration: 'none',
  },
}
