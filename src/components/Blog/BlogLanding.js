import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Blog = () => {
    const history = useHistory();
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification" />
            </Helmet>

            <div className="hero-block pt-4 pb-5 mt-5">
                <div className="container pt-5">
                    <div className="col-12 px-0">
                        <h1>Blogs</h1>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 py-2 cursor-pointer" onClick={() => history.push(`/blog1`)}>
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-1/banner-1.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Why background verification
                                        services are crucial before and
                                        after listing properties</h4>
                                    <p className="mb-0">The world of rental is fraught with risk. It is a contract
                                        between two (usually) complete strangers where the
                                        asset under contract is of tremendous value. With the</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer" onClick={() => history.push(`/blog2`)}>
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-2/banner-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">

                                    <h4>Hassle-free verification and fraud protection for the fintech industry</h4>
                                    <p className="mb-0">Recently, social media was abuzz with users discovering that there were loans taken out in their name - loans that they had no idea about. While some of them found out from  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer" onClick={() => history.push(`/blog3`)}>
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-3/banner-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">

                                    <h4>Ensuring a safer drive for ride-hailing customers
                                    </h4>
                                    <p className="mb-0">It is a situation that any cab aggregator or ride-hailing company fears. Blaring headlines about driver misbehaviour or criminality.  Unfortunately, they are more common than anybody would imagine.
                                        Sample these</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer" onClick={() => history.push(`/blog4`)}>
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-4/blog-4.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Is it time for social media users to self-verify? The tech exists</h4>
                                    <p className="mb-0">When Elon Musk recently spoke about giving Twitter users the ability to self-verify so that every user
                                        can get an “authentication mark”, he was adding to the buzz regarding </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
