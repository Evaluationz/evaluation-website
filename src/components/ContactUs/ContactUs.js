import React,{Component}from "react";
import { Helmet } from 'react-helmet';
import { Button, Alert, Form, Row, Col } from 'react-bootstrap';


const ContactUs = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Contact us</title>
                <meta name="description" content="Have someone from Evaluationz reach out to you with out various digital and realtime offerings" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification" />
            </Helmet>

            <div className="about-section bg-red pt-100 pb-4">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/contact-us/image-1.png" alt="shape" className="blue-image-left" />
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

            <div className="about-section bg-white pt-100 pb-5">
                <div className="container">
                   <iframe className="map"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BHIVE%20Workspace%20MG%20Road+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/truck-gps/">vehicle tracking</a></iframe>
                    <div className="section-title section-title-left text-start">
                        <h5 className="text-black font-weight-bolder pt-5">Call us at : +91 80 71017600</h5>
                        <h5 className="text-black font-weight-bolder">Mail us at : sales@evaluationz.com</h5>
                    </div>
                </div>

            </div>

            <div className="about-section contact-us-section bg-light-gray pt-100 pb-5">

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

export default ContactUs;
