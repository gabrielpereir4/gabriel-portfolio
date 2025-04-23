import React from 'react';
import { Link } from "react-scroll";
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbarList}>
      <li><Link to="home" smooth={true} duration={500} activeClass={styles.active}>Home</Link></li>
      <li><Link to="about" smooth={true} duration={500}>About</Link></li>
      <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
      <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      <li><Link to="softlivre" smooth={true} duration={500}>Software Livre</Link></li>
    </ul>
  </nav>
);

export default Navbar;