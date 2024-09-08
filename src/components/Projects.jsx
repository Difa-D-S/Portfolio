import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const projects = [
  {
    title: 'Maxims Website',
    description: 'A user-friendly travel booking web application using the MERN stack with Vite and Tailwind CSS.',
    website:"dfg",
  },
  {
    title: 'Tax India Tax',
    description: 'Developed a comprehensive e-commerce platform with a focus on user experience and backend functionality.',
    website:"dfg",
  },
  {
    title: 'E-commerce',
    description: 'Built a e-commerce we application using MERN Stack. Published on Netlify for easy access.',
    github:"dfg",
  },
  {
    title: 'Travel Booking Application',
    description: "A user-friendly travel booking web application using the MERN stack with Vite and Tailwind CSS.",
    github:"sdfg",
  },
];

const Projects = () => {
  return (
    // <section id="projects" className="py-5">
    //   <Container>
    //     <h1 className='pb-3'>Projects</h1>
       
    //    <Row className="py-5 project">
    //       {projects.map((project, index) => (
    //        <Col md={6} lg={6} xl={4} className='project-details'>
    //         <div className=''>
    //           <div key={index} className=" mt-4 py-4 px-4 px-md-5 project-list">
    //             <h3 className="">{project.title}</h3>
    //             <p className="pt-3">{project.description}</p>
    //             {project.website && <p>Website Url: {project.website} </p>}
    //             {project.github && <p>GitHub Link: {project.github} </p>}

    //           </div>
    //         </div>
    //        </Col>
    //       ))}
    //     </Row>   
    //   </Container>
    // </section>
    <section id="projects" className="py-5">
  <Container>
    <h1 className='text-center pb-3'>Projects</h1>
    <Row className="g-4">
      {projects.map((project, index) => (
        <Col md={6} lg={6} xl={4} key={index} className="project-details">
          <div className="project-card">
            <div className="project-card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description pt-3">{project.description}</p>
              {project.website && <a href={project.website} className="project-link" target="_blank" rel="noopener noreferrer">Visit Website</a>}
              {project.github && <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>

  );
};

export default Projects;
