// File: src/components/Footer.jsx
import React from 'react';
import styles from './footer.module.css';
import one from '../assets/phone.png';
import two from '../assets/email.png';
import three from '../assets/linkdin.png';
import four from '../assets/insta.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={one} alt="one"/>
        +91 9361693274
      </div>
      <div>
        <img src={two} alt="two"/>
        pranavarasu23@gmail.com 
      </div>
      <div>
        <img src={three} alt="three"/>
        <a href="https://www.linkedin.com/in/pranav-arasu-097a5627b/" target="_blank" rel="noopener noreferrer">PRANAV ARASU</a>
      </div>
      <div>
        <img src={four} alt="four"/>
        <a href="https://instagram.com/pranavarasu" target="_blank" rel="noopener noreferrer">@pranavarasu</a>
      </div>
    </footer>
  );
};

export default Footer;
