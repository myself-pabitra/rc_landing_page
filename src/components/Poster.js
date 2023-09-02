import React from 'react'
import '../css/poster.css'

const Poster = () => {
  return (
    <>

      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1 overlay"
          style={{ backgroundImage: "url('images/hero_1.jpg')" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 p-5">
                <h1 className="line-bottom">Perfection is always in our mind.</h1>
              </div>
              <div className="col-lg-5 ms-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Poster
