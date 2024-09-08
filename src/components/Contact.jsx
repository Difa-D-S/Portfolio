import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    // <section id="contact" className="py-5">
    //  <Container>
    //  <div>
    //     <h1 className="pb-3">ContactMe</h1>
       
    //     <Row className=''>
    //       <Col md={6}>
    //         <div className='pt-4'>
    //           <div  className='d-flex align-baseline'>
    //           <p><b>Address:</b></p>
    //           <p className="ps-2">Thamaracheri vilai, <br /> Kovel, <br /> Thiruvarmbu(P.O).</p>
    //           </div>
    //           <p className=""><b>Phone:</b> <span className='ps-1'>+91 9487255653</span></p>
    //           <p className=""><b>Email:</b> <span className='ps-1'>difads123@gmail.com</span></p>
    //           <p className=""><b>GitHub Link:</b> <span className='ps-1'>https://linkedin.com/in/difads</span></p>
    //           <p className=""><b>LinkedIn:</b> <span className='ps-1'>https://github.com/Difa-D-S</span></p>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    //  </Container>
    // </section>

    <section id="contact" className="py-5">
  <Container>
    <div>
      <h1 className="text-center pb-4">Contact Me</h1>
      
      <Row className='align-items-center'>
        <Col md={6} className="contact-info">
          <div className='pt-4'>
            <div className='d-flex align-items-start mb-3'>
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <p className="ps-3">Thamaracheri vilai, <br /> Kovel, <br /> Thiruvarmbu(P.O).</p>
            </div>
            <div className='d-flex align-items-start mb-3'>
              <i className="fas fa-phone contact-icon"></i>
              <p className="ps-3">+91 9487255653</p>
            </div>
            <div className='d-flex align-items-start mb-3'>
              <i className="fas fa-envelope contact-icon"></i>
              <p className="ps-3">difads123@gmail.com</p>
            </div>
            <div className='d-flex align-items-start mb-3'>
              <i className="fab fa-linkedin contact-icon"></i>
              <p className="ps-3"><a href="https://linkedin.com/in/difads" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
            <div className='d-flex align-items-start'>
              <i className="fab fa-github contact-icon"></i>
              <p className="ps-3"><a href="https://github.com/Difa-D-S" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
          </div>
        </Col>
        
        <Col md={6} className="pt-4">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.778255391618!2d77.31882907570066!3d8.265238293792336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b050f1f7c8d7dbf%3A0x7418e41fbb5e6603!2sThiruvattar%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1694207652009!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
            title="Map to Thiruvattar"
          ></iframe>
        </Col>
      </Row>
    </div>
  </Container>
</section>

  );
};

export default Contact;
