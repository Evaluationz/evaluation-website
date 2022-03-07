import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import AboutUs from "../components/AboutUs/AboutUs";
import Careers from "../components/Careers/Careers";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import Services from "../components/Services/Services";
import Blog from "../components/Blog/BlogLanding";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/cjs/Switch";
import ScrollIntoView from "../components/ScrollIntoView";

const App = () => {
	return (
        <BrowserRouter>
            <div>
                <ScrollIntoView>
                    <Switch className="pl-0">
                        <Navbar/>
                        <Route path='/' exact component={Landing} />
                        <Route path='/about-us' component={AboutUs} />
                        <Route path='/careers' component={Careers} />
                        <Route path='/success-stories' component={SuccessStories} />
                        <Route path='/services' component={Services} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/contact' component={ContactUs} />
                        <Footer/>
                    </Switch>
                </ScrollIntoView>
            </div>
        </BrowserRouter>
    );
};

export default App;
