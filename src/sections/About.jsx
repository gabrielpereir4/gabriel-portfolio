import React from 'react';
import styles from "../styles/Section.module.css";

function About(){
    return (
        <section id="about" className={styles.section}>
            <div className={styles.spacedContainer}>
                <div className={styles.smallContainer}>
                    <h3>About Me</h3>
                    <h4>My experience:</h4>
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
                            <li>Worked with Python, Java, and React</li>
                        </ul>
                    </li>
                    <li>RPA Consultant/Developer (April 2025-now)
                        <ul className={styles.descriptionList}>
                            <li>Developer of BPMN and BPMS workflows, RPA systems, and JS and Java integrations/scripts.</li>
                            <li>Lecom, JavaScript, Java</li>
                        </ul>
                    </li>
                </ul>

                <h3>My education:</h3>
                <ul className={styles.alignedText}>
                    <li>UNICAMP - Systems' Analysis and Development (2021-2024)</li>
                    <li>USP - Master's in Computer Science (2025-2026)</li>
                </ul>
                <div className={styles.download}>
                    <a  href={`${process.env.PUBLIC_URL}/assets/CV7_Gabriel_eng.pdf`} download>
                    📄 Download my CV here!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;