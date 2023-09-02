import React, { useState } from "react";
import "../css/header.css";
import styled from "styled-components";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Menu = () => {
  const [BurgerStatus, setBurgerStatus] = useState(false);

  return (
    <>
      <header className="header_container py-3">
        <div className="container">
          <div className="row ">
            {/* Logo section */}
            <div className="col-lg-4 col-md-8 col-6 logo_alignment" href="/">
              <div className="logo">
                <img src="/images/logo.png" alt="" />
              </div>

              <h3 className="site_name d-none d-sm-block">
                <a className="text-white" href="/">
                  <strong>Raul</strong>{" "}
                  <span className="text-warning">Construction</span>
                </a>
              </h3>
            </div>

            {/* NavItem Section */}
            <div className="col-lg-8 col-md-4 col-6 p-3 d-flex justify-content-end">
              <span className="burger_menu">
                <CustomMenu
                  onClick={() => setBurgerStatus(true)}
                  className="d-inline-block d-lg-none py-1"
                />
              </span>

              <nav className=" text-end ms-auto site_navigation d-none d-lg-block">
                <ul className=" ms-auto site_menu justify-content-end align-items-center">
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="nav-link">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <a href="/" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <BurgerNav show={BurgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
          </BurgerNav>
        </div>
      </header>
    </>
  );
};

export default Menu;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: whitesmoke;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

// import React from "react";
// import "../css/header.css";
// const Menu = () => {
//   return (
//     <>
//       <header className="header_container py-3">
//         <div className="container">
//           <div className="row ">
//             {/* Logo section */}
//             <div
//               className="col-sm-12 col-lg-4 d-flex justify-content-center align-items-center"
//               href="/"
//             >
//               <div className="logo">
//                 <img src="/images/logo.png" alt="" />
//               </div>

//               <h3 className="site_name">
//                 <a className="text-white" href="/">
//                   <strong>Raul</strong>{" "}
//                   <span className="text-warning">Construction</span>
//                 </a>
//               </h3>
//             </div>

//             {/* NavItem Section */}
//             <div className="col-lg-8">
//               <nav className=" text-end ms-auto site_navigation ">

//                   <ul className=" ms-auto site_menu justify-content-end align-items-center">
//                     <li>
//                       <a href="/" className="nav-link">
//                         Home
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/" className="nav-link">
//                         About
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/" className="nav-link">
//                         Services
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/" className="nav-link">
//                         Projects
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/" className="nav-link">
//                         Blog
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/" className="nav-link">
//                         Contact
//                       </a>
//                     </li>
//                   </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Menu;
