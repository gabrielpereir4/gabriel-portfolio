import React from 'react';
import styles from "../styles/Section.module.css";

function About(){
    return (
        <section id="about" className={styles.section}>
            <div className={styles.spacedContainer}>
                <div className={styles.smallContainer}>
                    <h1>About Me</h1>
                    <h2>My experience:</h2>
                </div>
                
                <ul className={styles.alignedText}>
                    <li>RPA Developer (2022-2023)
                        <ul className={styles.descriptionList}>
                            <li>Developed RPA solutions for automating business processes</li>
                            <li>Worked with a low-code platform and HTML, CSS and JS stacks</li>
                        </ul>
                    </li>
                    <li>Undergraduate Researcher (2024)
                        <ul className={styles.descriptionList}>
                            <li>Developed a web-based visualization tool for oil reserves exploration processes.</li>
                            <li>Worked with Python (Plotly and Dash)</li>
                        </ul>
                    </li>
                    <li>Freelancer (2023-now)
                        <ul className={styles.descriptionList}>
                            <li>Developer of freelance projects, involving RPA, static websites and also desktop apps.</li>
                            <li>Worked with Python, Java, and React.</li>
                        </ul>
                    </li>
                </ul>

                <h2>My education:</h2>
                <ul className={styles.alignedText}>
                    <li>UNICAMP - Systems' Analysis and Development (2021-2024)</li>
                    <li>USP - Master's in Computer Science (2025-2026)</li>
                </ul>
                <div className={styles.download}>
                    <a  href="/assets/CV5_Gabriel_eng.pdf" download>
                    📄 Download my CV here!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;