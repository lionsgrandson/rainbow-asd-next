import React from 'react'

const Error500 = () => {
  const styles = {
    errorBody: {
      backgroundImage:
        'linear-gradient(45deg, #beffab, #abff5d9e, #ff91a9, #9900ffdb)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 12s ease infinite',
    },
    errorContainer: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '10vh auto 0',
      padding: '2rem',
      backgroundColor: '#f5f5f5cc',
      borderRadius: '2.4rem',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    errorCode: {
      fontSize: '10rem',
      color: '#abff5d9e',
      margin: 0,
      lineHeight: 1,
    },
    errorMessage: {
      color: '#9900ffdb',
      marginTop: 0,
      fontSize: '2.8rem',
    },
    errorDescription: {
      fontSize: '1.8rem',
    },
    errorLink: {
      fontSize: '1.8rem',
      color: '#9900ffdb', // Inline style overrides for link color
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
  }

  return (
    <div className='error-body' style={styles.errorBody}>
      <div className='error-container' style={styles.errorContainer}>
        <h1 className='error-code' style={styles.errorCode}>
          500
        </h1>
        <h2 className='error-message' style={styles.errorMessage}>
          שגיאה פנימית בשרת!
        </h2>
        <p style={styles.errorDescription}>
          השרת נתקל בתקלה בלתי צפויה. אנחנו עובדים על תיקון הבעיה.
        </p>

        <p style={styles.errorDescription}>
          נא נסו שוב בעוד מספר דקות או חזרו לדף הבית:
          <br />
          <a href='/' className='error-link' style={styles.errorLink}>
            לחצו כאן
          </a>
        </p>
      </div>
    </div>
  )
}

export default Error500
