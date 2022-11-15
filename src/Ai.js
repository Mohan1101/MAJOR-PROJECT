import React from "react";
import "./web.css";
import ai from "./assets/ai.png";
const Ai = () => {
  return (
    <>
      <main id="about">
        <div class="about">
          <div class="container-fluid pt-2">
            <h2 class="h2-responsive section-heading fw-bold text-center my-3">
              Artificial Intelligence
            </h2>
            <p class="text-center w-responsive  mt-1 mb-1">
              Artificial intelligence (AI) is transforming our world. Whether you’re a student, a developer, or a technology consultant - understanding AI and knowing how to create AI-powered applications can give you an edge in your career. This Professional Certificate is designed to arm you with the skills to work as an AI developer.

            </p>

            <div class="row pt-5">
              <div class="col-md-6 align-items-stretch">
                <img src={ai}   alt=""
                  class="img-fluid shadow mb-2 bg-body rounded-3" />
              </div>
              <div class="col-md-6">
                <h2 class="h3-responsive fw-bold mt-3 mb-3 text-center">
                  What you'll learn
                </h2>

                <p class="lh-base">
                This program will give you a firm understanding of AI technology, its applications, and its use cases. You will become familiar with concepts and tools like machine learning, data science, natural language processing, image classification, image processing, IBM Watson AI services, OpenCV, and APIs. Even if you have no programming background, through this Professional Certificate, you will learn practical Python skills to design, build, and deploy AI applications on the web. The courses will also enable you to apply pre-built AI smarts to your products and solutions.
                </p>
                <p>
                  <h2 className=" h2-responsive fw-bold">Courses Offered</h2>
                  <ul>
                    <li>Understand the definition of AI, its applications and use cases, and explain terms like machine learning, deep learning, and neural networks</li>
                    <li>Build a chatbot using IBM Watson Assistant</li>
                    <li>Create AI chatbots and virtual assistants without any programming and deploy them on a website.</li>
                    <li>Build AI-powered solutions using IBM Watson AI services, APIs, and Python with minimal coding </li>
                    <li>Apply computer vision techniques using Python, OpenCV, & Watson and develop custom image classification models and deploy them to the Cloud</li>

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

export default Ai;