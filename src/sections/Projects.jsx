import React from 'react';
import styles from "../styles/Section.module.css";
import ProjectCard from '../components/ProjectCard';

function Projects(){
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.spacedContainer}>
                <div className={styles.projectTitle}> 
                    <h3>Projects</h3>
                </div>
                
                <div className={styles.projectContainer}>
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}//assets/python.png`}
                        title="QR Code Generator"
                        githubLink={"https://github.com/gabrielpereir4/qrcodegenerator"}
                        description="Simple QRCode generator developed in Python, with a simple TKinter GUI."
                    />  
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}/assets/java.png`}
                        title="Currency Exchange"
                        githubLink={"https://github.com/gabrielpereir4/currencyexchange"}
                        description="Currency Exchange CLI app built entirely in Java using ExchangeRate API."
                    />   
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}/assets/clang.png`}
                        title="Data Structures"
                        githubLink={"https://github.com/gabrielpereir4/datastructures"}
                        description="Data Structures using C, attending a project from UNICAMP."
                    />
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}/assets/java.png`}
                        title="To Do List"
                        githubLink={"https://github.com/gabrielpereir4/todolist"}
                        description="Simple To-Do List CLI Application built in Java with SQLite." 
                    />
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}//assets/python.png`}
                        title="RPA Challenge"
                        githubLink={"https://github.com/gabrielpereir4/rpachallenge"}
                        description="Python RPA project using Selenium and Pandas for completing the RPA Challenge."
                    />
                    <ProjectCard 
                        iconSrc={`${process.env.PUBLIC_URL}/assets/cpp.png`}
                        title="Morse Code Translator"
                        githubLink={"https://github.com/gabrielpereir4/arduinomorsecode"}
                        description="Morse Code translator using C++ and Arduino."
                    />
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}//assets/python.png`}
                        title="Whatsapp Bot"
                        githubLink={"https://github.com/gabrielpereir4/WhatsappMarketingRPA"}
                        description="Freelance Whatsapp Marketing Automation project using Python."
                    />
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}//assets/python.png`}
                        title="DAVis"
                        githubLink={"https://github.com/gabrielpereir4/davis_heatmap_view"}
                        description="Python Plotly/Dash-based web visualization app for oil exploration. Undergraduate Research Project for UNICAMP."
                    />
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}/assets/godot.png`}
                        title="Pong"
                        githubLink={"https://github.com/gabrielpereir4/pong"}
                        description="Clone of the classic Pong game made in Godot."
                    />
                    <ProjectCard
                        iconSrc={`${process.env.PUBLIC_URL}/assets/java.png`}
                        title="Parking Lot"
                        githubLink={"https://github.com/gabrielpereir4/estacionamento"}
                        description="Parking Lot system built in Java, with Swing GUI and MySQL database."
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;