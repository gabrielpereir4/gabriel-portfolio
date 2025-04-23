import React from 'react'
import styles from "../styles/Section.module.css";

function USPSoftLivre() {
    return (
        <section id="softlivre" className={styles.section}>
            <div className={styles.spacedContainer}>
                <h1>Software Livre - USP</h1>
            </div>
            <div className={styles.smallContainer}>
                <ul className={styles.alignedText}>
                    <li>
                        <a 
                            href="/posts/2025-03-26-Creating an environment for kernel development.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Creating an Environment for Kernel Development
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/posts/2025-04-12-refactoring-common-hardware-initialization-in-VEML603x-drivers-(veml6030-&-veml6035).md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            VEML603x code refactoring
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/posts/2025-04-12-refactoring-inv_icm42600_core.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            ICM42600 code refactoring
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/posts/2025-04-14-send-first-patch.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            About sending our first patch
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default USPSoftLivre;