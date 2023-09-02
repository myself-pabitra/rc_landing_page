import React from "react";
import "../css/servicecards.css";

const ServiceCards = (props) => {
    const{title, description,iconName} = props
  return (
    <>
      <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
        <div className="service-2 h-100">
          <div className="svg">
            <img src={`images/svg/${iconName}`} alt="" className="" />
          </div>
          <h3>
            <span>{title}</span>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
