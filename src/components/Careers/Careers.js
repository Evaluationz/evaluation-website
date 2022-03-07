import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Careers</title>
            </Helmet>

            <div className="about-section bg-blue pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/careers/Image-1.png" alt="shape" className="red-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">Success in the pursuit of truth</h1>
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
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">Since our inception in 2006, Evaluationz has been a benchmark for a great workplace. Employees have become evangelists as
                                        they see their career trajectory rise. And it’s no wonder. We follow the follow the principles of R.I.S.E – Regular Immediate
                                        Specific Encouraging – as an integral part of the company culture.</p>
                                </div>
                                <div className="section-title section-title-left text-start">
                                    <p className="text-black font-weight-bold">The company has been built on four pillars:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-header border-b-0 bg-red">
                                    <h1 className="card-title text-white font-weight-bolder mb-0">Commitment</h1>
                                </div>
                                <img className="card-img-top img-fluid" src="images/careers/Image-2.png" alt="shape"/>
                                <div className="card-body bg-red">
                                    <p className="card-text text-white">The company’s commitment to staying at the edge of
                                        verification technology, is transmuted into our work
                                        environment where innovation, skills and future
                                        thinking is prized among employees. This ensures an
                                        encouraging environment where employees are
                                        encouraged to grow and succeed without fear.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-header border-b-0 bg-blue">
                                    <h1 className="card-title text-white font-weight-bolder mb-0">Team work</h1>
                                </div>
                                <img className="card-img-top img-fluid" src="images/careers/Image-3.png" alt="shape"/>
                                <div className="card-body bg-blue">
                                    <p className="card-text text-white">Great technology is built and runs on collaboration. At
                                        Evaluationz, we ensure that nobody works in silos, and
                                        all necessary steps are taken to ensure that every
                                        employee can work in tandem with the other for the
                                        best possible outcome.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-header border-b-0 bg-blue">
                                    <h1 className="card-title text-white font-weight-bolder mb-0">Integrity</h1>
                                </div>
                                <img className="card-img-top img-fluid" src="images/careers/Image-4.png" alt="shape"/>
                                <div className="card-body bg-blue">
                                    <p className="card-text text-white">Integrity is at the core of the success of Evaluationz.
                                        After all, an organization that is founded on the
                                        concept of verification and truth-finding has to live
                                        the principle.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-header border-b-0 bg-red">
                                    <h1 className="card-title text-white font-weight-bolder mb-0">Mutual Respect</h1>
                                </div>
                                <img className="card-img-top img-fluid" src="images/careers/Image-5.png" alt="shape"/>
                                <div className="card-body bg-red">
                                    <p className="card-text text-white">We create an atmosphere where every employee is
                                        treated with respect and feels valued. And this is
                                        imbibed by the employees to ensure that they work
                                        and interact respecting and valuing each individual.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">If you would like to join us on our path of growth and discovery, here are some opportunities that are available right now. If you
                                        do not see a fit right now, don’t forget to check back regularly as we are always looking for great talent across skillsets and
                                        experience levels.</p>

                                    <p className="text-black font-weight-normal">Evaluationz is an Equal Opportunity Employer – candidate selection will be on the basis of competency only and not based on
                                        recommendation, race, caste, creed, sex, religion, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-light-gray pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h3 className="text-black">Current open positions:</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-body bg-blue">
                                    <h5 className="card-text text-white">Senior Process Associate</h5>
                                    <p className="card-text text-white">for Client Relationship Management team with 2 to 3
                                        years of work experience in BGV industry.
                                    </p>
                                    <p className="card-text text-white">
                                        <b>Required skills -</b> Good written and oral communication
                                        skill and interpersonal skills
                                    </p>
                                    <p className="card-text text-white font">
                                        <b>Educational qualification -</b> Educational qualification - Any degree
                                        Salary is not a constraint for the right candidates
                                    </p>

                                    <Link to="/" className="btn btn-primary btn-red">Apply Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-body bg-red">
                                    <h5 className="card-text text-white">Process Associate</h5>
                                    <p className="card-text text-white">for Client Relationship Management team with 0 to 1
                                        year of work experience.
                                    </p>
                                    <p className="card-text text-white">
                                        <b>Required skills -</b> Good written and oral communication
                                        skill and interpersonal skill
                                    </p>
                                    <p className="card-text text-white font">
                                        <b>Educational qualification -</b> Any degree
                                        Salary is not a constraint for the right candidates
                                    </p>

                                    <Link to="/" className="btn btn-primary btn-blue">Apply Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-body bg-red">
                                    <h5 className="card-text text-white">Business Development Manager</h5>
                                    <p className="card-text text-white">with minimum 3 years of work experience in the
                                        similar role.
                                    </p>
                                    <p className="card-text text-white">
                                        <b>Required skills -</b> - Good written and oral communication
                                        skill, analytical skill and interpersonal skill
                                    </p>
                                    <p className="card-text text-white font">
                                        <b>Educational qualification -</b> Any degree, MBA preferred
                                        Salary is not a constraint for the right candidates
                                    </p>

                                    <Link to="/" className="btn btn-primary btn-blue">Apply Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 border-0 text-white">
                                <div className="card-body bg-blue">
                                    <h5 className="card-text text-white">Process Associate</h5>
                                    <p className="card-text text-white">for Operation team with 0 to 1 year of work experience.
                                    </p>
                                    <p className="card-text text-white">
                                        <b>Required skills -</b> -  Good written and oral communication
                                        skill and interpersonal skill, MS office, excel
                                    </p>
                                    <p className="card-text text-white font">
                                        <b>Educational qualification -</b> Any degree
                                        Salary is not a constraint for the right candidates
                                    </p>

                                    <Link to="/" className="btn btn-primary btn-red">Apply Now</Link>
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
