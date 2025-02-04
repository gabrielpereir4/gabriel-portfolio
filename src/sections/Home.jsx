import React from 'react';
import styles from "../styles/Section.module.css";

const Home = () => {
    return (
        <section id="home" className={styles.section}>
            <div className={styles.profile}>
                <div className={styles.profilePicture} />
                <div className={styles.profileDescription}>
                    <h2>Welcome to my Portfolio!</h2>
                    <div className={styles.profileDescriptionText}> 
                        <p>
                            My name is <strong>Gabriel Pereira.</strong> I'm a software developer located in Brazil, graduated from 
                            UNICAMP (Universidade Estadual de Campinas) and a future M. Sc. student at USP 
                            (Universidade de São Paulo). I build <strong>backend, fullstack, games and RPA projects</strong>.
                        </p>
                        <p>
                            Learn about some of the projects I have been involved in, some of my interests, and experiences.
                        </p>
                    </div>
                    <div className={styles.profileLinks}>
                        <a className={styles.icon} href="https://github.com/gabrielpereir4" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/github.png" alt="GitHub" className={styles.icon} />
                        </a>
                        <a className={styles.icon} href="http://linkedin.com/in/gabrielpereir4" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/linkedin.png" alt="Linkedin" className={styles.icon} />
                        </a>
                        <a className={styles.icon} href="http://lattes.cnpq.br/9637647215636047" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/lattes.png" alt="Lattes" className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Home;