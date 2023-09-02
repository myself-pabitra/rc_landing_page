import React from 'react'
import ServiceCards from './ServiceCards'
import '../css/service.css'
import Testimonials from './Testimonials';
const Services = () => {
  return (
    <>
      <div class="ftco-blocks-cover-1">
        <div
          class="ftco-cover-1 overlay innerpage"
          style={{backgroundImage: "url('images/hero_2.jpg')"}}
        >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-6 text-center">
                <h1>Our Services</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section" style={{ backgroundColor: "#dedffe" }}>
        <div className="container cont">
          <div className="row align-items-stretch">
            <ServiceCards
              title="Renovation"
              description="Consectetur adipisicing elit. Numquam repellendus aut labore"
              iconName="001-renovation.svg"
            />
            <ServiceCards
              title="Finishing"
              description="Consectetur adipisicing elit. Numquam repellendus aut labore"
              iconName="002-shovel.svg"
            />
            <ServiceCards
              title="Building Construction"
              description="Consectetur adipisicing elit. Numquam repellendus aut labore"
              iconName="003-bulldozer.svg"
            />
            <ServiceCards
              title="House Build"
              description="Consectetur adipisicing elit. Numquam repellendus aut labore"
              iconName="004-house-plan.svg"
            />
            <ServiceCards
              title="Fence Construction"
              description="Consectetur adipisicing elit. Numquam repellendus aut labore"
              iconName="005-fence.svg"
            />
            <ServiceCards
              title="Bridge Construct"
              description="Consectetur adipisicing elit. Numquam repellendus aut labore"
              iconName="006-wheelbarrow.svg"
            />
          </div>
        </div>
      </div>
      <Testimonials/>
    </>
  );
}

export default Services