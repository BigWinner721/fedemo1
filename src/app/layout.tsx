import type { Metadata } from "next";
import "./globals.css";
import ScriptLoader from "./ScriptLoader";

export const metadata: Metadata = {
  title: "Digtek - Digital Marketing Agency",
  description: "Digtek - Digital Marketing Agency Html Template",
  icons: {
    icon: '/static/picture/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.svg" />
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/animate.css" />
        <link rel="stylesheet" href="/static/css/icomoon.css" />
        <link rel="stylesheet" href="/static/css/magnific-popup.css" />
        <link rel="stylesheet" href="/static/css/meanmenu.css" />
        <link rel="stylesheet" href="/static/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/static/css/nice-select.css" />
        <link rel="stylesheet" href="/static/css/main.css" />
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <ScriptLoader />
      </body>
    </html>
  );
}

function Header() {
  return (
    <>
      {/* Header Section */}
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="logo">
                <a href="/" className="header-logo">
                  <img src="/static/picture/white-logo.svg" alt="logo-img" />
                </a>
                <a href="/" className="header-logo-2">
                  <img src="/static/picture/black-logo.svg" alt="logo-img" />
                </a>
              </div>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown active menu-thumb">
                        <a href="/">
                          Home 
                          <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu has-homemenu">
                          <li>
                            <div className="homemenu-items">
                              <div className="homemenu">
                                <div className="homemenu-thumb">
                                  <img src="/static/picture/home-1.jpg" alt="img" />
                                  <div className="demo-button">
                                    <a href="/" className="theme-btn">
                                      Multi Page
                                    </a>
                                    <a href="/index-one-page" className="theme-btn">
                                      One Page
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    Home 01
                                  </h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img src="/static/picture/home-2.jpg" alt="img" />
                                  <div className="demo-button">
                                    <a href="/index-2" className="theme-btn">
                                      Multi Page
                                    </a>
                                    <a href="/index-two-page" className="theme-btn">
                                      One Page
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    Home 02
                                  </h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img src="/static/picture/home-3.jpg" alt="img" />
                                  <div className="demo-button">
                                    <a href="/index-3" className="theme-btn">
                                      Multi Page
                                    </a>
                                    <a href="/index-three-page" className="theme-btn">
                                      One Page
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    Home 03
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown active d-xl-none">
                        <a href="/team" className="border-none">
                          Home
                        </a>
                        <ul className="submenu">
                          <li><a href="/">Home 01</a></li>
                          <li><a href="/index-2">Home 02</a></li>
                          <li><a href="/index-3">Home 03</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="/news">
                          Pages
                          <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="/about">About Us</a></li>
                          <li><a href="/team">Team</a></li>
                          <li><a href="/team-details">Team Details</a></li>
                          <li><a href="/pricing">Our Pricing</a></li>
                          <li><a href="/faq">Our Faq</a></li>
                          <li><a href="/404">404 Page</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/service-details">
                          Services
                          <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="/service">Service Page</a></li>
                          <li><a href="/service-details">Service Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/project-details">
                          Projects
                          <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="/project">Projects</a></li>
                          <li><a href="/project-details">Project Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/news-details">
                          Blog
                          <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="/news-grid">Blog Grid</a></li>
                          <li><a href="/news">Blog Standard</a></li>
                          <li><a href="/news-details">Blog Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="#0" className="search-trigger search-icon"><i className="fa-regular fa-magnifying-glass"></i></a>
                <div className="main-button">
                  <a href="/contact"> <span className="theme-btn"> Get Started </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></a>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Area */}
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer-section style-1 section-bg">
      <div className="container">
        <div className="footer-top">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/">
                    <img src="/static/picture/white-logo.svg" alt="img" />
                  </a>
                </div>
                <p>
                  There are many variations of pas of available but the majority have suffered tion in some  injected.
                </p>
                <div className="main-button">
                  <a href="/contact"> <span className="theme-btn"> Get Started </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget">
                <div className="footer-title">
                  <h4>Quick Links</h4>
                </div>
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="/about">About Company</a>
                    </li>
                    <li>
                      <a href="/team">Leadership Team</a>
                    </li>
                    <li>
                      <a href="/news">News & articles</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/service">Popular Services</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget">
                <div className="footer-title">
                  <h4>Services</h4>
                </div>
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="/service-details">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="/service-details">SEO Services</a>
                    </li>
                    <li>
                      <a href="/service-details">Website Design</a>
                    </li>
                    <li>
                      <a href="/service-details">Social Media</a>
                    </li>
                    <li>
                      <a href="/service-details">Content Writing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget">
                <div className="footer-title">
                  <h4>Contact</h4>
                </div>
                <div className="footer-links">
                  <div className="footer-contact">
                    <div className="footer-contact-items">
                      <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="content">
                        <p>
                          Gregory Cartwright, 4059 Carling Avenue, Ugglebarnby
                        </p>
                      </div>
                    </div>
                    <div className="footer-contact-items">
                      <div className="icon">
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                      <div className="content">
                        <a href="mailto:info@example.com">info@example.com</a>
                      </div>
                    </div>
                    <div className="footer-contact-items">
                      <div className="icon">
                        <i className="fa-regular fa-phone"></i>
                      </div>
                      <div className="content">
                        <a href="tel:+61086660112">+6108-666-0112</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy-right">
          <div className="row g-4">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="footer-copy-text">
                <p>© 2024 Digtek. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="footer-social-links">
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
