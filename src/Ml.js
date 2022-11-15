import React from "react";
import "./web.css";
import mL from "./assets/mL.PNG";
const Ml = () => {
    return (
        <>
            <main id="about">
            <div class="about">
          <div class="container-fluid pt-2">
            <h2 class="h2-responsive section-heading fw-bold text-center my-3">
                            Machine Learning
                        </h2>
                        <p class="text-center w-responsive  mt-1 mb-1">
                            The Machine Learning Specialization is a foundational online program created in collaboration between DeepLearning.AI and Stanford Online. In this beginner-friendly program, you will learn the fundamentals of machine learning and how to use these techniques to build real-world AI applications.


                        </p>

                        <div class="row pt-5">
                            <div class="col-md-6 align-items-stretch">
                                <img src={mL} alt=""
                                    class="img-fluid shadow mb-2 bg-body rounded-3" />
                            </div>
                            <div class="col-md-6">
                                <h2 class="h3-responsive fw-bold mt-3 mb-3 text-center">
                                    What you'll learn
                                </h2>

                                <p class="lh-base">
                                    In the first course of the Machine Learning Specialization, you will be
                                    provided with a broad introduction to modern machine learning, including supervised learning (multiple linear regression, logistic regression, neural networks, and decision trees), unsupervised learning (clustering, dimensionality reduction, recommender systems), and some of the best practices used in Silicon Valley for artificial intelligence and machine learning innovation (evaluating and tuning models, taking a data-centric approach to improving performance, and more.)
                                </p>
                                <p>
                                    <h2 className=" h2-responsive fw-bold">Courses Offered</h2>
                                    <ul>
                                        <li>Build machine learning models in Python using popular machine learning libraries NumPy & scikit-learn</li>
                                        <li>Build & train supervised machine learning models</li>
                                        <li>Prediction & binary classification tasks, including linear regression & logistic regression</li>
                                        <li>Deep Learning</li>
                                        <li>Gradient Descent</li>
                                        <li>Supervised Learning</li>
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
export default Ml;