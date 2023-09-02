// import React from 'react'
// import '../css/testimonials.css';
// const Testimonials = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8 col-center m-auto">
//           <h2>Testimonials</h2>
//           <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
//             {/* <!-- Carousel --> */}
//             <div className="carousel-inner">
//               <div className="item carousel-item active">
//                 <div className="img-box">
//                   <img src="https://i.ibb.co/d5DY64w/img1.jpg" alt="" />
//                 </div>
//                 <p className="testimonial">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
//                   eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
//                   dapibus nec turpis vel, semper malesuada ante. Idac bibendum
//                   scelerisque non non purus. Suspendisse varius nibh non
//                   aliquet.
//                 </p>
//                 <p className="overview">
//                   <b>Jennifer Smith</b>, Office Worker
//                 </p>
//               </div>
//               <div className="item carousel-item">
//                 <div className="img-box">
//                   <img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" />
//                 </div>
//                 <p className="testimonial">
//                   Vestibulum quis quam ut magna consequat faucibus. Pellentesque
//                   eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
//                   Pellentesque viverra sagittis quam at mattis. Suspendisse
//                   potenti. Aliquam sit amet gravida nibh, facilisis gravida
//                   odio.
//                 </p>
//                 <p className="overview">
//                   <b>Dauglas McNun</b>, Financial Advisor
//                 </p>
//               </div>
//               <div className="item carousel-item">
//                 <div className="img-box">
//                   <img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt="" />
//                 </div>
//                 <p className="testimonial">
//                   Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
//                   id lacinia. Etiam faucibus mauris id tempor egestas. Duis
//                   luctus turpis at accumsan tincidunt. Phasellus risus risus,
//                   volutpat vel tellus ac, tincidunt fringilla massa. Etiam
//                   hendrerit dolor eget rutrum.
//                 </p>
//                 <p className="overview">
//                   <b>Hellen Wright</b>, Athelete
//                 </p>
//               </div>
//             </div>
//             {/* <!-- Carousel Controls --> */}
//             <a
//               className="carousel-control left carousel-control-prev"
//               data-bs-target="#myCarousel"
//               href="/"
//               data-bs-slide-to="prev"
//             >
//               <i className="fa fa-angle-left"></i>
//             </a>
//             <a
//               className="carousel-control right carousel-control-next"
//               data-bs-target="#myCarousel"
//               href="/"
//                data-bs-slide-to="next"
//             >
//               <i className="fa fa-angle-right"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials





import React from 'react'
import '../css/testimonials.css';
const Testimonials = () => {
  return (
    <div className="site-section bg-light">
      <div className="container cont">
        <div className="row mb-5">
          <div className="col-md-4 mx-auto">
            <h2 className="line-bottom text-center">Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-center m-auto testamonials_box">
            {/* <h2>Testimonials</h2> */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
              {/* <!-- Carousel --> */}
              <div className="carousel-inner">
                <div className="item carousel-item active">
                  <div className="img-box">
                    <img src="https://i.ibb.co/d5DY64w/img1.jpg" alt="" />
                  </div>
                  <p className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, varius quam at, luctus dui. Mauris magna
                    metus, dapibus nec turpis vel, semper malesuada ante. Idac
                    bibendum scelerisque non non purus. Suspendisse varius nibh
                    non aliquet.
                  </p>
                  <p className="overview">
                    <b>Jennifer Smith</b>, Office Worker
                  </p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box">
                    <img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" />
              </div>
                  <p className="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus.
                    Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus
                    dictum risus. Pellentesque viverra sagittis quam at mattis.
                    Suspendisse potenti. Aliquam sit amet gravida nibh,
                    facilisis gravida odio.
                  </p>
                  <p className="overview">
                    <b>Dauglas McNun</b>, Financial Advisor
                  </p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box">
                    <img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt="" />
                  </div>
                  <p className="testimonial">
                    Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                    id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                    luctus turpis at accumsan tincidunt. Phasellus risus risus,
                    volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                    hendrerit dolor eget rutrum.
                  </p>
                  <p className="overview">
                    <b>Hellen Wright</b>, Athelete
                  </p>
                </div>
              </div>
              {/* <!-- Carousel Controls --> */}
              <a
                className="carousel-control left carousel-control-prev"
                data-bs-target="#myCarousel"
                href="/"
                data-bs-slide-to="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control right carousel-control-next"
                data-bs-target="#myCarousel"
                href="/"
                data-bs-slide-to="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials

// import React from 'react'
// import '../css/testimonials.css';
// const Testimonials = () => {
//   return (
//     <div className="site-section bg-light">
//       <div className="container cont">
//         <div className="row mb-5">
//           <div className="col-md-4 mx-auto">
//             <h2 className="line-bottom text-center">Testimonials</h2>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="testimonial-3">
//               <blockquote>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
//                 id accusantium similique temporibus nihil blanditiis adipisci
//                 aperiam, sapiente suscipit vero.
//               </blockquote>
//               <div className="vcard d-flex align-items-center">
//                 <div className="img-wrap me-3">
//                   <img src="images/person_1.jpg" alt="" className="img-fluid" />
//                 </div>
//                 <div>
//                   <span className="d-block">John Smith</span>
//                   <span className="position">Client From Facebook</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="testimonial-3">
//               <blockquote>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
//                 id accusantium similique temporibus nihil blanditiis adipisci
//                 aperiam, sapiente suscipit vero.
//               </blockquote>
//               <div className="vcard d-flex align-items-center">
//                 <div className="img-wrap me-3">
//                   <img src="images/person_2.jpg" alt="" className="img-fluid" />
//                 </div>
//                 <div>
//                   <span className="d-block">John Smith</span>
//                   <span className="position">Client From Facebook</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials
