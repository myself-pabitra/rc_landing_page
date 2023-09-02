import React from 'react'
import "../css/contact.css"
const contact = () => {
  return (
    <>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1 overlay innerpage"
          style={{ backgroundImage: "url('/images/hero_2.jpg')" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>Contact Us</h1>
                <p className="contact_abt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-7 text-center mb-5 ">
              <h2>Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                assumenda, dolorum necessitatibus eius earum voluptates sed!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form action="#" method="post">
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Write your message."
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mr-auto">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5 send_btn"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-black mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Address:</span>
                    <span>34 Street Name, City Name Here, United States</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Phone:</span>
                    <span>+1 242 4942 290</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Email:</span>
                    <span>info@yourdomain.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact
