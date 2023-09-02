import React from "react";
import "../css/projectitem.css";
const ProjectItem = (props) => {
  const { title, category, iconName } = props;

  return (
    // <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
    //   <div className="project-item">
    //     <img src={`/images/${iconName}`} alt="" className="img-fluid" />

    //     <div className="project-item-overlay">
    //       <a className="category" href="/">
    //         {category}
    //       </a>
    //       <span className="plus">
    //         <span className="icon-plus"></span>
    //       </span>

    //       <a href="/" className="project-title">
    //         <span>{title}</span>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
        <div className="project-item">
          <img src={`/images/${iconName}`} alt="" className="img-fluid" />
          <div className="project-item-overlay">
            <a className="category" href="/">
              {category}
            </a>

            <a href="/" className="project-title">
              <span>{title}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
