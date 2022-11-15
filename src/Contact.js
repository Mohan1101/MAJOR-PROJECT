import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

function Contact(){
  return (
    <>
      <section>
        <div class="container mb-5">

          <section class="mb-4">


            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate
              to contact us directly. Our team will come back to you within
              a matter of hours to help you.</p>

            <div class="row">


              <div class="col-md-6 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                  <div class="row">


                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" />
                        <label for="name" class="">Your name</label>
                      </div>
                    </div>



                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" />
                        <label for="email" class="">Your email</label>
                      </div>
                    </div>


                  </div>



                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" />
                        <label for="subject" class="">Subject</label>
                      </div>
                    </div>
                  </div>



                  <div class="row">


                    <div class="col-md-12">

                      <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2"
                          class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                      </div>

                    </div>
                  </div>


                </form>

                <div class="text-center text-md-left">
                  <a class="btn btn-primary"
                    onclick="document.getElementById('contact-form').submit();">Send</a>
                </div>
                <div class="status"></div>
              </div>



              <div class="col-md-6 text-center">
                <iframe class=" h-100 w-100 rounded-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.86246675022!2d80.06423051490646!3d13.044425090808126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a45923ca30d%3A0x9fc734aaee99fb0e!2sNH%2048%2C%20Thirumazhisai%2C%20Tamil%20Nadu%20600124!5e0!3m2!1sen!2sin!4v1665412117284!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>


            </div>

          </section>

        </div>
      </section>
    </>
  )
};

export default Contact;
