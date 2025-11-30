// src/components/ContactSec.jsx
"use client";
import Image from "next/image";
import styles from "../styles/contactSec.module.css";
import sivanHeadshot from "../../public/img/sivanHeadShot.png.png";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import { useForm } from "react-hook-form";

// export async function getStaticProps() {
//   const emailEnv = await {
//     privateKeyEnv: process.env.PRIVATE_EMAILJS_KEY,
//     serviceIdEnv: process.env.SERVICE_ID,
//     templateIdEnv: process.env.TEMPLATE_ID,
//   };
// }
export default function ContactSec() {
  const [formData, setFormData] = useState({
    fName: "",
    fEmail: "",
    fMessage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    emailjs.init(process.env.PRIVATE_EMAILJS_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError("");
    // setSuccess("");

    if (!formData.fName || !formData.fEmail || !formData.fMessage) {
      // setError("חובה למלא את כל השדות");
      alert("חובה למלא את כל השדות");
      console.log(!formData.fName + " name " + formData.fName);
      console.log(!formData.fEmail + " email " + formData.fEmail);
      console.log(!formData.fMessage + " message " + +formData.fMessage);

      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.fEmail)) {
      // setError("הכתובת מייל לא תקין");
      alert("הכתובת מייל לא תקין");
      return;
    }

    const serviceId = process.env.SERVICE_ID;
    const templateId = process.env.TEMPLATE_ID;
    let sName = formData.fName;
    let sEmail = formData.fEmail;
    let sMessage = formData.fMessage;

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        sName,
        sEmail,
        sMessage,
      });

      setSuccess("האימייל נשלח בהצלחה!");
      alert("האימייל נשלח בהצלחה!");
      // setName("");
      // setEmail("");
      // setPhone("");
      // setMessage("");
    } catch (err) {
      // setError("שליחת האימייל נכשלה. אנא נסה שוב");
      alert("שליחת האימייל נכשלה. אנא נסה שוב");
      console.error("שגיאת מערכת", err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={(styles.FirstBox, styles.containerContact)}
    >
      <h1 className={styles.h1Con}>צור קשר</h1>
      <div className={styles.contactContent}>
        <form className={styles.ConForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="fName"
            placeholder="שם מלא"
            className={styles.input}
            value={formData.fName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="fEmail"
            className={styles.input}
            placeholder="אימייל"
            value={formData.fEmail}
            onChange={handleChange}
            required
          />
          <textarea
            name="fMessage"
            placeholder="הודעה"
            type="text"
            className={styles.textArea}
            value={formData.fMessage}
            onChange={handleChange}
            required
          />
        </form>

        <div className={styles.midContactSec}>
          <Image
            src={sivanHeadshot}
            alt="סיון - תמונת פרופיל"
            className={styles.sivanHeadshotContact}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.submitBTN}
            form="contactForm"
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
  );
}
