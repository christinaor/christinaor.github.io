import { useCallback, useState } from 'react';
import styles from './styles.module.scss';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(`Name: ${email}\nSubject: ${subject}\nEmail: ${message}`);
    setEmail('');
    setSubject('');
    setMessage('');
  }, [email, subject, message]);

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
      
      <button type="submit">Submit</button>
    </form>
  )
};