import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Corporate</title>
            </Helmet>

            <div className="about-section bg-blue pt-100 mt-4 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/industries/corporate/Image-1.jpg" alt="shape" className="red-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">Make sure you hire right for your corporate</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <p className="text-black">The most widespread use of verification has traditionally been employee verification for corporates. In verticals like IT, ITeS,
                                        Banking, Financial Services, Insurance, Automotive, eCommerce and Healthcare, where qualifications and skills are of utmost
                                        importance, instances of falsification of academic qualifications and employment are on the rise. In fact, India reports almost
                                        11% of resume fabrication in employment and the largest misrepresentation of academic qualifications. Evaluationz
                                        (A NASSCOM NSR Empanelled company) has put together robust verification processes that detects and flags these frauds.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-black">
                        Recommended Verifications for corporates
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-1.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-2.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-3.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                               Employment Verification
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-4.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-5.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                               Criminal Record Check
                            </span>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-6.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Drug Test
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">The Evaluationz Edge</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Our comprehensive verifications process builds on Evaluationz’ proprietary BlueG platform that uses artificial intelligence, and
                                        componentized government identity documents and databases.</p>

                                    <p className="text-white">
                                        Evaluationz verifications is made incredibly convenient and quick with seamless API integration with existing ATS and HRIS
                                        systems. The HR department gets easy interactions that feel like the native application that they are used to while the process
                                        is intuitive and transparent for the potential candidate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-7.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Seamless API Integration
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                               Intuitive And Hassle-free Process
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-9.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Multiple Payment Options
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/Icon-10.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Automatically Trigger Initial And Repeat Verifications
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/api-read-more" className="btn btn-primary btn-white shadow-lg">For more details on the BlueG platform and API integration, go here</Link>
                        </div>

                        <div className="col-12 mt-4">
                            <Link to="/service-read-more" className="btn btn-primary btn-white shadow-lg">For more information on our Services, go here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
