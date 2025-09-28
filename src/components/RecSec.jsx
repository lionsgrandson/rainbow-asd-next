'use client'
import { useState, useEffect } from 'react'

import styles from '../styles/recSec.module.css'
// import '../styles/App.css'
import RecBox from './RecBox'

function RecSec() {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(2)

  const reviews = [
    { RevText: '”סיון מלווה אותי עוד שהתחלתי...“', RevName: 'בוגר בן 23' },
    { RevText: '”סיון הגיעה להעביר לנו הרצאה...“', RevName: 'אנוש חברת ביטוח' },
    {
      RevText: '”סיון הגיעה להעביר לנו הרצאה...“',
      RevName: 'רכזת משאבי ביטוח',
    },
    { RevText: '”סיון יצרה מקום בטוח...“', RevName: 'רכזת משאבי אנוש' },
    {
      RevText: '”סיון הגיעה להעביר לנו הרצאה...“',
      RevName: 'רכזת משאבי ביטוח',
    },
    { RevText: '”סיון יצרה מקום בטוח...“', RevName: 'רכזת משאבי אנוש' },
  ]

  useEffect(() => {
    const updateItems = () => {
      setItemsPerPage(window.innerWidth <= 1000 ? 1 : 2)
    }
    updateItems()
    window.addEventListener('resize', updateItems)
    return () => window.removeEventListener('resize', updateItems)
  }, [])

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage < reviews.length ? prev + itemsPerPage : 0
    )
  }

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage >= 0
        ? prev - itemsPerPage
        : Math.max(0, reviews.length - itemsPerPage)
    )
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 3000)
    return () => clearInterval(interval)
  }, [itemsPerPage, reviews.length])

  return (
    <div className={styles.RecSecDiv}>
      <button onClick={handlePrev} className={styles.nextBtn}>
        ▶
      </button>

      {reviews
        .slice(startIndex, startIndex + itemsPerPage)
        .map((review, index) => (
          <RecBox key={startIndex + index} {...review} />
        ))}

      <button onClick={handleNext} className={styles.nextBtn}>
        ◀
      </button>
    </div>
  )
}

export default RecSec
