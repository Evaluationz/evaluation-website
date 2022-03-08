import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Industries</title>
            </Helmet>

            <div className="about-section bg-red pt-100 mt-4 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/industries/Image-1.jpg" alt="shape" className="blue-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">Many verifications. One goal. Authenticity</h1>
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
                                    <p className="text-black">One can never be too careful. There is no denying the upswing in frauds and misrepresentation across more and more facets
                                        of modern life. This is probably why verification has expanded from the traditional fields like employee background
                                        verification. Today, Evaluationz offers a gamut of verification services that cover employees and users.</p>

                                    <p className="text-black">Our proprietary BlueG platform built on Artificial Intelligence and using componentized features makes comprehensive and
                                        accurate verification easy and instant. Evaluationz enables verification across use cases that span organizations, individuals
                                        and business entities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-blue pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Corporates</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">The most widespread use of verification has traditionally
                                        been employee verification for corporates, specially in
                                        industries such as IT, ITeS, Banking, Financial Services,
                                        Insurance, Automotive, eCommerce and Healthcare.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-right text-center">
                                <img src="images/industries/Image-2.jpg" alt="shape" className="red-image-right"/>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-white">
                        Verifications:
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-1.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-2.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-3.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Employment Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-4.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-5.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Criminal Record Check
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-6.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Drug Tests
                            </span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <Link to="/explore" className="btn btn-primary btn-red float-right">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/industries/Image-3.jpg" alt="shape" className="blue-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Ride Hailing, Ecommerce, Hyperlocal Delivery</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">With the gig and partnership economies becoming
                                        more prominent, verification of drivers, delivery partners
                                        and other staff is crucial. Evaluationz also conducts
                                        regular refresher checks to ensure the record remains in
                                        the green zone.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-white">
                        Verifications:
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-1.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-2.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-4.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-7.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Driving Licence Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Legal Verification
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-6.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Drug Tests
                            </span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <Link to="/explore" className="btn btn-primary btn-blue float-right">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-blue pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Banks / Fintech</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Banking and fintech platforms nowadays offer instant
                                        signups, loans and account opening. This requires
                                        instant and hassle-free user KYC. The verifications will
                                        also need to be conducted at regular intervals to ensure
                                        user data is up to date.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-right text-center">
                                <img src="images/industries/Image-4.jpg" alt="shape" className="red-image-right"/>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-white">
                        Verifications:
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-1.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-2.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-3.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Employment Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-4.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-5.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Criminal Record Check
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-9.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Reference Check
                            </span>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-10.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Court Record Verification
                            </span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <Link to="/explore" className="btn btn-primary btn-red float-right">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/industries/Image-5.jpg" alt="shape" className="blue-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Dating Sites</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Fake profiles and misrepresentations are rife in the
                                        online dating space. Evaluationz helps verify that users
                                        are who they claim to be, and that their information is
                                        correct. Dating scams have also led to financial losses
                                        and identity theft.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-white">
                        Verifications:
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-1.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-2.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-4.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                               Legal Verification
                            </span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <Link to="/explore" className="btn btn-primary btn-blue float-right">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-blue pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Matrimonial Sites</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Thorough pre-matrimonial verification can prevent
                                        costly mistakes - financial, emotional and reputational.
                                        Users can decide the depth to which they want to screen
                                        potential candidates to ensure they are making a
                                        balanced decision.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-right text-center">
                                <img src="images/industries/Image-6.jpg" alt="shape" className="red-image-right"/>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-white">
                        Verifications:
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-1.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-2.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-3.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Employment Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-4.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Legal Verification
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-10.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Financial Track Record Verification
                            </span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <Link to="/explore" className="btn btn-primary btn-red float-right">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/industries/Image-7.jpg" alt="shape" className="blue-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Online Rental Companies</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Homeowners are naturally looking to protect their
                                        precious asset by ensuring that they rent their
                                        properties to trustworthy tenants. Evaluationz’
                                        verifications can help them sleep in peace.
                                        And verifications at regular intervals can ensure the
                                        records are up to date.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-white">
                        Verifications:
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-1.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-2.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                               Legal Verification
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/Icon-12.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Credit Verification
                            </span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <Link to="/explore" className="btn btn-primary btn-blue float-right">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
