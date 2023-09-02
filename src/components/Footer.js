import React from 'react'
import "../css/footer.css"
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              impedit, odit minima repellat, doloribus alias amet consequatur
              inventore.
            </p>
          </div>
          <div className="col-lg-9 ml-auto">
            <div className="row">
              {/* <div className="col-lg-3">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Testimonials</a>
                  </li>
                  <li>
                    <a href="/">Terms of Service</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div> */}

              <h2 className="footer-heading mb-4 text-center ">Quick Links</h2>
              <p className="border-bottom"></p>
              <a className="col-lg-2 text-white" href='/'>Home</a>
              <a className="col-lg-2 text-white" href='/'>About</a>
              <a className="col-lg-2 text-white" href='/'>Services</a>
              <a className="col-lg-2 text-white" href='/'>Projects</a>
              <a className="col-lg-2 text-white" href='/'>Blog</a>
              <a className="col-lg-2 text-white" href='/'>Contact</a>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with ❤️ by{" "}
                <a href="/" target="_blank">
                  Brogrammers
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
