import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import profilePic from '../assets/pp.jpg';
import bgImg from '../assets/homebg.jpg';

const Home = () => {
  return (
    <div className={styles.home} style={{ backgroundImage: `url(${bgImg})` }}>
      <img src={profilePic} className={styles.photo} alt="Profile" />
      
      <h1 className={styles.typingText}>வணக்கம், I'm PRANAV</h1>

      <p>
        I’m a passionate and driven developer focused on creating meaningful digital experiences.
        I enjoy solving real-world problems through clean, responsive, and user-friendly applications.
      </p>

      <div className={styles.buttons}>
        <Link to="/resume" className={styles.btn}>Resume</Link>
        <Link to="/projects" className={styles.btn}>Projects</Link>
        <Link to="/blogs" className={styles.btn}>Blogs</Link>
      </div>

      <p2>Feel free to reach out using the contact details below ⬇</p2>
    </div>
  );
};

export default Home;
