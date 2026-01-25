import React from 'react';
import styles from "../styles/Section.module.css";

function Education(){
    return (
        <section id="education" className={styles.section}>
            <div className={styles.spacedContainer}>
                <div className={styles.smallContainer}>
                    <h3>Education</h3>
                    <h4>My education:</h4>
                </div>

                <ul className={styles.alignedText}>
                    <li>UNICAMP - Systems' Analysis and Development (2021-2024)</li>
                    <li>USP - Master's in Computer Science (Approved 2025))</li>
                </ul>
                <div className={styles.download}>
                    <a  href={`${process.env.PUBLIC_URL}/assets/CV8_Gabriel_eng.pdf`} download>
                    📄 Download my CV here!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Education;