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
                                        <a className="nav-link dropdown-toggle">SERVICES</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item  nav-item-1">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html"
                                                   className="nav-link active">Home Demo 1</a>
                                            </li>
                                            <li className="nav-item  nav-item-2">
                                                <a href="https://templates.envytheme.com/erudex/default/index-2.html"
                                                   className="nav-link">Home Demo 2</a>
                                            </li>
                                            <li className="nav-item  nav-item-3">
                                                <a href="https://templates.envytheme.com/erudex/default/index-3.html"
                                                   className="nav-link">Home Demo 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/use-cases" className="nav-link">USE CASES</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/technology"
                                              className="nav-link">TECHNOLOGY</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about"
                                              className="nav-link">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/insights"
                                           className="nav-link">INSIGHTS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/careers"
                                           className="nav-link">CAREERS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact"
                                           className="nav-link">CONTACT</Link>
                                    </li>
                                    <li className="nav-item">
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
