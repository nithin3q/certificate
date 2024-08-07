import React from 'react';

export const NavBar = () => {
  return (
    <div style={{ marginBottom: '100px' }}>
      <header className="header sticky-bar">
        <div className="container-fluid">
          <div className="main-header">
            <div className="header-logo parallax-item">
              <a className="d-flex cursor-scale small" href="/">
                <img alt="aquar labs" src="https://aquarlabs.com/assets/imgs/template/logo.svg" />
              </a>
            </div>
            <div className="header-menu">
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <a className="active" href="/">Home</a>
                    </li>
                    <li>
                      <a href="about-us">About Us</a>
                    </li>
                    <li>
                      <a href="services">Services</a>
                    </li>
                    <li>
                      <a href="careers">Careers</a>
                    </li>
                    <li>
                      <a href="contact-us">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-account d-flex">
              {/* <a className="dark-light-mode dark-mode" href="#"></a> */}
              <a className="menu-mobile" href="#">
                <span className="item-menu">
                  <img
                    className="hover-rotate"
                    alt="aquar labs"
                    src="https://aquarlabs.com/assets/imgs/template/icons/menu1.svg"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <span className="comet-horizontal"></span>
      </header>
    </div>
  );
};
