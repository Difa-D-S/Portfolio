import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import hero from "../assets/hero.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
    {/* <section id="home" className="">
      <section className="py-5">
      <Container>
        <Row className="py-5">          
            <Col md={6}>
              <div className="welcome">
                <h1>Welcome to My Portfolio!</h1>
                <h3 className="py-4"><b>I'm a Full Stack Developer</b></h3>
                <p>
                  I'm Difa D S, a passionate Front-End Developer in React.js and Back-End Developer in PHP
                  and Node.js. I specialize in React.js, React Boostrap, Node.js, Express.js, MongoDB, Tailwind Cssand PHP, creating
                  responsive and user-friendly web applications.
                </p>
                <button className="py-2 px-3 my-3">View my work</button>
              </div>
            </Col>

            <Col md={6}>
            <div className="heroimage pt-5 pt-md-0">
              <img
                  src={hero}
                  alt="profile"
                  width={300}
                  height={300}
                  className="profile"
                />
               </div>
            </Col>
          
        </Row>
        </Container>
      </section>
      
    </section> */}

<section id="home" className="hero-section">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="text-content">
        <div className="welcome">
          <h1 className="animate__animated animate__fadeIn">Welcome to My Portfolio!</h1>
          <h3 className="py-4 animate__animated animate__fadeIn animate__delay-1s">
            <b>I'm a Full Stack Developer</b>
          </h3>
          <p className="animate__animated animate__fadeIn animate__delay-2s">
            I'm Difa D S, a passionate Front-End Developer in React.js and Back-End Developer in PHP
            and Node.js. I specialize in React.js, React Bootstrap, Node.js, Express.js, MongoDB, Tailwind CSS, and PHP,
            creating responsive and user-friendly web applications.
          </p>
          <button className="py-2 px-3 my-3 animate__animated animate__fadeIn animate__delay-3s">
            View my work
          </button>
        </div>
      </Col>

      <Col md={6}>
        <div className="heroimage pt-5 pt-md-0">
          <img
            src={hero}
            alt="profile"
            width={300}
            height={300}
            className="profile animate__animated animate__zoomIn"
          />
        </div>
      </Col>
    </Row>
  </Container>
</section>
    
    </>
    
  );
};

export default Home;
