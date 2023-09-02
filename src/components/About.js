import React from "react";
import Testimonials from "./Testimonials";
const About = () => {
  return (
    <>
      <div class="ftco-blocks-cover-1">
        <div
          class="ftco-cover-1 overlay innerpage"
          style={{ backgroundImage: "url('images/hero_2.jpg')" }}
        >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-6 text-center">
                <h1>About Us</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0 order-lg-2">
              <img src="images/hero_2.jpg" alt="" class="img-fluid" />
            </div>
            <div class="col-lg-4 me-auto">
              <h2>What we Do...</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                suscipit, repudiandae similique accusantium eius nulla quam
                laudantium sequi.
              </p>
              <p>
                Debitis voluptates corporis saepe molestias tenetur ab quae, quo
                earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials/>
    </>
  );
};

export default About;
