import React from 'react'

// For the 404 page, the animated text requires CSS keyframes
// and specific -webkit- properties, which are best kept in a CSS file.
// The code below represents the JSX structure with inline styles for static properties.

const Error404 = () => {
  const styles = {
    errorBody: {
      backgroundImage:
        'linear-gradient(45deg, #beffab, #abff5d9e, #ff91a9, #9900ffdb)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 12s ease infinite',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box',
    },
    errorContainer: {
      textAlign: 'center',
      maxWidth: '800px',
      width: '100%',
      padding: '3rem 2rem',
      backgroundColor: '#f5f5f5cc',
      borderRadius: '2.4rem',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    errorCode: {
      // NOTE: The animated text gradient and -webkit- properties
      // are highly specific and often require external CSS for cross-browser
      // compatibility and animation definition.
      fontSize: '12rem',
      margin: '0.2em 0 0.1em',
      lineHeight: 1,
      fontWeight: 'bold',
      // Simplified inline styles for the animated effect (requires external CSS for animation):
      backgroundImage:
        'linear-gradient(45deg, #beffab, #abff5d9e, #ff91a9, #9900ffdb)',
      backgroundSize: '400% 400%',
      animation: 'gradientShiftText 15s ease infinite',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    errorMessage: {
      color: '#ff91a9',
      marginTop: 0,
      fontSize: '3rem',
    },
    errorDescription: {
      fontSize: '2rem',
      color: '#333',
    },
    errorLink: {
      fontSize: '2rem',
      color: '#9900ffdb',
      textDecoration: 'underline',
      fontWeight: 'bold',
      marginTop: '20px',
      display: 'inline-block',
    },
  }

  return (
    <div className='error-body' style={styles.errorBody}>
      <div className='error-container' style={styles.errorContainer}>
        <h1 className='error-code' style={styles.errorCode}>
          404
        </h1>
        <h2 className='error-message' style={styles.errorMessage}>
          אופס! הדף שחיפשת אינו קיים.
        </h2>
        <p className='error-description' style={styles.errorDescription}>
          נראה שהקישור שגוי או שהדף הועבר.
        </p>

        <p className='error-description' style={styles.errorDescription}>
          חזור לדף הבית:
          <br />
          <a href='/' className='error-link' style={styles.errorLink}>
            לחצו כאן
          </a>
        </p>
      </div>
    </div>
  )
}

export default Error404
