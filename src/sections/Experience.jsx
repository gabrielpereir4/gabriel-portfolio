import React from 'react';
import styles from "../styles/Section.module.css";

function Experience(){
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.spacedContainer}>
                <div className={styles.smallContainer}>
                    <h3>Professional Experiencee</h3>
                    <h4>My experience:</h4>
                </div>
                
                <ul className={styles.alignedText}>
                    <li>RPA Developer (2022-2023)
                        <ul className={styles.descriptionList}>
                            <li>Developed RPA solutions for automating business processes</li>
                            <li className={styles.techdescription}>Low-code RPA, HTML, CSS, JavaScript</li>
                        </ul>
                    </li>
                    <li>Undergraduate Researcher (2024)
                        <ul className={styles.descriptionList}>
                            <li>Developed a web-based visualization tool for oil reserves exploration processes.</li>
                            <li className={styles.techdescription}>Python (Plotly and Dash)</li>
                        </ul>
                    </li>
                    <li>Freelancer (2023-now)
                        <ul className={styles.descriptionList}>
                            <li>Developer of freelance projects, involving RPA, static websites and also desktop apps.</li>
                            <li className={styles.techdescription}>Python, Java, and React</li>
                        </ul>
                    </li>
                    <li>RPA Consultant/Developer (April 2025-June 2025)
                        <ul className={styles.descriptionList}>
                            <li>Developer of BPMN and BPMS workflows, RPA systems, and JS and Java integrations/scripts.</li>
                            <li className={styles.techdescription}>JavaScript, Java</li>
                        </ul>
                    </li>
                    <li>R&D Software Developer (April 2025-June 2025)
                        <ul className={styles.descriptionList}>
                            <li>Developer of features, fixes and documentation/tests in Java, C and Python for medical devices.</li>
                            <li className={styles.techdescription}>Java, C, Python, Linux, Git, Docker, Jenkins</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;