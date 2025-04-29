import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Back To Top */}
      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up"></i>
      </button>

      {/* Mouse Cursor */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      {/* Offcanvas Area */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src="/static/picture/black-logo.svg" alt="logo-img" width={200} height={60} />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com"><span>info@example.com</span></a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4"></div>
                <div className="main-button">
                  <Link href="/contact"><span className="theme-btn">Get Started</span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* Hero Section */}
      <section className="hero-section fix hero-1 bg-cover" style={{backgroundImage: "url('/static/image/hero-bg.jpg')"}}>
        <div className="mike-shape">
          <Image src="/static/picture/mike-shape.png" alt="img" width={100} height={100} />
        </div>
        <div className="arrow-shape">
          <Image src="/static/picture/arrow-shape.png" alt="img" width={100} height={100} />
        </div>
        <div className="arrow-shape-2">
          <Image src="/static/picture/arrow-shape.png" alt="img" width={100} height={100} />
        </div>
        <div className="energy-shape float-bob-y">
          <Image src="/static/picture/energy-shape.png" alt="img" width={100} height={100} />
        </div>
        <div className="rocket-shape">
          <Image src="/static/picture/rocket.png" alt="img" className="float-bob-y" width={100} height={100} />
        </div>
        <div className="container-fluid">
          <div className="hero-title wow img-custom-anim-left">
            <Image src="/static/picture/hero-text.png" alt="img" width={400} height={100} />
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="hero-content">
                <span className="wow img-custom-anim-left">go for advertising</span>
                <h1 className="wow img-custom-anim-right">think digital</h1>
                <p className="wow fadeInUp">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="hero-image">
                <Image src="/static/picture/hero-image.png" alt="img" className="wow img-custom-anim-left" width={500} height={500} />
                <div className="bg-shape">
                  <Image src="/static/picture/bg-shape.png" alt="img" width={500} height={500} />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="video-right">
                <a href="#" className="video-btn video-popup wow fadeInUp">
                  <i className="fa-duotone fa-play"></i>
                  <Image src="/static/picture/text-circle.png" alt="img" width={100} height={100} />
                </a>
                <p className="wow fadeInUp">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.
                </p>
                <div className="client-items wow fadeInUp">
                  <div className="client-logo">
                    <Image src="/static/picture/logo.png" alt="img" width={100} height={50} />
                  </div>
                  <div className="client-img">
                    <Image src="/static/picture/client.png" alt="img" width={120} height={60} />
                    <div className="star-icon">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <span>450+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marque Section */}
      <div className="marquee-section-1">
        <div className="mycustom-marque style-2">
          <div className="scrolling-wrap">
            <div className="comm">
              <div className="cmn-textslide"><Image src="/static/picture/star.png" alt="img" width={20} height={20} />THE BEST SOULTION</div>
              <div className="cmn-textslide"><Image src="/static/picture/star.png" alt="img" width={20} height={20} />THE BEST SOULTION</div>
              <div className="cmn-textslide"><Image src="/static/picture/star.png" alt="img" width={20} height={20} />THE BEST SOULTION</div>
              <div className="cmn-textslide"><Image src="/static/picture/star.png" alt="img" width={20} height={20} />THE BEST SOULTION</div>
              <div className="cmn-textslide"><Image src="/static/picture/star.png" alt="img" width={20} height={20} />THE BEST SOULTION</div>
            </div>
            {/* 更多重复内容 */}
          </div>
        </div>
      </div>

      {/* Service Section */}
      <section className="service-section fix section-padding">
        <div className="left-shape float-bob-y">
          <Image src="/static/picture/left-shape.png" alt="img" width={100} height={100} />
        </div>
        <div className="right-shape">
          <Image src="/static/picture/right-shape.png" alt="img" width={100} height={100} />
        </div>
        <div className="bg-shape">
          <Image src="/static/picture/bg-shape1.png" alt="img" width={500} height={500} />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>WHY services uS</span>
              </div>
              <h2 className="wow fadeInUp">
                Use SEO to Drive Growth <br /> at Your Business
              </h2>
            </div>
            <p className="wow fadeInUp">
              Pellentesque ut vehicula sapien <br /> dictumst. Maecenas ante.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
              <div className="service-box-items">
                <div className="icon">
                  <Image src="/static/picture/icon-1.png" alt="img" width={80} height={80} />
                </div>
                <div className="content"> 
                  <h4><Link href="/service-details">Digital Marketing</Link></h4>
                  <p>Lorem dolor amet consectetur read adipiscing any more elit.</p>
                  <Link href="/service-details" className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
              <div className="service-box-items">
                <div className="icon">
                  <Image src="/static/picture/icon-2.png" alt="img" width={80} height={80} />
                </div>
                <div className="content"> 
                  <h4><Link href="/service-details">SEO Analytics</Link></h4>
                  <p>Lorem dolor amet consectetur read adipiscing any more elit.</p>
                  <Link href="/service-details" className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
              <div className="service-box-items">
                <div className="icon">
                  <Image src="/static/picture/icon-3.png" alt="img" width={80} height={80} />
                </div>
                <div className="content"> 
                  <h4><Link href="/service-details">Social Marketing</Link></h4>
                  <p>Lorem dolor amet consectetur read adipiscing any more elit.</p>
                  <Link href="/service-details" className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fix section-padding" style={{backgroundImage: "url('/static/image/about-bg.png')"}}>
        <div className="left-shape float-bob-y">
          <Image src="/static/picture/left-shape1.png" alt="img" width={100} height={100} />
        </div>
        <div className="container">
          <div className="brand-wrapper">
            <h4 className="brand-title">1k + Brands Trust Us</h4>
            <div className="swiper brand-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand-img center">
                    <Image src="/static/picture/01.png" alt="img" width={150} height={60} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-img center">
                    <Image src="/static/picture/02.png" alt="img" width={150} height={60} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-img center">
                    <Image src="/static/picture/03.png" alt="img" width={150} height={60} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-img center">
                    <Image src="/static/picture/04.png" alt="img" width={150} height={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <Image src="/static/picture/011.png" alt="img" className="wow img-custom-anim-left" width={500} height={500} />
                  <div className="bg-shape">
                    <Image src="/static/picture/bg-shape2.png" alt="img" width={500} height={500} />
                  </div>
                  <div className="grap-shape float-bob-x">
                    <Image src="/static/picture/grap.png" alt="img" width={120} height={120} />
                  </div>
                  <div className="box-shape float-bob-y">
                    <Image src="/static/picture/box-shape.png" alt="img" width={120} height={120} />
                  </div>
                  <div className="emoji-shape">
                    <Image src="/static/picture/emoji.png" alt="img" width={80} height={80} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <div className="sub-title bg-color-2 wow fadeInUp">
                      <span>ABOUT COMPANY</span>
                    </div>
                    <h2 className="wow fadeInUp">
                      Skills to improve Your Company Brand
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp">
                    It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div className="single-circle-bar wow fadeInUp">
                      <div className="circle-bar" data-percent="65" data-duration="2000">
                      </div>
                      <div className="content">
                        <h6>
                          Paid search <br /> marketing
                        </h6>
                      </div>
                    </div>
                    <div className="single-circle-bar wow fadeInUp">
                      <div className="circle-bar" data-percent="95" data-duration="2000">
                      </div>
                      <div className="content">
                        <h6>
                          Search engine <br /> optimization
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="main-button wow fadeInUp">
                    <Link href="/about"> <span className="theme-btn"> EXPLORE MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study-section fix section-padding">
        <div className="overlay-shape">
          <Image src="/static/picture/overlay-shape.png" alt="img" width={500} height={500} />
        </div>
        <div className="left-shape float-bob-x">
          <Image src="/static/picture/left-shape2.png" alt="img" width={100} height={100} />
        </div>
        <div className="right-shape float-bob-x">
          <Image src="/static/picture/right-shaape.png" alt="img" width={100} height={100} />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>Case Studies</span>
              </div>
              <h2 className="wow fadeInUp">
                We Are A Creative Digital <br />
                Marketing Agency
              </h2>
            </div>
            <div className="main-button wow fadeInUp">
              <Link href="/about"> <span className="theme-btn"> EXPLORE MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
            </div>
          </div>
          <div className="case-study-wrapper">
            <div className="row">
              <div className="col-xxl-6 wow fadeInUp">
                <div className="case-study-box-items">
                  <div className="thumb">
                    <Image src="/static/picture/01.jpg" alt="img" width={570} height={500} />
                    <div className="post-box-items">
                      <ul>
                        <li>
                          <Link href="/project-details">Real-time Analytics <i className="fa-regular fa-arrow-up-right"></i></Link>
                        </li>
                        <li>
                          <Link href="/project-details">Social <i className="fa-regular fa-arrow-up-right"></i></Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link href="/project-details">Agile Advance <i className="fa-regular fa-arrow-up-right"></i></Link>
                        </li>
                        <li>
                          <Link href="/project-details">Advance <i className="fa-regular fa-arrow-up-right"></i></Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="project-title">
                      <a href="/project-details">
                        <Image src="/static/picture/icon.png" alt="img" width={30} height={30} />
                        Rising Stars Obscure
                      </a>
                    </h3>
                    <span className="number">01</span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="main-box">
                  <div className="box wow fadeInUp">
                    <div className="title-items">
                      <h3><a href="/project-details">Digital Marketing</a></h3>
                      <span className="number">02</span>
                    </div>
                    <span className="number-hover">02</span>
                    <div className="project-content">
                      <h3><a href="/project-details">Digital Marketing</a></h3>
                      <p>
                        Reprehendeirure irit in volut
                        ate velit esse cillum dolDuis aute irure dolor in ore
                      </p>
                      <a href="/project-details" className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                  </div>
                  <div className="box bg-1 wow fadeInUp">
                    <div className="title-items">
                      <h3><a href="/project-details">Instantly Analyze</a></h3>
                      <span className="number">03</span>
                    </div>
                    <span className="number-hover">03</span>
                    <div className="project-content">
                      <h3><a href="/project-details">Instantly Analyze</a></h3>
                      <p>
                        Reprehendeirure irit in volut
                        ate velit esse cillum dolDuis aute irure dolor in ore
                      </p>
                      <a href="/project-details" className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                  </div>
                  <div className="box bg-2 active wow fadeInUp">
                    <div className="title-items">
                      <h3><a href="/project-details">Web & Mobile</a></h3>
                      <span className="number">04</span>
                    </div>
                    <span className="number-hover">04</span>
                    <div className="project-content">
                      <h3><a href="/project-details">Web & Mobile</a></h3>
                      <p>
                        Reprehendeirure irit in volut
                        ate velit esse cillum dolDuis aute irure dolor in ore
                      </p>
                      <a href="/project-details" className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                  </div>
                  <div className="box bg-3 wow fadeInUp">
                    <div className="title-items">
                      <h3><a href="/project-details">Email marketing</a></h3>
                      <span className="number">05</span>
                    </div>
                    <span className="number-hover">05</span>
                    <div className="project-content">
                      <h3><a href="/project-details">Email marketing</a></h3>
                      <p>
                        Reprehendeirure irit in volut
                        ate velit esse cillum dolDuis aute irure dolor in ore
                      </p>
                      <a href="/project-details" className="link-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="audience-section fix section-padding bg-cover" style={{backgroundImage: "url('/static/image/audience-bg.jpg')"}}>
        <div className="container">
          <div className="audience-wrapper">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="audience-content">
                  <div className="section-title">
                    <div className="sub-title bg-color-3 wow fadeInUp">
                      <span className="wow fadeInUp">Success Stories</span>
                    </div>
                    <h2 className="text-white wow fadeInUp">
                      Organic Audience Driven On Your Websites
                    </h2>
                  </div>
                  <div className="client-items wow fadeInUp">
                    <div className="client-logo">
                      <Image src="/static/picture/logo.png" alt="img" width={100} height={50} />
                    </div>
                    <div className="client-img">
                      <Image src="/static/picture/client.png" alt="img" width={120} height={60} />
                      <div className="star-icon">
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <span>450+ reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="audience-right">
                  <div className="audience-img wow fadeInUp">
                    <Image src="/static/picture/audience-img.jpg" alt="img" width={770} height={350} />
                  </div>
                  <div className="counter-box-area">
                    <div className="counter-box wow fadeInUp">
                      <h2>
                        <span className="count">500</span>+
                      </h2>
                      <div className="content">
                        <h4>Total Project</h4>
                        <p>Lorem dolor amet consectetur adipiscing any more elit. </p>
                      </div>
                    </div>
                    <div className="counter-box wow fadeInUp">
                      <h2>
                        <span className="count">300</span>M+
                      </h2>
                      <div className="content">
                        <h4>Investment</h4>
                        <p>Lorem dolor amet consectetur adipiscing any more elit. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="team-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="team-image">
                  <Image src="/static/picture/012.png" alt="img" className="wow img-custom-anim-left" width={570} height={570} />
                  <div className="shape-image">
                    <Image src="/static/picture/shape-img.png" alt="img" width={570} height={570} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="team-content">
                  <div className="section-title">
                    <div className="sub-title wow fadeInUp">
                      <span>OUR EXPERT TEAM</span>
                    </div>
                    <h2 className="wow fadeInUp">
                      Let's make something awesome together
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp">
                    Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances
                  </p>
                  <div className="list-items wow fadeInUp">
                    <ul>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="#6A47ED"></path>
                        </svg>
                        30-day money back guarantee
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="#6A47ED"></path>
                        </svg>
                        Web site Marketing Solutions
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="#6A47ED"></path>
                        </svg>
                        Unlimited Application
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="#6A47ED"></path>
                        </svg>
                        24/7 system Monitoring
                      </li>
                    </ul>
                  </div>
                  <div className="main-button wow fadeInUp">
                    <Link href="/team"> <span className="theme-btn"> EXPLORE MORE </span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 更多内容部分将添加 */}
    </main>
  );
}
