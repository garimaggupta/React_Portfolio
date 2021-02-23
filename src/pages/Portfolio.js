import React from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"

function Portfolio() {
    return (
        <div>
        <Navbar currentpage="portfolio"/>
        <div className="container" >
        
            <section className="row">
                <article className="col-md-12" id="section-block">
                    <h1>Portfolio</h1>
                    <hr />
                    <br />
                    <div className="row extra-padding">
                        <div className="col-sm-12 col-md-12 col-lg-4 extra-padding">
                            <Card appname="Dumbbell and Donuts" appdesc="Web App that lets you keep track of your nutrition and fitness!" imgsrc="images/portfolio/dumbbells_and_donuts.png" applink="https://alischrec.github.io/Dumbbells_and_Donuts/" githubrepo="https://github.com/Alischrec/Dumbbells_and_Donuts" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Family Friend Finder" appdesc="Looking for new families to hang out with! Try Family Friend Finder!" imgsrc="images/portfolio/Family_Friend_Finder.png" applink="https://family-friends-finder.herokuapp.com/" githubrepo="https://github.com/Family-Friend-Finder/Family-Friend-Finder/" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Budget Tracker" appdesc="Web App that keeps track of your transactions helping you plan your budget. BONUS: App works even if you are offline. Now that NEAT!" imgsrc="images/portfolio/Budget_Tracker.png" applink="https://personal-budgets-tracker.herokuapp.com/" githubrepo="https://github.com/garimaggupta/Budget_Tracker/" />
                        </div>
                    </div>
                    <div className="row extra-padding">
                        <div className="col-sm-12 col-md-12 col-lg-4 extra-padding">
                            <Card appname="Note Taker" appdesc="Web App that allows users to write, save, and delete notes. One stop shop to maintain all your TO-DOs" imgsrc="images/portfolio/Note_Taker.png" applink="https://express-notes-apps.herokuapp.com/" githubrepo="https://github.com/garimaggupta/Note_Taker/" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Work Day Scheduler" appdesc="Web App that provides end users ability to plan their work day (9 am to 5 pm)." imgsrc="images/portfolio/workday_scheduler.png" applink="https://garimaggupta.github.io/hw5/" githubrepo="https://github.com/garimaggupta/hw5/" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Weather Dashboard" appdesc="Weather App that provides the capability to search  current weather - temperature, humidity, wind speed, and UV index from any location. " imgsrc="images/portfolio/weather.jpg" applink="https://garimaggupta.github.io/hw6/" githubrepo="https://github.com/garimaggupta/hw6/" />
                        </div>
                    </div>
                    <div className="row extra-padding">
                        <div className="col-sm-12 col-md-12 col-lg-4 extra-padding">
                            <Card appname="Javascript Quiz" appdesc="Web App that allows user to take a timed quiz on JavaScript fundamentals and stores high scores in persistant storage." imgsrc="images/portfolio/javascript_quiz.jpg" applink="https://garimaggupta.github.io/hw4/" githubrepo="https://github.com/garimaggupta/hw4/" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Hot Kanbuns" appdesc="An easy-to-use kanban app that allows users to keep track of the progression of multiple projects using the 'To Do', 'In Progress' and 'Done' categories, as well as mark task priority." imgsrc="images/portfolio/kanbuns.png" applink="https://hotkanbuns.herokuapp.com/" githubrepo="https://github.com/UW-BCS-TEAM/Hot-KanBuns/" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Password Generator" appdesc="This application generates a random password of specified length based on user-defined criteria." imgsrc="images/portfolio/password_generator_screenshot.jpg" applink="https://garimaggupta.github.io/hw3/" githubrepo="https://github.com/garimaggupta/hw3/" />
                        </div>
                    </div>
                    <div className="row extra-padding">
                        <div className="col-sm-12 col-md-12 col-lg-4 extra-padding">
                            <Card appname="Google Book Search" appdesc="The app allows the users to search the books by title using Google Book Search APIs. Additionally users have the capability to maintain their own Books library by saving the books they like to read later." imgsrc="images/portfolio/Google_Book_Search.png" applink="https://react-books-searches.herokuapp.com/" githubrepo="https://github.com/garimaggupta/Google_Book_Search/" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Employee Management System" appdesc="The app is command-line application to manage company employees. This app allows you to add, update and remove Departments,Roles and Employee data." imgsrc="images/portfolio/Employee_Management_CMS.png" applink="https://github.com/garimaggupta/Employee_Management_System/" githubrepo="https://github.com/garimaggupta/Employee_Management_System/" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Card appname="Team Profile Generator" appdesc="The app generates the team profile page of Engineering team through Command Line Interface." imgsrc="images/portfolio/team_profile_generator.png" applink="https://github.com/garimaggupta/Team_Profile_Generator" githubrepo="https://github.com/garimaggupta/Team_Profile_Generator" />
                        </div>
                    </div>
                </article>
            </section>
        </div>
        </div>
    );
}

export default Portfolio;