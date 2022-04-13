import React, { Component, useState } from "react";
import { Helmet } from 'react-helmet';
import { Button, Alert, Form, Row, Col } from 'react-bootstrap';
import axios from "axios";





const ContactUs = () => {

    const [validated, setValidated] = useState(false);
    const [activeButton, setactiveButton] = useState(true);
    const [contactValidity, updateContactValidity] = useState(false);
    // const [emailValidity, updateEmailValidity] = useState(false);

    async function Contactus(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {


            const postData = { "name": document.getElementById('mauticform_input_getintouch_f_name').value, "company": document.getElementById('mauticform_input_getintouch_company').value, "title": document.getElementById('mauticform_input_getintouch_title').value, "email": document.getElementById('mauticform_input_getintouch_email').value, "phone": document.getElementById('mauticform_input_getintouch_phone').value, "city": document.getElementById('mauticform_input_getintouch_city').value, "message": document.getElementById('mauticform_input_getintouch_message_query').value }
            let logContact = await axios.post("https://verify.evaluationz.com:304/api/ContactUs", postData);
        }
        setValidated(true);
    }

    function onChange(e) {
        e.persist();
        var name = document.getElementById('mauticform_input_getintouch_f_name').value;
        var email = document.getElementById('mauticform_input_getintouch_email').value;
        // if (e.target.id === 'mauticform_input_getintouch_email') {
        //     var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
        //     if (e.target.value.match(email_regex)) {
        //         updateEmailValidity(false)
        //     }
        //     else {
        //         updateEmailValidity(true)
        //     }
        //   }


        if (name !== "" && email !== "") {
            setactiveButton(false)
        }
        else {
            setactiveButton(true)
        }
        var contact_no = document.getElementById('mauticform_input_getintouch_phone').value;
        if (contact_no.length === 10) {
            updateContactValidity(false)
        }
        else {
            updateContactValidity(true)

        }
    }



    async function cityAuto() {
        let autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById('mauticform_input_getintouch_city'),
            { types: ['geocode'] }
        );
        console.log("geo ", autocomplete);
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            // updateFormState(() => ({ ...formState, city: place.formatted_address }))
        });
    }

    return (
        <section>
            <Helmet>
                <title>Evaluationz: Contact us</title>
                <meta name="description" content="Have someone from Evaluationz reach out to you with out various digital and realtime offerings" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification" />
            </Helmet>

            <div className="about-section bg-red py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/contact-us/image-1.png" alt="shape" className="blue-image-left shadow-2xl" />
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">We’d love to hear from you.</h1>
                                </div>
                                <div className="section-title section-title-left text-start">
                                    <h5 className="text-white font-weight-bolder">Visit us in person at :</h5>
                                    <p className="text-white"><b>Evaluationz India Private Limited</b><br />
                                        BHIVE Workspace, 29 MG Road<br />
                                        7TH Floor, Mahalakshmi Chambers<br />
                                        Next to Trinity Metro Station,<br />
                                        Bangalore – 560001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-5">
                <div className="container">
                    <iframe className="map"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BHIVE%20Workspace%20MG%20Road+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/truck-gps/">vehicle tracking</a></iframe>
                    <div className="section-title section-title-left mb-0 text-start">
                        <h5 className="text-black font-weight-bolder pt-5">Call us at : +91 80 49905616</h5>
                        <h5 className="text-black font-weight-bolder">Mail us at : sales@evaluationz.com</h5>
                    </div>
                </div>
            </div>

            <div className="about-section contact-us-section bg-light-gray pt-5 pb-1" id="getInTouch">
                <div className="container">
                    <div className="section-title section-title-left mb-3 text-start">
                        <h3 className="text-black font-weight-bolder">Get in Touch</h3>
                        <p className="text-black mb-0">If you have a specific query, please fill this form and we will get back to you soon.</p>
                    </div>
                    <div id="mauticform_wrapper_getintouch" className="mauticform_wrapper">
                        <Form noValidate validated={validated} onSubmit={Contactus} autoComplete="off" role="form" method="post" action="https://evaluationz.mykampaign.com/form/submit?formId=2" id="mauticform_getintouch" data-mautic-form="getintouch">
                            <div className="mauticform-error" id="mauticform_getintouch_error"></div>
                            <div className="mauticform-message" id="mauticform_getintouch_message"></div>
                            <div className="mauticform-innerform">
                                <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                                    <div id="mauticform_getintouch_f_name" data-validate="f_name" data-validation-type="text" className="mauticform-row mauticform-text mauticform-field-1 mauticform-required">
                                        <label id="mauticform_label_getintouch_f_name" className="mauticform-label">Name</label>
                                        <Form.Control id="mauticform_input_getintouch_f_name" name="mauticform[f_name]" className="mauticform-input" type="text" />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}>Need Information</span>
                                    </div>
                                    <div id="mauticform_getintouch_company" className="mauticform-row mauticform-text mauticform-field-2">
                                        <label id="mauticform_label_getintouch_company" className="mauticform-label">Company</label>
                                        <Form.Control id="mauticform_input_getintouch_company" name="mauticform[company]" className="mauticform-input" type="text" />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                    </div>

                                    <div id="mauticform_getintouch_title" className="mauticform-row mauticform-text mauticform-field-3">
                                        <label id="mauticform_label_getintouch_title" className="mauticform-label">Title</label>
                                        <Form.Control id="mauticform_input_getintouch_title" name="mauticform[title]" className="mauticform-input" type="text" />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                    </div>

                                    <div id="mauticform_getintouch_email" data-validate="email" data-validation-type="email" className="mauticform-row mauticform-email mauticform-field-4 mauticform-required">
                                        <label id="mauticform_label_getintouch_email" className="mauticform-label">Email</label>
                                        <Form.Control id="mauticform_input_getintouch_email" name="mauticform[email]" className="mauticform-input" type="email" />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}>Need Information</span>

                                    </div>

                                    <div id="mauticform_getintouch_phone" className="mauticform-row mauticform-tel mauticform-field-5">
                                        <label id="mauticform_label_getintouch_phone" className="mauticform-label">Phone</label>
                                        <Form.Control id="mauticform_input_getintouch_phone" name="mauticform[phone]" isInvalid={contactValidity} onChange={onChange} className="mauticform-input" type="number" />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                        {/* <Form.Control.Feedback type="invalid" className="text-left">
                                            Please provide a valid contact number.
    </Form.Control.Feedback> */}
                                    </div>

                                    <div id="mauticform_getintouch_city" className="mauticform-row mauticform-text mauticform-field-6">
                                        <label id="mauticform_label_getintouch_city" className="mauticform-label">City</label>
                                        <Form.Control id="mauticform_input_getintouch_city" onFocus={cityAuto} name="mauticform[city]" className="mauticform-input" type="text" />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                    </div>

                                    <div id="mauticform_getintouch_message_query" className="mauticform-row mauticform-text mauticform-field-7">
                                        <label id="mauticform_label_getintouch_message_query" className="mauticform-label">Message/ Query</label>
                                        <textarea id="mauticform_input_getintouch_message_query" name="mauticform[message_query]" className="mauticform-textarea"></textarea>
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                    </div>

                                    <div id="mauticform_getintouch_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-8">

                                        <Button type="submit" name="mauticform[submit]" id="mauticform_input_getintouch_submit" className="btn btn-primary btn-red shadow-lg font-weight-bolder" disabled={activeButton}>Submit</Button>
                                    </div>

                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
