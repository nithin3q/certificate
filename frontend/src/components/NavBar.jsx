import React from 'react'

export const NavBar = () => {
  return (
    <div style={{marginBottom:'100px'}}>
         <header class="header sticky-bar">
        <div class="container-fluid">
          <div class="main-header">
            <div class="header-logo parallax-item">
              <a class="d-flex cursor-scale small" href="/"
                ><img alt="aquar labs" src="https://aquarlabs.com/assets/imgs/template/logo.svg"
              /></a>
            </div>
            <div class="header-menu">
              <div class="header-nav">
                <nav class="nav-main-menu d-none d-xl-block">
                  
                  <ul class="main-menu">
                    <li >
                      <a class="active" href="/">Home</a>
                    
                    </li>
                    <li >
                      <a href="about-us">About Us</a>
                  
                    </li>
                    <li >
                      <a href="services">Services</a>
                    </li>
                    <li >
                      <a href="careers">Careers</a>

                    </li>
                  
                    <li><a href="contact-us">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
    </div>

            <div class="header-account d-flex">
              {/* <a class="dark-light-mode dark-mode" href="#"></a> */}
              <a class="menu-mobile" href="#"
                ><span class="item-menu"
                  >
                  <img
                    class="hover-rotate"
                    alt="aquar labs"
                    src="https://aquarlabs.com/assets/imgs/template/icons/menu1.svg" /></span></a>
            </div>
          </div>
        </div>
        <span class="comet-horizontal"></span>
      </header>
    </div>
  )
}
