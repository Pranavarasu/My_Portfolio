import React from 'react';
import styles from './resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <h1 className={styles.mainTitle}>RESUME</h1>

      <div className={styles.section}>
        <div className={styles.title}>
          <img src="/icons/exp.png" alt="Experience" className={styles.icon} />
          <h2>EXPERIENCE</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3>FULL STACK DEVELOPER INTERN</h3>
            <p>INPAND TECHNOLOGIES,DINDIGUL • APRIL/2025 – Present</p>
            <p>I’m currently developing a responsive web application using the React framework for the frontend and Django for the backend. This project has strengthened my skills in building clean, user-friendly interfaces and integrating them with robust backend systems</p>
          </div>
          <div className={styles.card}>
            <h3>PYTHON DEVELOPER INTERN</h3>
            <p>GATEWAY SOFTWARE SOLUTIONS,MADURAI • JULY/2023</p>
            <p>Experienced in developing and deploying data science models using Python. Skilled in utilizing libraries like Pandas, NumPy, Scikit-learn, and TensorFlow to preprocess data, train machine learning algorithms, and optimize predictive accuracy </p>
          </div>
          <div className={styles.card}>
            <h3>DATA SCIENCE INTERN</h3>
            <p>SKILL DZIRE  • JULY & AUGUST 2024</p>
            <p>Gained hands-on experience in preprocessing, training, and optimizing models for predictive analytics. Continuously enhancing skills to create efficient, scalable, and impactful data-driven solutions.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.title}>
          <img src="/icons/edu.png" alt="Education" className={styles.icon} />
          <h2>EDUCATION</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3>B.E IN COMPUTER SCIENCE  [CGPA:8.0]  </h3>
            <p>R.V.S COLLEGE OF ENGINEERING • 2021–2025</p>
            <p>Graduated with First Class Honors, actively involved in various technical activities, including hackathons, tech events, and coding competitions, showcasing strong problem-solving skills and a passion for continuous learning.</p>
          </div>
          <div className={styles.card}>
            <h3>HSC [87%] AND SSLC [89%]</h3>
            <p>R.V MATRIC HR.SEC.SCHOOL • 2019 & 2021</p>
            <p>Completed my schooling with strong academic performance, consistently achieving good marks while actively participating in various co-curricular and extracurricular activities, fostering both intellectual and personal growth.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.title}>
          <img src="/icons/skills.png" alt="Skills" className={styles.icon} />
          <h2>SKILLS</h2>
        </div>
        <div className={styles.content}>
          <ul className={styles.skillList}>
            <li>HTML,CSS,JS</li>
            <li>REACT</li>
            <li>PYTHON BACKEND-DJANGO</li>
            <li>PYTHON </li>
            <li>DSA</li>
            <li>VERSION CONTROL</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
