import React from 'react'

const Error403 = () => {
  // Styles converted to JS objects (camelCase properties)
  const styles = {
    errorBody: {
      backgroundImage:
        'linear-gradient(45deg, #beffab, #abff5d9e, #ff91a9, #9900ffdb)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 12s ease infinite',
      // The CSS keyframes need to be defined externally (e.g., in a global CSS file)
      // as they cannot be fully expressed inline in React.
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
      color: '#ff91a9',
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
    // Note: The body class 'error-body' and animation 'gradientShift' assume
    // global CSS is imported or the component is wrapped appropriately.
    <div className='error-body' style={styles.errorBody}>
      <div className='error-container' style={styles.errorContainer}>
        <h1 className='error-code' style={styles.errorCode}>
          403
        </h1>
        <h2 className='error-message' style={styles.errorMessage}>
          גישה אסורה. אין לך הרשאה מתאימה.
        </h2>
        <p style={styles.errorDescription}>
          השרת מבין את הבקשה, אך מסרב לאשר אותה. ייתכן שאין לך גישה לתוכן זה.
        </p>

        <p style={styles.errorDescription}>
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

export default Error403
