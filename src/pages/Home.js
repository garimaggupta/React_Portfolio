import React from "react";
import Navbar from "../components/Navbar"

function About() {
    return (
        <div>
            <Navbar currentpage="about" />

            <div className="container" id="no-padding">
                <div className="row">

                    <div className="col-md-8" id="section-block">
                        <h1>About Me</h1>
                        <hr />
                        <img src="images/aboutME.JPG" alt="About me" height="200" width="200" />
                        <p className="p-block">
                            My name is Garima Gupta and I am currently working as Implementation Consultant for Whispir Americas. (
                <a href="www.whispir.com">whispir.com</a>).
                <br /> I have 10+ years of professional experience working with different industries as a Technical Consultant.
                Being a people person, I love working with customers and design and develop solutions that serve their
                needs. Prior to joining Whispir, I worked as a Implementation Consultant at Northplains Systems and Solutions
                Developer at IBM. <br/>
                I am currently enrolled in University of Washington Full-Stack Coding Bootcamp, graduating in March 2021. Armed with cutting-edge technologies - HTML/CSS/JavaScript, Mongo/MYSQL, NodeJS/React - I am looking forward to working on exciting projects! 
                </p>
                        <br />
                        <p className="p-block">
                            I live in Vancouver, BC with my husband, Pady, and our very active three four old toddler, Om. When we are not running behind
                            Om, we like to go on hikes and enjoy beautiful sunsets on Vancouver waterfront.
            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
