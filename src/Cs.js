import React from "react";
import "./web.css";
import cs from "./assets/cs.png";
const Cs = () => {
  return (
    <>
      <main id="about">
      <div class="about">
          <div class="container-fluid pt-2">
            <h2 class="h2-responsive section-heading fw-bold text-center my-3">
              Cyber Security
            </h2>
            <p class="text-center w-responsive  pt-2 mt-3 mb-1">
              Introduction to Cyber Security was designed to help learners develop a deeper understanding of modern information and system protection technology and methods. The learning outcome is simple: We hope learners will develop a lifelong passion and appreciation for cyber security, which we are certain will help in future endeavors. Students, developers, managers, engineers, and even private citizens will benefit from this learning experience. Special customized interviews with industry partners were included to help connect the cyber security concepts to live business experiences.

            </p>

            <div class="row pt-5">
              <div class="col-md-6 align-items-stretch">
                <img src={cs} alt=""
                  class="img-fluid shadow mb-2 bg-body rounded-3" />
              </div>
              <div class="col-md-6">
                <h2 class="h3-responsive fw-bold mt-3 mb-3 text-center">
                  What you'll learn
                </h2>

                <p class="lh-base">
                  Quizzes and projects for Introduction to Cyber Security were designed to exercise the learner’s understanding and retention of the covered topics. Emphasis is on foundational issues, rather than just memorizing facts. The goal is to help learners develop the habit of properly assessing and improving cyber risk posture in real computing, networking, and software systems. Authentic scenarios are included based on practical enterprise and infrastructure deployments to enhance the learning experience.
                </p>
                <p>
                  <h2 className=" h2-responsive fw-bold">Courses Offered</h2>
                  <ul>
                    <li>Summarize the main purpose of cyber security as a discipline</li>
                    <li>Summarize the basics of identification and authentication in cyber security</li>
                    <li>Explain the pros and cons of security through obscurity</li>
                    <li>Develop a lifelong learning plan for potential careers in cyber security</li>

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

export default Cs;