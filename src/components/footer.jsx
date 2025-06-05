// File: src/components/Footer.jsx
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="/icons/phone.png" alt="Phone" className={styles.icon} />
        +91 9361693274
      </div>
      <div>
        <img src="/icons/email.png" alt="Email" className={styles.icon} />
        pranavarasu23@gmail.com 
      </div>
      <div>
        <img src="/icons/linkdin.png" alt="LinkedIn" className={styles.icon} />
        <a href="https://www.linkedin.com/in/pranav-arasu-097a5627b/" target="_blank" rel="noopener noreferrer">PRANAV ARASU</a>
      </div>
      <div>
        <img src="/icons/insta.png" alt="Instagram" className={styles.icon} />
        <a href="https://instagram.com/pranavarasu" target="_blank" rel="noopener noreferrer">@pranavarasu</a>
      </div>
    </footer>
  );
};

export default Footer;
