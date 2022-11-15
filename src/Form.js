import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";
import "./index.css";


function Form() {
  return (
    
      <div class="container login-form">
        <div class="row my-4 justify-content-center">

          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <div class="offest-md-4">
                  <h1 class="text-center mt-4 mb-4 fw-bolder">Login</h1>
                  <form class="form-login">

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example1">Email address</label>
                      <input type="email" id="form2Example1" class="form-control" placeholder="E-mail" />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label " for="form2Example2">Password</label>

                      <a href="#!" class="float-end navy">Forgot password?</a>
                      <input type="password" id="form2Example2" class="form-control" placeholder="Password" />
                    </div>

                    <div class="col d-flex">

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31"
                          checked />
                        <label class="form-check-label " for="form2Example31"> Remember me </label>
                      </div>
                    </div>


                <div class="col-md-12">
                  <button type="button" class="col-12 btn btn-primary btn-block mb-4">Sign
                    in</button>
                </div>
                <p class="text-center"> Don't have account yet?<Link to="/register"><a  class="navy"> Sign up</a></Link></p>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}


export default Form;