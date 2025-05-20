import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import SimpleBar from "simplebar-react";

import { Container } from "reactstrap";

import logoSm from "../assets/images/logo.png";
import logoDark from "../assets/images/logo.png";
import logoLight from "../assets/images/logo.png";

import HorizontalLayout from "./HorizontalLayout";
import TwoColumnLayout from "./TwoColumnLayout";
import VerticalLayout from "./VerticalLayouts";

const Sidebar = ({ layoutType }) => {

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    } else {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    }
  };

  return (
    <React.Fragment>
      <style>{`
   .mt-2 {
    margin-top: -1.5rem !important;
}
  `}</style>
      <div className="app-menu navbar-menu">
      <div className="navbar-brand-box text-center">
  <Link to="/" className="logo logo-dark">
    <span className="logo-sm">
      <img src={logoSm} alt="Logo" height="22" />
    </span>
    <span className="logo-lg d-flex flex-column align-items-center">
      <img src={logoDark} alt="Logo" height="100" />
      <span className="mt-2 fw-bold" style={{ fontSize: '18px', color: '#000' }}>
        ई मान्यता प्रणाली
      </span>
    </span>
  </Link>

  <Link to="/" className="logo logo-light">
    <span className="logo-sm">
      <img src={logoSm} alt="Logo" height="22" />
    </span>
    <span className="logo-lg d-flex flex-column align-items-center">
      <img src={logoLight} alt="Logo" height="60" />
      <span className="mt-2 fw-bold" style={{ fontSize: '18px', color: '#000' }}>
        ई मान्यता प्रणाली
      </span>
    </span>
  </Link>

  <button
    onClick={addEventListenerOnSmHoverMenu}
    type="button"
    className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
    id="vertical-hover"
  >
    <i className="ri-record-circle-line"></i>
  </button>
</div>

        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>
        ) : layoutType === 'twocolumn' ? (
          <React.Fragment>
            <TwoColumnLayout layoutType={layoutType} />
            <div className="sidebar-background"></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        )}
      </div>
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;