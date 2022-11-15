import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import {Link} from "react-router-dom";
import "./index.css";
function Register() {
  return (
  
    <div class="container login-form">
    <div class="row my-4 justify-content-center">

        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <div class="offest-md-4">
                        <h1 class="text-center mt-4 mb-4 fw-bolder">Register</h1>
                        <form class="form-login">
                           
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example1">Email address</label>
                                <input type="email" id="form2Example1" class="form-control" placeholder="Email" />
                            </div>
                            
                            <div class="form-outline mb-4">
                                <label class="form-label " for="form2Example2">Password</label>
                                <input type="password" id="form2Example2" class="form-control"
                                    placeholder="Password" />
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label " for="form2Example2">Confirm Password</label>
                                <input type="password" id="form2Example2" class="form-control"
                                    placeholder="Confirm Password" />
                            </div>
                          
                            <div class="row mb-4">
                                <div class="col d-flex">
                                  
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="form2Example31"
                                            checked />
                                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="">
                                <button type="button" class="col-12 btn btn-primary btn-block mb-4">Create new
                                    Account</button>
                            </div>
                            <p class="text-center"> Already have account?<Link to="/Form"><a class="navy">
                                    Sign in</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  );
}

export default Register;