import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Modified Title</title>
            </Helmet>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/about-us/image-1.jpg" alt="shape" className="blue-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">A leap of technology from a foundation of truth</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">Who We Are</h1>
                                    <p className="text-black font-weight-bold">Built on integrity</p>
                                </div>

                                <div className="about-content">
                                    <p className="text-black font-weight-normal">EIt is fitting that as a company in the verification business, Evaluationz has been built and nurtured on values of trust, respect, and
                                        most importantly, integrity since its inception in 2006.</p>

                                    <p className="text-black font-weight-normal">As we have grown, these values have remained steadfast, and they have been imbued by our people to become an integral part
                                        of our culture. And this has led to Evaluationz becoming a great place to work, where innovation is encouraged and development
                                        is a given.</p>

                                    <p className="text-black font-weight-normal">The ambition to stay ahead of the curve has seen Evaluationz not just keep pace with changes in the verification landscape, but
                                        introduce innovative technology and processes that further the cause.
                                        Led by a visionary leadership team and execution excellence of every dedicated employee, Evaluationz defines a
                                        forward-thinking approach that carries everyone ahead. And earns the respect of clients, partners, other stakeholders, and
                                        society at large.</p>

                                    <Link to="/explore" className="btn btn-primary btn-red">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
