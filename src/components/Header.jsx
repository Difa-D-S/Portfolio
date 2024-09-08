import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import hero from "../assets/hero.png";
import { Link } from "react-scroll";

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="header">
      <Navbar expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home" className={`px-3 ${activeLink === 'difa' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('difa')}><p className="logo">Difa D S</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={`px-3 ${activeLink === 'home' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('home')}
              >
               <p className="homelinks">Home</p>
              </Nav.Link>
              <Nav.Link 
                href="#about" 
                className={`px-3 ${activeLink === 'about' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('about')}
              >
                <p className="homelinks">About</p>
              </Nav.Link>
              <Nav.Link 
                href="#experience" 
                className={`px-3 ${activeLink === 'experience' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('experience')}
              >
               <p className="homelinks">Experience</p>
              </Nav.Link>
              <Nav.Link 
                href="#skill" 
                className={`px-3 ${activeLink === 'skill' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('skill')}
              >
                <p className="homelinks">Skill</p>
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={`px-3 ${activeLink === 'projects' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('projects')}
              >
                <p className="homelinks">Project</p>
              </Nav.Link>
              <Nav.Link 
                href="#education" 
                className={`px-3 ${activeLink === 'education' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('education')}
              >
                <p className="homelinks">Education</p>
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                className={`px-3 ${activeLink === 'contact' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('contact')}
              >
                <p className="homelinks">Contact</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
