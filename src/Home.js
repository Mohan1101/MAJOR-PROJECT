import React from "react";
import intro2 from "./assets/intro2.png"
import intro3 from "./assets/intro3.png"
import slide2 from "./assets/slide2.png"
import {Link} from "react-router-dom"
import "./home.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
function Home(){

  return (
    <>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={intro2} class="d-block w-100 h-100" alt="..."/>
      <div class="carousel-caption  d-block">
        <h5>Code Academy</h5>
        <p>Upgrade yourself with demanding skills</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100 h-100" alt="..."/>
      <div class="carousel-caption  d-block">
        <h5>Code Academy</h5>
        <p>Get placed in highly reputed companies</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={intro3} class="d-block w-100 h-100" alt="..."/>
    <div class="carousel-caption  d-block">
        <h5>Code Academy</h5>
        <p>Crack the interviews in minutes and grab amazing opportunities</p>
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
  {/*Carousel*/}

  {/*Aboutus*/}

      <div className="container-fluid">
        <div className="about">
          <h1 class="aboutus">About Us</h1>
          <p>
          We envision a world where anyone, anywhere has the power to transform their life through learning. Code Academy partners with more than 275 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.
          </p>

        </div>
      </div>

{/*Aboutus end*/}
{/*Courses*/}
      <div class="container">
        <h2 class="fw-bold h2-responsive text-center">Come, Learn with us!</h2>
        <ul class="cards1">
          <li class="card1">
            <div>
              <h3 class="card1-title">WebDevelopment</h3>
              <div class="card1-content">
                <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
              </div>
            </div>
            <div class="card1-link-wrapper">
            <Link to="/web"> <a class="card1-link">Learn More</a> </Link>
            </div>
          </li>
          <li class="card1">
            <div>
              <h3 class="card1-title">Machine Learning</h3>
              <div class="card1-content">
                <p>The Machine Learning Specialization is a foundational online program created in collaboration between DeepLearning.AI and Stanford Online. In this beginner-friendly program, you will learn the fundamentals of machine learning and how to use these techniques to build real-world AI applications.</p>
              </div>
            </div>
            <div class="card1-link-wrapper">
              <Link to="/Ml"> <a class="card1-link">Learn More</a> </Link>
            </div>
          </li>
          <li class="card1">
            <div>
              <h3 class="card1-title">Artificial Intelligence</h3>
              <div class="card1-content">
                <p>Artificial intelligence (AI) is transforming our world. Whether you’re a student, a developer, or a technology consultant - understanding AI and knowing how to create AI-powered applications can give you an edge in your career. This Professional Certificate is designed to arm you with the skills to work as an AI developer.</p>
              </div>
            </div>
            <div class="card1-link-wrapper">
              <Link to ="/Ai"><a class="card1-link">Learn More</a> </Link>
            </div>
          </li>
          <li class="card1">
            <div>
              <h3 class="card1-title">Cyber Security</h3>
              <div class="card1-content">
                <p>Introduction to Cyber Security was designed to help learners develop a deeper understanding of modern information and system protection technology and methods. The learning outcome is simple: We hope learners will develop a lifelong passion and appreciation for cyber security, which we are certain will help in future endeavors.</p>
              </div>
            </div>
            <div class="card1-link-wrapper">
            <Link to ="/Cs"><a class="card1-link">Learn More</a> </Link>
            </div>
          </li>
          <li class="card1">
            <div>
              <h3 class="card1-title">Cloud Computing</h3>
              <div class="card1-content">
                <p>This course introduces you to the core concepts of cloud computing. You gain the foundational knowledge required for understanding cloud computing from a business perspective as also for becoming a cloud practitioner. You understand the definition and essential characteristics of cloud computing, its history, the business case for cloud computing, and emerging technology usecases enabled by cloud. </p>
              </div>
            </div>
            <div class="card1-link-wrapper">
            <Link to ="/Cc"><a class="card1-link">Learn More</a> </Link>
            </div>
          </li>
          <li class="card1">
            <div>
              <h3 class="card1-title">Software Development</h3>
              <div class="card1-content">
                <p>Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what to do. It is independent of hardware and makes computers programmable. </p>
              </div>
            </div>
            <div class="card1-link-wrapper">
            <Link to ="/Sd"><a class="card1-link">Learn More</a> </Link>
            </div>
          </li>

        </ul>
      </div>
{/*Courses end*/}

  

    </>
  );
};

export default Home;