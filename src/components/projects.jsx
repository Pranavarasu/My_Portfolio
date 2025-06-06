import React from 'react';
import styles from './Projects.module.css';
import pppImg from 'C:/projects/portfolio/src/assets/ppp.jpg';
import two from 'C:/projects/portfolio/src/assets/CC.JPG';
import three from 'C:/projects/portfolio/src/assets/fr.jpg';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.mainTitle}>Projects</h1>

      {/* Project 1 */}
      <div className={styles.section1}>
        <div className={styles.text}>
          <h2>SIGN LANGUAGE RECOGNITION MODEL</h2>
          <p>
            A deep learning project that recognizes sign language gestures using MediaPipe for real-time landmark detection and an LSTM-based neural network for gesture classification. Built with React and TensorFlow.
          </p>
          <div className={styles.links}>
            <a href="https://github.com/Pranavarasu?tab=repositories" target="_blank">GitHub</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={pppImg} alt="one"/>
        </div>
      </div>

      {/* Project 2 */}
      <div className={styles.section2}>
        <div className={styles.imageContainer}>
          <img src={two} alt="two"/>
        </div>
        <div className={styles.text}>
          <h2>CATTLE COUNT DETECTION MODEL</h2>
          <p>
            Developed a computer vision-based Cattle Count Detection Model using deep learning techniques to accurately detect and count cattle in images or video streams, aimed at improving livestock monitoring, farm management efficiency, and reducing manual labor.
          </p>
          <div className={styles.links}>
            <a href="https://github.com/Pranavarasu/Count-Object-Detection-model" target="_blank">GitHub</a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className={styles.section1}>
        <div className={styles.text}>
          <h2>FACIAL RECOGNITION USING CNN</h2>
          <p>
            Developed a facial recognition system using Convolutional Neural Networks to accurately identify individuals in images. The model leverages feature extraction and classification layers, trained on a labeled dataset to achieve high precision in face recognition.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={three} alt="three"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
