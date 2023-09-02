import React from "react";
import "../css/quotation.css";
const Quotation = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5  me-auto">
            <h2 className="line-bottom">
              If You Have Project In Mind. Get A Quotation
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              maiores mollitia qui quam labore hic asperiores provident maxime
              earum eum.
            </p>
          </div>
          <div className="col-md-6">
            <div className="quick-contact-form bg-white ">
              <h2>Get Quotation</h2>
              <form action="#" method="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary px-5 send_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
