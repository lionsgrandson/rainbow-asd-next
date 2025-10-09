// src/components/ContactSec.jsx
'use client'
import Image from 'next/image'
import styles from '../styles/contactSec.module.css'

import sivanHeadshot from '../../public/img/sivanHeadShot.png.png'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactSec() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    emailjs.init('yTbjwZK0qB7HOauXe')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!name || !email || !phone || !message) {
      setError('חובה למלא את כל השדות')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('הכתובת מייל לא תקין')
      return
    }

    const serviceId = 'service_ezfr8lr'
    const templateId = 'template_7hci6xd'

    try {
      setLoading(true)
      await emailjs.send(serviceId, templateId, {
        name,
        email,
        phone,
        message,
      })
      setSuccess('האימייל נשלח בהצלחה!')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (err) {
      setError('שליחת האימייל נכשלה. אנא נסה שוב')
      console.error('שגיאת מערכת', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id='contact'
      className={(styles.FirstBox, styles.containerContact)}
    >
      <h1 className={styles.h1Con}>צור קשר</h1>
      <div className={styles.contactContent}>
        <form className={styles.ConForm} onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='שם מלא'
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            className={styles.input}
            placeholder='אימייל'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            placeholder='הודעה'
            className={styles.textArea}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </form>

        <div className={styles.midContactSec}>
          <Image
            src={sivanHeadshot}
            alt='סיון - תמונת פרופיל'
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
            <p className={styles.conDitP}>054-649-5902</p>
          </div>
          <div>
            <span>✉️</span>
            <p className={styles.conDitP}>levanonski@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
