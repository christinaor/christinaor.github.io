import { useCallback, useEffect, useState } from 'react';

import styles from './styles.module.scss';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = useCallback( async e => {
    e.preventDefault();
    try {
      // Change BACKEND_HOST env when developing
      const isEmailSent = await fetch((`${process.env.BACKEND_HOST}/sent`), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          subject: subject,
          message: message
        })
      })
      const response = await isEmailSent.json();
      if (response) {
        console.log('response: ', response)
        console.log(`Email was sent!`)
        setEmail('');
        setSubject('');
        setMessage('');
        setSubmitClicked(true);
      }
    } catch (error) {
      console.log(`Could not send email:\n ${error}`)
    }
  }, [email, subject, message]);

  useEffect(() => {
    if (submitClicked) {
      setTimeout(() => setSubmitClicked(false), 5000)
    }
  }, [submitClicked])
  
  return (
    <form className={styles.emailForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="email" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      
      {!submitClicked && <button type="submit">Send Email</button>}
      {submitClicked && <div className={styles.emailSent}>Thanks for the email - you'll hear back soon!</div>}
    </form>
  )
};