import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Button, Alert, Form, Row, Col } from 'react-bootstrap';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Contact us</title>
            </Helmet>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/contact-us/Image-1.png" alt="shape" className="blue-image-left" />
                            </div>
                        </div>

                        <div className="col-lg-4 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">We’d love to hear from you.</h1>

                                </div>
                                <div className="section-title section-title-left text-start">
                                    <h5 className="text-white font-weight-bolder">Visit us in person at :</h5>
                                    <p className="text-white">Evaluationz India Private Limited
                                        BHIVE Workspace, 29 MG Road
                                        7TH Floor, Mahalakshmi Chambers
                                        Next to Trinity Metro Station,
                                        Bangalore – 560001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.974009881821!2d77.6142341140435!3d12.973514118348346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17daed2415b9%3A0x12dd81e0b4f492f2!2sBHIVE%20Workspace%20MG%20Road!5e0!3m2!1sen!2sin!4v1646640348585!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                    <div className="section-title section-title-left text-start">
                        <h5 className="text-black font-weight-bolder pt-5">Call us at : +91 80 71017600</h5>
                        <h5 className="text-black font-weight-bolder">Mail us at : sales@evaluationz.com</h5>
                    </div>
                </div>

            </div>

            <div className="about-section contact-us-section bg-light-gray pt-100 pb-70">

                <div className="container">
                    <div className="section-title section-title-left text-start">
                        <h3 className="text-black font-weight-bolder">Get in Touch</h3>
                        <p className="text-black">If you have a specific query, please fill this form and we will get back to you soon.</p>
                    </div>
                    <Form method="POST">
                        <Form.Group as={Row} className="mb-12" controlId="formPlaintextEmail">
                            <div className="row align-items-center ">
                                <div className="col-lg-12 pb-30">
                                    <Form.Control type="text" className="shadow-lg" name="" placeholder="Name" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-30">
                                    <Form.Control type="text" name="" className="shadow-lg" placeholder="Company" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-30">
                                    <Form.Control type="text" name="" className="shadow-lg" placeholder="Title" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-30">
                                    <Form.Control type="text" name="" className="shadow-lg" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 pb-30">
                                    <Form.Control type="text" name="" className="shadow-lg" placeholder="Phone" />
                                </div>
                                <div className="col-lg-6 pb-30">
                                    <Form.Control type="text" name="" className="shadow-lg" placeholder="City" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-30">
                                    <textarea className="form-control shadow-lg" placeholder="Message/Query" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-30">
                                    <Button type="Submit" className="btn btn-primary btn-red shadow-lg font-weight-bolder" >Submit</Button>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
            </div>

        </section>
    );
};

export default Landing;
