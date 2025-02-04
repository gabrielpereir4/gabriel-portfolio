import React from 'react'
import styles from "../styles/Section.module.css";

function Contact(){
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.spacedContainer}>
                <h1>Contact</h1>
            </div>
            <div className={styles.smallContainer}>
                <ul className={styles.alignedText}>
                    <li>gabrieljpe@hotmail.com</li>
                    <li>+55 11 947150901</li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;