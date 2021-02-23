import React from "react";
import Navbar from "../components/Navbar"

function Contact() {
  return (
    <div>
    <Navbar currentpage="contact"/>
    <div className="container" >
    <div className="row">
      <div className="col-md-8" id="section-block">
        <h1>Contact Info</h1>
        <hr />

           <p>
           <i className="fas fa-envelope-open-text"></i>
            <strong> Email: </strong>
            <a href="mailto:garimggupta@gmail.com" target="_blank" rel="noreferrer">
              garimaggupta@gmail.com</a>
              </p>
          <p>
            <i className="fab fa-github"></i>
            <strong> GitHub: </strong>
            <a href="https://github.com/garimaggupta" target="_blank" rel="noreferrer" >garimaggupta </a>
            </p>
          <p>
            <i className="fab fa-linkedin"></i>
            <strong> LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/garima-gupta-csm" target="_blank" rel="noreferrer"> Garima Gupta</a>
            </p>
          <p>
            <i className="fas fa-file-pdf"></i>
            <strong> Resume:</strong>
            <a href="Garima_Gupta_Resume.pdf" download="Resume"> Click here to download resume in PDF</a>
            </p>
        <br />
        <br />
      </div>
    </div>
  </div>
  </div>
  );
}

export default Contact;
