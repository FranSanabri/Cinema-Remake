import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa los iconos necesarios
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/fran.sanabria/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/francisco-jesus-sanabria-07b189236/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/FranSanabri" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>Creado por Francisco Jesus Sanabria</p>
    </footer>
  );
};

export default Footer;
