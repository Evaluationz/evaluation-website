import React from "react";
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <section>
            <div className="hero-block p-tb-100">
                <div className="container">
                    <div className="col-12 px-0 pb-md-5">
                        <h1>If you need it verified, we've got it covered.</h1>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 col-lg-5">
                            <div className="user-card">
                                <div className="user-card-body">
                                    <img src="images/landing/image-1.jpg" className="img-fluid"/>
                                    <Link to="/employees" className="redirect-link">Employees<i className="mdi mdi-chevron-right c-blue mt-1"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 float-md-right">
                            <div className="user-card">
                                <div className="user-card-body">
                                    <img src="images/landing/image-2.jpg" className="img-fluid"/>
                                    <Link to="/user" className="redirect-link">User<i className="mdi mdi-chevron-right c-red mt-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-section p-b-100 position-relative">
                <div className="container-fluid pt-100 pb-30 bg-black">
                    <div className="banner-carousel default-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer pt-0">
                            <div className="owl-stage">
                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center">
                                                        <img src="images/landing/carousel/Banner-Image-1.jpg" alt="shape"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <h2 className="c-red">Leaders in digital verification</h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <p>Bespoke solutions powered by AI and integration</p>
                                                            <Link to="/explore" className="btn btn-primary btn-red">Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center">
                                                        <img src="images/index/feature-shape-1.png" alt="shape"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <small>About Us</small>
                                                            <h2>Smarttrak is a AI Technology Solutions company focused on </h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <ul>
                                                                <li>Revolutionizing your business with our Advanced AI</li>
                                                                <li>Intelligent and Predictive Assets Monitoring</li>
                                                            </ul>
                                                            <p>We help businesses to lead the charge to digital innovation and tap into the power of the AI,
                                                                by transforming  and creating a competitive advantage that will scale.</p>
                                                            <Link to="/aboutus" className="btn main-btn">About Us</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center">
                                                        <img src="images/index/feature-shape-1.png" alt="shape"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <small>About Us</small>
                                                            <h2>Smarttrak is a AI Technology Solutions company focused on </h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <ul>
                                                                <li>Revolutionizing your business with our Advanced AI</li>
                                                                <li>Intelligent and Predictive Assets Monitoring</li>
                                                            </ul>
                                                            <p>We help businesses to lead the charge to digital innovation and tap into the power of the AI,
                                                                by transforming  and creating a competitive advantage that will scale.</p>
                                                            <Link to="/aboutus" className="btn main-btn">About Us</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
