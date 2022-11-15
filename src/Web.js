import React from "react";
import "./web.css";
import web from "./assets/web.png";
const Web = () => {
  return (
    <>
      <main id="about">
        <div class="about">
          <div class="container-fluid pt-2">
            <h2 class="h2-responsive section-heading fw-bold text-center my-3">
              Web development
            </h2>
            <p class="text-center w-responsive  mt-1 mb-1">
              Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.

            </p>

            <div class="row pt-5">
              <div class="col-md-6 align-items-stretch">
                <img src={web} alt=""
                  class="img-fluid shadow mb-2 bg-body rounded-3" />
              </div>
              <div class="col-md-6">
                <h2 class="h3-responsive fw-bold mt-3 mb-3 text-center">
                  What you'll learn
                </h2>

                <p class="lh-base">
                Welcome to the Ultimate Web Developer Bootcamp. This is your one-stop-shop to learn front-end AND back-end development.

We'll take you from absolute beginner to competent full-stack web developer in a matter of weeks.
                </p>
                <p>
                  <h2 className=" h2-responsive fw-bold">Courses Offered</h2>
                  <ul>
                    <li>Build websites with HTML & CSS</li>
                    <li>Build backend servers & APIs with Node and Express</li>
                    <li>Build frontend applications with React</li>
                    <li>Work with NoSQL databases like MongoDB</li>
                    <li>Build full-stack web apps with Facebook's React Framework</li>
                    <li>Build mobile-friendly websites with Bootstrap 4 & CSS</li>
                  </ul>
                </p>
              </div>
            </div>


          </div>
        </div>

      </main>
    </>
  )


};
export default Web;