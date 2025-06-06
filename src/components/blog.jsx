import React from 'react';
import styles from './Blog.module.css';
import zohoImg from '../assets/zoho.jpg';
import ssImg from '../assets/ss.jpg';
import uImg from '../assets/u.jpg';
import scImg from '../assets/sc.jpg';
import zzImg from '../assets/zz.jpg';
import bgImg from '../assets/bgbg.jpg';


const Blog = () => {
  return (
    <div className={styles.Blog}style={{ backgroundImage: `url(${bgImg})` }}>
      <h1 className={styles.mainTitle}>BLOGS</h1>

      {/* Blog Post 1 */}
      <div className={styles.section1}>
        <div className={styles.text}>
          <h2>Meeting the Visionary Behind Zoho-Sridhar Vembu, CEO of Zoho</h2>
          <p>
            I had the incredible opportunity to meet Mr. Sridhar Vembu, CEO of Zoho Corporation, at his R&D center and home. This visit was a deeply inspiring experience where I gained valuable guidance on innovation, entrepreneurship, and building with purpose. Hearing his thoughts on decentralization, simplicity, and long-term thinking gave me a fresh perspective on tech and leadership. It was an unforgettable moment in my journey as a developer.
          </p>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/posts/pranav-arasu-097a5627b_zoho-sridharvembu-activity-7234790935925035008-tRUI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERSJfMBJajyGOf3hnsT65_dDItotjfHwi8" target="_blank">View more</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={zohoImg} alt="Blog1" />
        </div>
      </div>

      {/* Blog Post 2 (duplicate and modify for more posts) */}
      <div className={styles.section2}>
        <div className={styles.imageContainer}>
          <img src={ssImg} alt="Blog2" />

        </div>
        <div className={styles.text}>
          <h2>Honored with the Best Student Award by ISTE</h2>
          <p>
            I am proud to share that I have been honored with the Best Student Award by the Indian Society for Technical Education (ISTE). This recognition motivates me to continue striving for excellence in my academic and technical pursuits. Being acknowledged by such a prestigious organization fuels my passion for learning, innovation, and contributing meaningfully to the tech community. I’m grateful for this encouragement and excited to keep pushing my boundaries.
          </p>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/posts/pranav-arasu-097a5627b_iste-activity-7318131444910907392-4XPk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERSJfMBJajyGOf3hnsT65_dDItotjfHwi8" target="_blank">View More</a>
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.text}>
          <h2>Our Robot Welcomes Guests with CNN Facial Recognition</h2>
          <p>
            My team developed an innovative robot equipped with Convolutional Neural Network (CNN) based facial recognition technology. This robot can accurately detect and identify people in real time. As a special feature, our robot warmly welcomed the chief guest at our event by recognizing them through facial detection and greeting them automatically.

This project challenged us to integrate machine learning with robotics, combining hardware and software skills to create a smart, interactive system. It was a rewarding experience that sharpened our understanding of AI, computer vision, and real-world applications of neural networks. We’re proud of this achievement and excited to explore more AI-driven innovations in the future.
          </p>
          
        </div>
        <div className={styles.imageContainer}>
          <img src={uImg} alt="Blog3" />

        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.imageContainer}>
          <img src={scImg} alt="Blog4" />

        </div>
        <div className={styles.text}>
          <h2>Robot Model for Person Detection Using CNN</h2>
          <p>
            Our team developed a robot model capable of detecting individuals using Convolutional Neural Network (CNN) based facial recognition technology. The robot processes real-time video input to accurately identify and locate a person within its environment. This project involved integrating machine learning algorithms with robotics to enable intelligent interaction and automation.

Building this system enhanced our skills in deep learning, computer vision, and embedded systems, demonstrating the practical application of CNNs in robotics. It was an exciting challenge that combined software and hardware components to create a smart, responsive robot model.


          </p>
        
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.text}>
          <h2>Honored with Best Student & Excellence Award by College Management</h2>
          <p>
            I am truly honored to have been recognized by my college management with the Best Student Award along with the title of Student Excellence. This recognition reflects my dedication to academics, leadership, and active participation in college activities.

Receiving this award motivates me to continue striving for excellence, embracing challenges, and contributing positively to my community. I’m grateful to my mentors and peers who supported me throughout this journey.
          </p>
          
        </div>
        <div className={styles.imageContainer}>
          <img src={zzImg} alt="Blog5" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
