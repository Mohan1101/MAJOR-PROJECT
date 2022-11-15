import React from "react";
import intro2 from "./assets/intro2.png"
import intro3 from "./assets/intro3.png"
import slide2 from "./assets/slide2.png"
import {Link} from "react-router-dom"
import "./pricing.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

function Pricing () {
  return(
    <>
  
  <div class="pricing-area">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-6">
					<div class="single-price">
						<div class="price-header">
							<h3 class="title">Web Development</h3>
						</div>
						<div class="price-value">
							<div class="value">
								<span class="currency">₹</span> <span class="amount">200.<span>99</span></span> <span class="month">/month</span>
							</div>
						</div>
						<ul class="deals">
							<li>Upgrade you skills.</li>
							<li>Huge Packages.</li>
							<li>Grab this opportunity.</li>
							<li>Make your time productive.</li>
						
						</ul><a href="#">Get Started</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-price">
						<div class="price-header">
							<h3 class="title">Machine Learning</h3>
						</div>
						<div class="price-value">
							<div class="value">
								<span class="currency">₹</span> <span class="amount">300.<span>99</span></span> <span class="month">/month</span>
							</div>
						</div>
						<ul class="deals">
							<li>Upgrade you skills.</li>
							<li>Huge Packages.</li>
							<li>Grab this opportunity.</li>
							<li>Make your time productive.</li>
						</ul><a href="#">Get Started</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-price">
						<div class="price-header">
							<h3 class="title">Artificial intelligence</h3>
						</div>
						<div class="price-value">
							<div class="value">
								<span class="currency">₹</span> <span class="amount">250.<span>99</span></span> <span class="month">/month</span>
							</div>
						</div>
						<ul class="deals">
							<li>Upgrade you skills.</li>
							<li>Huge Packages.</li>
							<li>Grab this opportunity.</li>
							<li>Make your time productive.</li>
						</ul><a href="#">Get Started</a>
					</div>
				</div>
			</div>
		</div>
	</div>

  <div class="pricing-area">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-6">
					<div class="single-price">
						<div class="price-header">
							<h3 class="title">Cyber Security</h3>
						</div>
						<div class="price-value">
							<div class="value">
								<span class="currency">₹</span> <span class="amount">250.<span>99</span></span> <span class="month">/month</span>
							</div>
						</div>
						<ul class="deals">
							<li>Upgrade you skills.</li>
							<li>Huge Packages.</li>
							<li>Grab this opportunity.</li>
							<li>Make your time productive.</li>
						</ul><a href="#" >Get Started</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-price">
						<div class="price-header">
							<h3 class="title">Cloud Computing</h3>
						</div>
						<div class="price-value">
							<div class="value">
								<span class="currency">₹</span> <span class="amount">400.<span>99</span></span> <span class="month">/month</span>
							</div>
						</div>
						<ul class="deals">
							<li>Upgrade you skills.</li>
							<li>Huge Packages.</li>
							<li>Grab this opportunity.</li>
							<li>Make your time productive.</li>
						</ul><a href="#">Get Started</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-price">
						<div class="price-header">
							<h3 class="title">Software Development</h3>
						</div>
						<div class="price-value">
							<div class="value">
								<span class="currency">₹</span> <span class="amount">500.<span>99</span></span> <span class="month">/month</span>
							</div>
						</div>
						<ul class="deals">
							<li>Upgrade you skills.</li>
							<li>Huge Packages.</li>
							<li>Grab this opportunity.</li>
							<li>Make your time productive.</li>
						</ul><a href="#">Get Started</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>

  )
};

export default Pricing;










