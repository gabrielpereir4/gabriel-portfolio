import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = ({app_version}) => (
  <footer className={styles.footer}>
    <p>Developed in React.js by Gabriel Pereira</p>
    <p id="app_version">{app_version}</p>
  </footer>
);

export default Footer;