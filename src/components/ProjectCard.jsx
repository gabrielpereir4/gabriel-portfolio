import React from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ iconSrc, title, githubLink, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={iconSrc} alt={title} className={styles.icon} />                
                <h2 className={styles.title}>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>           
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default ProjectCard;