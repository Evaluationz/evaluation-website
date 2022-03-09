import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Technology = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Technology</title>
                <meta name="description" content="Read about the technology we use to make the verification process seamless, secure and dependable" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification"/>
            </Helmet>

            <div className="about-section bg-blue pt-5 mt-5 pb-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/technology/Image-1.jpg" alt="shape" className="red-image-left"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">
                                        AI-based
                                        platform to make
                                        intelligent
                                        human decisions
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section bg-white pt-5 pb-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/landing/Image-6.jpg" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                     <p className="text-black">
                                      Evaluationz’ comprehensive verifications process builds on our
                                      proprietary BlueG platform that leverages the power of artificial
                                      intelligence, componentized government identity documents and
                                      databases to make accurate results available in real time.
                                      </p>


                                      <p className="text-black">
                                      Built completely in-house, the BlueG platform works seamlessly and
                                      in real-time for blue collar, white collar and grey collar verifications.
                                      Designed around modern human computer interaction principles,
                                      the platform makes it seamless and intuitive for both the employer
                                      and the potential candidate being verified. Componentisation and
                                      artificial intelligence combine to make accurate results available in
                                      real time. What’s more, the platform provides the flexibility to conduct
                                      verifications in recurring mode.
                                    </p>
                                    <p className="text-black">
                                      Evaluationz’ years of experience in the verification industry and the
                                      maturity model enables manual intervention as and when required
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/technology/Image-2.jpg" alt="shape" className="blue-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Flexible payment options</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">
                                    Evaluationz also offers flexibility in payment modes –
                                    direct debits from an account, prepaid options and
                                    post-paid options. Enterprises can choose the option
                                    that suits their budget and convenience. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section bg-blue pt-100 pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">API integration</h2>
                                    <p className="text-white">
                                    Evaluationz’ BlueG capabilities can be easily integrated
                                    into existing HRIS, ATS and other existing systems
                                    thanks to the seamless API integration. Running like a
                                    native application within the system, it can trigger
                                    automatic verifications when a record is created to
                                    enhance productivity and efficiency. It requests consent
                                    from the candidate being verified, and the whole
                                    process is transparent and convenient. If necessary, the
                                    verification can be done in recurring mode to keep the
                                    records updated and to ensure that employees remain
                                    in the green zone.  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/technology/image-3.jpg" alt="shape"  className="red-image-right"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </section>
    );
};

export default Technology;
