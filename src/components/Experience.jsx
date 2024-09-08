import React from "react";
import { Container } from "react-bootstrap";

const Experience = () => {
  return (
    // <section id="experience" className="p-3 p-md-5">
    //   <Container>
    //   <div className="experience">
    //     <h1 className="pb-3">Experience</h1>

    //     <div className="resume">
    //       <div className="para pe-3">
    //         <div className="ps-2 py-4 py-md-0">
    //           <div>
    //             <h3>PHP Developer</h3>
    //             <h6>Shadobooks, Marthandam</h6>
    //             <p>May 2024 - Present</p>
    //           </div>

    //           <ul>
    //             <li className="py-2">
    //               Developing CRM software and custom websites using PHP.
    //             </li>
    //             <li className="py-2">
    //               Collaborating with cross-functional teams to design and
    //               implement web solutions.
    //             </li>
    //             <li className="py-2">
    //               Enhancing website functionality and ensuring responsiveness
    //               across devices.
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="para">
    //         <div className="ps-2">
    //           <h3>MERN Stack Intern</h3>
    //           <h6>Dexpro Innovations</h6>
    //           <p>Jan 2024 - June 2024</p>

    //           <ul>
    //             <li className="py-2">
    //               Completed React.js, Redux modules and Node.js, focusing on
    //               frontend and backend development.
    //             </li>
    //             <li className="py-2">
    //               Implemented web applications using the MERN stack.
    //             </li>
    //             <li className="py-2">
    //               Collaborated with teams to deploy projects effectively.
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </Container>
    // </section>
    <section id="experience" className="p-3 p-md-5">
  <Container>
    <div className="experience">
      <h1 className="text-center pb-4">Experience</h1>

      <div className="resume">
        <div className="degree-card">
          <div className="experience-content">
            <h3>PHP Developer</h3>
            <div className="degree-hover">
            <h6>Shadobooks, Marthandam</h6>
            <p className="date">May 2024 - Present</p>
            <ul>
              <li>Developing CRM software and custom websites using PHP.</li>
              <li>Collaborating with cross-functional teams to design and implement web solutions.</li>
              <li>Enhancing website functionality and ensuring responsiveness across devices.</li>
            </ul>
            </div>
          </div>
        </div>

        <div className="degree-card">
          <div className="experience-content">
            <h3>MERN Stack Intern</h3>
            <h6>Dexpro Innovations</h6>
            <p className="date">Jan 2024 - June 2024</p>
            <ul>
              <li>Completed React.js, Redux modules and Node.js, focusing on frontend and backend development.</li>
              <li>Implemented web applications using the MERN stack.</li>
              <li>Collaborated with teams to deploy projects effectively.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

  );
};

export default Experience;
