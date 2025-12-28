import { useEffect } from 'react'
import { Accessibility } from 'accessibility'

const A11yWidget = () => {
  useEffect(() => {
    const options = {
      labels: {
        menuTitle: 'Accessibility Options',
        resetTitle: 'Reset Settings',
      },
      session: {
        persistent: true,
      },
    }

    new Accessibility(options)
  }, [])

  return null
}

export default A11yWidget
