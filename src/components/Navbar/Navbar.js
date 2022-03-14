import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed-top non-fixed">
            <div className="navbar-area sticky-black bg-black is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <Link to="/" onClick={() => { window.location.href = "/" }} className="mobile-brand">
                            <div className="d-flex align-items-center justify-content-start">
                                <img src="images/logo.png" alt="logo" className="logo logo-image" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand mr-0"
                                to="/" onClick={() => { window.location.href = "/" }}>
                                <div className="d-flex align-items-center justify-content-start">
                                    <img src="images/logo.png" alt="logo" className="logo logo-image" />
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
                                                <Link to="/ecommerce" className="nav-link">ECOMMERCE COMPANIES</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/banking-fintech" className="nav-link text-uppercase">BANKING AND FINTECH</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/corporate" className="nav-link text-uppercase">CORPORATE</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/matrimonial" className="nav-link text-uppercase">MATRIMONIAL</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/online-dating" className="nav-link text-uppercase">ONLINE DATING</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/rental" className="nav-link text-uppercase">RENTAL</Link>
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
                                    
                                    <li className="nav-item nav-btn">
                                        <a href="contact"
                                            className="nav-link cursor-pointer">GET IN TOUCH</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
