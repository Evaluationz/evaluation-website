import React, {useState} from "react";
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Form, Row} from "react-bootstrap";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="fixed-top non-fixed">
            <div className="navbar-area sticky-black bg-black is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <Link to="/" onClick={() => {window.location.href="/"}} className="mobile-brand">
                            <div className="d-flex align-items-center justify-content-start">
                                <img src="images/small-logo.png" alt="logo" className="logo small-logo-image" width={50}/>
                                <img src="images/logo.png" alt="logo" className="logo logo-image"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="container-fluid px-0">
                        <nav className="navbar navbar-expand-md navbar-light px-0">
                            <Link className="navbar-brand mr-0"
                               to="/" onClick={() => {window.location.href="/"}}>
                                <div className="d-flex align-items-center justify-content-start">
                                    <img src="images/small-logo.png" alt="logo" className="logo small-logo-image" width={50}/>
                                    <img src="images/logo.png" alt="logo" className="logo logo-image"/>
                                </div>
                            </Link>
                            <div className="collapse navbar-collapse mean-menu d-block" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/services" className="nav-link">SERVICES</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/industries" className="nav-link dropdown-toggle">INDUSTRIES</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item nav-item-1">
                                                <Link to="/ecommerce" className="nav-link text-uppercase">Ecommerce Companies</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/banking-fintech" className="nav-link text-uppercase">Banking and fintech</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/corporate" className="nav-link text-uppercase">Corporate</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/matrimonial" className="nav-link text-uppercase">Matrimonial</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/online-dating" className="nav-link text-uppercase">Online dating</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/rental" className="nav-link text-uppercase">Rental</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/technology"
                                              className="nav-link">TECHNOLOGY</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about-us"
                                              className="nav-link">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle">INSIGHTS</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item nav-item-1">
                                                <Link to="/blog" className="nav-link">BLOG</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/case-studies" className="nav-link">CASE STUDIES</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/careers"
                                           className="nav-link">CAREERS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact"
                                           className="nav-link">CONTACT</Link>
                                    </li>
                                    <li className="nav-item nav-btn">
                                        <a  onClick={handleShow}
                                           className="nav-link cursor-pointer">GET IN TOUCH</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Get in Touch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="about-section contact-us-section bg-white">
                        <div className="container">
                            <Form method="POST">
                                <Form.Group className="mb-0" controlId="formPlaintextEmail">
                                    <div className="row align-items-center ">
                                        <div className="col-lg-12 pb-3">
                                            <Form.Control type="text" className="shadow-sm" name="" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 pb-3">
                                            <Form.Control type="text" name="" className="shadow-sm" placeholder="Company" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 pb-3">
                                            <Form.Control type="text" name="" className="shadow-sm" placeholder="Title" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 pb-3">
                                            <Form.Control type="text" name="" className="shadow-sm" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 pb-3">
                                            <Form.Control type="text" name="" className="shadow-sm" placeholder="Phone" />
                                        </div>
                                        <div className="col-lg-6 pb-3">
                                            <Form.Control type="text" name="" className="shadow-sm" placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 pb-3">
                                            <textarea className="form-control shadow-sm" style={{maxHeight: '100px', height: '100px'}} placeholder="Message/Query" />
                                        </div>
                                    </div>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Navbar;
