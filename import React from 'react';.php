import React from 'react';
import './App.css'; // Make sure to include your CSS files
import './responsive.css'; // Include responsive CSS if needed

const Portfolio = () => {
  return (
    <div id="main" className="pstn-abs">
      <div id="header" className="header pstn-abs dsply-flx mrgn-auto">
        <div className="logo_cont">
          <a href="https://petsopaahita.github.io/portfolio/">
            <img src="images/gg-portfolio-icon.png" alt="Logo" />
          </a>
        </div>
        <div className="social_icons dsply-flx">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-github"></i>
        </div>
        <div id="menu_1" className="menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="display_area">
        <div id="content" className="content">
          <div className="menubar">
            <div className="logo_cont">
              <a href="https://petsopaahita.github.io/portfolio/">
                <img src="images/gg-portfolio-icon.png" alt="Logo" />
              </a>
            </div>
            <ul className="menubar-list">
              <li className="menubar-home">Home</li>
              <li className="menubar-list1">Lorem Ipsum 1</li>
              <li className="menubar-list2">Lorem Ipsum 2</li>
              <li className="menubar-list3">Lorem Ipsum 3</li>
            </ul>
            <div id="menu_2" className="menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div id="hero" className="hero dsply-flx mrgn-auto">
            <div className="hero1">
              <div className="title dsply-flx mrgn-auto">
                <h1>Welcome</h1>
                <h3>lorem Ipsum</h3>
              </div>
            </div>
            <div className="hero2 pstn-abs">
              <ul className="hero_list dsply-flx">
                <li className="hero_list1">Lorem Ipsum 1</li>
                <li className="hero_list2">Lorem Ipsum 2</li>
                <li className="hero_list3">Lorem Ipsum 3</li>
              </ul>
              <div className="social_icons">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-github"></i>
              </div>
            </div>
          </div>
          <div id="projects" className="projects">
            <div className="space-80"></div>
            <div className="project_title text_center">
              <h2>Lorem Ipsum</h2>
            </div>
            <div className="space-80"></div>
            <div className="project_list display_grid">
              <div className="gallery_items">
                <img src="images/website1.png" alt="Gallery Item 1" />
                <h4>Gallery Item 1</h4>
              </div>
              {/* Repeat the gallery items as needed */}
            </div>
            <div className="space-80"></div>
          </div>
          <div id="profile" className="profile height-75vh scrll_snp_type-mndtry ovrflw-auto">
            <div className="profile_cont dsply-flx height-75vh scrll_snp_algn-start">
              <div className="colm_main dsply-flx flex_col-991">
                <div className="colm colm-1">
                  <img src="images/img_person.png" alt="Profile" />
                </div>
                <div className="colm colm-2">
                  <div>
                    <h2 className="text_center-991">Lorem Ipsum</h2>
                    <h3 className="text_center-991">Lorem Ipsum</h3>
                    <p className="text_center-991">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo earum delectus dicta sit sequi!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-80"></div>
            <div className="profile_cont-2 height-75vh scrll_snp_algn-start">
              <div className="space-80"></div>
              <h3 className="text_center">Lorem Ipsum</h3>
              <div className="space-80"></div>
              <div className="display_grid"></div>
            </div>
            <div className="space-80"></div>
          </div>
          <div id="contact" className="contact">
            <div className="contact_cont dsply-flx mrgn-auto">
              <div className="contact_title">
                <h2>Lorem Ipsum</h2>
              </div>
              <div className="colm_main dsply-flx">
                <div className="colm colm-1">
                  <ul>
                    <li>
                      <i className="fa-solid fa-mobile"></i>
                      <p>12345678910</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <p>mail@mail.com</p>
                    </li>
                    <li>
                      <i className="fa-brands fa-facebook-f"></i>
                      <p>facebookuser@facebook.com</p>
                    </li>
                  </ul>
                </div>
                <div className="colm colm-2">
                  <ul>
                    <li>
                      <i className="fa-brands fa-instagram"></i>
                      <p>instagramuser@instagram.com</p>
                    </li>
                    <li>
                      <i className="fa-brands fa-linkedin-in"></i>
                      <p>linkedinuser@linkedin.com</p>
                    </li>
                    <li>
                      <i className="fa-brands fa-github"></i>
                      <p>githubuser@github.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="xpnd_menu1" className="xpnd_menu pstn-abs cntr_cntnt-flx">
        <div className="xpnd_menu_cont dsply-flx text_center">
          <ul>
            <li className="xpnd_menu-home">Home</li>
            <li id="xpnd1-itm1" className="xpnd_menu1">Lorem Ipsum 1</li>
            <li id="xpnd1-itm2" className="xpnd_menu2">Lorem Ipsum 2</li>
            <li id="xpnd1-itm3" className="xpnd_menu3">Lorem Ipsum 3</li>
          </ul>
        </div>
      </div>
      <div id="xpnd_menu2" className="xpnd_menu pstn-abs cntr_cntnt-flx">
        <div className="xpnd_menu_cont dsply-flx text_center">
          <ul>
            <li className="xpnd_menu-home">Home</li>
            <li id="xpnd2-itm1" className="xpnd_menu1">Lorem Ipsum 1</li>
            <li id="xpnd2-itm2" className="xpnd_menu2">Lorem Ipsum 2</li>
            <li id="xpnd2-itm3" className="xpnd_menu3">Lorem Ipsum 3</li>
          </ul>
        </div>
      </div>
      <div id="particles-js"></div>
      <div id="particles-js-2"></div>
    </div>
  );
};

export default Portfolio;