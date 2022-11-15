import React from "react";
import "./web.css";
import sd from "./assets/sd.png";
const Sd = () => {
  return (
    <>
      <main id="about">
        <div class="about">
          <div class="container-fluid pt-2">
            <h2 class="h2-responsive section-heading fw-bold text-center my-3">
              Software development
            </h2>
            <p class="text-center w-responsive  mt-1 mb-1">
            Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what to do. It is independent of hardware and makes computers programmable.

            </p>

            <div class="row pt-5">
              <div class="col-md-6 align-items-stretch">
                <img src={sd} alt=""
                  class="img-fluid shadow mb-2 bg-body rounded-3" />
              </div>
              <div class="col-md-6">
                <h2 class="h3-responsive fw-bold mt-3 mb-3 text-center">
                  What you'll learn
                </h2>

                <p class="lh-base">
                Welcome to the Ultimate Software Developer Bootcamp.Learn Kotlin from scratch! Grasp object-orientation and idiomatic Kotlin to realize coding projects and Android apps!.

We'll take you from absolute beginner to competent full-stack web developer in a matter of weeks.
                </p>
                <p>
                  <h2 className=" h2-responsive fw-bold">Courses Offered</h2>
                  <ul>
                    <li>Create professional applications using Kotlin, the new Java-based programming language developed by Jetbrains</li>
                    <li>Understand the concepts of the Kotlin language and how it integrates neatly with Java</li>
                    <li>Understand the basics of object-oriented software development, the most important development paradigm</li>
                    <li>Understand the principles behind other object-oriented languages like Java, C++, PHP, C#, Scala, or Swift</li>
                    <li>Use Intellij, the popular Java (and Kotlin) IDE, to write code effectively and professionally</li>
                    <li>Read code and write your Kotlin code as well</li>               
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
export default Sd;