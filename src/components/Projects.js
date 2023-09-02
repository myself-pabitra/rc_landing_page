import React from "react";
import "../css/projects.css";
import ProjectItem from "./ProjectItem";
const Projects = () => {
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
                <h1>Our Projects</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4 mx-auto">
              <h2 className="line-bottom text-center">Our Projects</h2>
            </div>
          </div>

          <div className="row">
            <ProjectItem
              title="Renovate the house 1"
              category="Renovate"
              iconName="img_1.jpg"
            />
            <ProjectItem
              title="Renovate the house 2"
              category="Renovate"
              iconName="img_2.jpg"
            />
            <ProjectItem
              title="Renovate the house 3"
              category="Renovate"
              iconName="img_3.jpg"
            />
            <ProjectItem
              title="Renovate the house 4"
              category="Renovate"
              iconName="img_4.jpg"
            />
            <ProjectItem
              title="Renovate the house 5"
              category="Renovate"
              iconName="img_3.jpg"
            />
            <ProjectItem
              title="Renovate the house 6"
              category="Renovate"
              iconName="img_1.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
