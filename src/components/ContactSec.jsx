// src/components/ContactSec.jsx
'use client'
import Image from 'next/image'
import styles from '../styles/contactSec.module.css'
import sivanHeadshot from '../../public/img/sivanHeadShot.png.png'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactSec() {
  const [errorMSG, setError] = useState()
  const [successMSG, setSuccess] = useState()
  const [formData, setFormData] = useState({
    fName: '',
    fEmail: '',
    fMessage: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    emailjs.init(process.env.PUBLIC_EMAILJS_KEY)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.fName || !formData.fEmail || !formData.fMessage) {
      setError('חובה למלא את כל השדות')
      const timerId = setTimeout(() => {
        setError('')
      }, 2000)
      return () => {
        clearTimeout(timerId)
      }
      return
    }
    if (!/\S+@\S+\.\S+/.test(formData.fEmail)) {
      setError('הכתובת מייל לא תקין')
      const timerId = setTimeout(() => {
        setError('')
      }, 2000)
      return () => {
        clearTimeout(timerId)
      }

      return
    }

    const serviceId = process.env.SERVICE_ID
    const templateId = process.env.TEMPLATE_ID
    let sName = formData.fName
    let sEmail = formData.fEmail
    let sMessage = formData.fMessage

    try {
      // setLoading(true); // TODO later on use this to show error messages
      // await emailjs.send(serviceId, templateId, {
      //   sName,
      //   sEmail,
      //   sMessage,
      // });

      setSuccess('האימייל נשלח בהצלחה!')
      const timerId = setTimeout(() => {
        setSuccess('')
      }, 2000)
      return () => {
        clearTimeout(timerId)
      }
    } catch (err) {
      setError('שליחת האימייל נכשלה. אנא נסה שוב')

      const timerId = setTimeout(() => {
        setError('')
      }, 2000)
      return () => {
        clearTimeout(timerId)
      }
    } finally {
      // setLoading(false);
    }
  }

  return (
    <section
      id='contact'
      className={(styles.FirstBox, styles.containerContact)}
    >
      <h2 className={styles.h1Con}>יצירת קשר עם סיון ורונסקי</h2>
      <div className={styles.contactContent}>
        <form
          id='contactForm'
          className={styles.ConForm}
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            name='fName'
            placeholder='שם מלא'
            className={styles.input}
            value={formData.fName}
            onChange={handleChange}
            required
            aria-label='שם מלא'
          />
          <input
            type='email'
            name='fEmail'
            className={styles.input}
            placeholder='אימייל'
            value={formData.fEmail}
            onChange={handleChange}
            required
            aria-label='כתובת אימייל'
          />
          <textarea
            name='fMessage'
            placeholder='הודעה'
            type='text'
            className={styles.textArea}
            value={formData.fMessage}
            onChange={handleChange}
            required
            aria-label='הודעה'
          />
          <label>{errorMSG === '' ? successMSG : errorMSG}</label>
        </form>
        <div className={styles.midContactSec}>
          <Image
            src={sivanHeadshot}
            alt='סיון ורונסקי, מנחה ומלווה בתחום האוטיזם'
            className={styles.sivanHeadshotContact}
          />
          <button
            type='submit'
            onClick={handleSubmit}
            className={styles.submitBTN}
            form='contactForm'
          >
            שלח
          </button>
        </div>
        <div className={styles.conDit}>
          <div>
            <span>📞</span>
            <p className={styles.conDitP}>
              <a href='tel:+972546495902'>054-649-5902</a>
            </p>
          </div>
          <div>
            <span>✉️</span>
            <p className={styles.conDitP}>
              <a href='mailto:levanonski@gmail.com'>levanonski@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
