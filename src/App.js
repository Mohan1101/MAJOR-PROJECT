import React from "react";
import "./index.css";
import Home from "./Home";
import Contact from "./Contact";
import logo from "./assets/logo.png";
import Web from "./Web";
import Ml from "./Ml";
import Ai from "./Ai";
import Cc from "./Cc";
import Cs from "./Cs";
import Sd from "./Sd";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import * as Icon from 'react-bootstrap-icons'
import { NavLink, Route, Routes } from "react-router-dom";
import Timer from "./components/time.js";
import Form from "./Form.js";
import Pricing from "./pricing";
import Register from "./register";

function App() {
  return (
    <>
 
      <header>
        <section id="header"
          className="mb-2 mb-lg-0 mb-sm-0 d-none d-lg-flex align-items-center pt-2 pb-2  topbar-transparent topbar ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-start">
                <span className="px-3"><a className="m-2"><Icon.Clock /></a><a className="m-1"><Timer /></a></span>
                Mon-Sat: 11:00 AM - 23:00 PM
              </div>
              <div className="col-md-6 text-end">
                <a href="" className="me-4 text-reset">
                  <Icon.Facebook />
                </a>
                <a href="" className="me-4 text-reset">
                  <Icon.Whatsapp />
                </a>
                <a href="" className="me-4 text-reset">
                  <Icon.Instagram />
                </a>
                <a className="me-4 text-reset">
                  <Icon.Linkedin />
                </a>
                <a href="" className="me-4 text-reset">
                  <Icon.Github />
                </a>
                <a href="" className="me-4 text-reset">
                  <Icon.Twitter />
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>



      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div class="logo">
          <a class="navbar-brand">
            <NavLink to='/' ><img src={logo} width="40" height="30" class="d-inline-block align-text-top rounded mx-1" /></NavLink>
            <strong>CODE ACADEMY</strong>

          </a>
        </div>
        <ul class="links">
          <li class="nav-item mx-3">
            <NavLink to='/' ><h1 class="nav-link active">Home</h1></NavLink>
          </li>

          <li class="nav-item dropdown mx-3">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Courses
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink to='/Web' ><a class="dropdown-item text-center">Webdevelopment</a></NavLink></li>
              <li><hr class="dropdown-divider" /></li>
              <li><NavLink to='/Ml' ><a class="dropdown-item text-center" >Machine Learning</a></NavLink></li>
              <li><hr class="dropdown-divider " /></li>
              <li><NavLink to='/Ai' ><a class="dropdown-item text-center px-2" >Artificial Intelligence</a></NavLink></li>
              <li><hr class="dropdown-divider" /></li>
              <li><NavLink to='/Cs' ><a class="dropdown-item text-center" >Cyber Security</a></NavLink></li>
              <li><hr class="dropdown-divider" /></li>
              <li><NavLink to='/Cc' ><a class="dropdown-item text-center" >Cloud Computing</a></NavLink></li>
              <li><hr class="dropdown-divider" /></li>
              <li><NavLink to='/Sd' ><a class="dropdown-item text-center px-3" >Software Development</a></NavLink></li>

            </ul>
          </li>

          <li class="nav-item mx-3">
            <NavLink to='/pricing' ><h1 class="nav-link active">Pricing</h1></NavLink>
          </li>


          <li class="nav-item mx-3">
            <NavLink to='/form' ><h1 class="nav-link active">Login</h1></NavLink>
          </li>
          <li class="nav-item mx-3">
            <NavLink to='/register' ><h1 class="nav-link active">Register</h1></NavLink>
          </li>
          <li class="nav-item mx-3">
            <NavLink to='/Contact' ><h1 class="nav-link active">Contact</h1></NavLink>

          </li>

        </ul>


        <label for="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>




      <Routes>
        <Route path="/" element={<Home />} />
   
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Ml" element={<Ml />} />
        <Route path="/Ai" element={<Ai />} />
        <Route path="/Cs" element={<Cs />} />
        <Route path="/Cc" element={<Cc />} />
        <Route path="/Sd" element={<Sd />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;






