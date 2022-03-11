import React,{Component,useState}from "react";
import { Helmet } from 'react-helmet';
import { Button, Alert, Form, Row, Col } from 'react-bootstrap';
import axios from "axios";

const formData = { name:'',company:'',title:'',email:'',phone:'',city:'',message:''}

const ContactUs = () => {
    const [formState, updateFormState] = useState(formData);
    const [validated, setValidated] = useState(false);

    async function Contactus(event){
        const form = event.currentTarget;
       
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
        const { name,company,title,email,phone,city,message } = formState;
        const postData = {"name":name,"company":company,"title":title,"email":email,"phone":phone,"city":city,"message":message}
        let logContact = await axios.post("https://verify.evaluationz.com:300/api/ContactUs",postData);
        }
        setValidated(true);
    }

    function onChange(e){
        e.persist();
        updateFormState(() => ({...formState,[e.target.name]:e.target.value}))
    }  

    async function cityAuto(){
        let autocomplete = new window.google.maps.places.Autocomplete(
          document.getElementById( 'city' ),
          { types: [ 'geocode' ] }
        );
        console.log("geo ",autocomplete);
        autocomplete.addListener( 'place_changed', () =>{
          let place = autocomplete.getPlace();
          updateFormState(() => ({...formState,city:place.formatted_address}))
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
                                <img src="images/contact-us/image-1.png" alt="shape" className="blue-image-left" />
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
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

            <div className="about-section bg-white py-5">
                <div className="container">
                    <iframe className="map"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BHIVE%20Workspace%20MG%20Road+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/truck-gps/">vehicle tracking</a></iframe>
                    <div className="section-title section-title-left mb-0 text-start">
                        <h5 className="text-black font-weight-bolder pt-5">Call us at : +91 80 71017600</h5>
                        <h5 className="text-black font-weight-bolder">Mail us at : sales@evaluationz.com</h5>
                    </div>
                </div>
            </div>

            <div className="about-section contact-us-section bg-light-gray pt-5 pb-1">
                <div className="container">
                    <div className="section-title section-title-left mb-3 text-start">
                        <h3 className="text-black font-weight-bolder">Get in Touch</h3>
                        <p className="text-black mb-0">If you have a specific query, please fill this form and we will get back to you soon.</p>
                    </div>

                    <Form noValidate validated={validated} onSubmit={Contactus}>
                        <Form.Group as={Row} className="mb-12" controlId="formPlaintextEmail">
                            <div className="row align-items-center ">
                                <div className="col-lg-12 pb-3">
                                    <Form.Control type="text"
                                                  required
                                                  className="shadow-lg"
                                                  name="name"
                                                  onChange={onChange}
                                                  placeholder="Name" />
                                    <Form.Control.Feedback type="invalid" className="mb-0">
                                        Please provide your name.
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-3">
                                    <Form.Control type="text"
                                                  name="company"
                                                  className="shadow-lg"
                                                  onChange={onChange}
                                                  placeholder="Company" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-3">
                                    <Form.Control type="text"
                                                  name="title"
                                                  className="shadow-lg"
                                                  onChange={onChange}
                                                  placeholder="Title" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-3">
                                    <Form.Control type="email"
                                                  required
                                                  name="email"
                                                  className="shadow-lg"
                                                  onChange={onChange}
                                                  placeholder="Email" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your Email.
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 pb-3">
                                    <Form.Control type="number"
                                                  name="phone"
                                                  className="shadow-lg"
                                                  onChange={onChange}
                                                  placeholder="Phone" />
                                </div>
                                <div className="col-lg-6 pb-3">
                                    <Form.Control type="text"
                                                  name="city"
                                                  id="city"
                                                  onFocus={cityAuto}
                                                  className="shadow-lg"
                                                  onChange={onChange}
                                                  placeholder="City" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-3">
                                    <textarea className="form-control shadow-lg"
                                              name="message"
                                              onChange={onChange}
                                              style={{maxHeight: '150px', height: '150px'}}
                                              placeholder="Message/Query" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-12 pb-30">
                                    <Button type="submit" className="btn btn-primary btn-red shadow-lg font-weight-bolder">Submit</Button>
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
