import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
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
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand"
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
                                                <Link to="/industries" className="nav-link">INDUSTRIES1</Link>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <Link to="/industries" className="nav-link">INDUSTRIES2</Link>
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
                                                <Link to="/industries" className="nav-link">SUCCESS STORIES</Link>
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
                                        <Link to="/get-in-touch"
                                           className="nav-link">GET IN TOUCH</Link>
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

export default navbar;
