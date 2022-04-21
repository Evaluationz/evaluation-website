import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const BlogDetails = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta name="keywords" content="Elon Musk, social Media, verification, compliance, government regulation, digital security, digital verification, identity verification, criminal verification" />
                <meta property="og:title" content="Is it time for social media users to self-verify? The tech exists. | Evaluationz" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta property="og:url" content="https://evaluationz.com/blog4" />
                <meta property="og:image" content="https://evaluationz.com/images/blogs/blog-4/blog-4.png" />
                <meta property="og:image:secure_url" content="https://evaluationz.com/images/blogs/blog-4/blog-4.png" />
            </Helmet>

            <div className="about-section bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left mb-0 text-start">
                                    <h1 className="text-black font-weight-bolder">Is it time for social media users to self-verify? The tech exists. </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section col-md-10 p-0 m-0">
                <img src="images/blogs/blog-4/banner-1.png" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white py-5 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">When Elon Musk recently spoke about giving Twitter users the ability to self-verify so that every user
                                        can get an “authentication mark”, he was adding to the buzz regarding verification on social media
                                        platforms</p>
                                    <p className="text-black font-weight-normal">There has been a lot of talk recently about the prevalence of unverified profiles in social media, and
                                        the need for authentication of users. In fact, the Indian government has been pushing for greater
                                        accountability on the internet, especially with regard to social media.  The government believes that
                                        the filtering out of anonymous accounts can help reduce the number of bot accounts and curtail
                                        hate speech.</p>
                                    <p className="text-black font-weight-normal">As per the government’s intermediary guidelines notified in February 2021, Rule 4 (7) of the
                                        Information technology (intermediary Guidelines and Digital Media Ethics Code) Rules 2021, users
                                        who wish to verify their accounts voluntarily are expected to be provided with the appropriate
                                        mechanisms to verify their accounts and provided with a demonstrable and visible mark of
                                        verification on social media platforms. The stated intent behind the governments’ move is to
                                        differentiate anonymous accounts and bots and curtail hate speech on these platforms.</p>
                                    <p className="text-black font-weight-normal">However, none of the social media platforms are currently offer their users this facility.</p>
                                    <p className="text-black font-weight-normal">It must be stated that this is not because of the lack of technology to make it happen.  Instant, digital
                                        verification (or self-verification) can be enabled with the use of existing verification solutions. A
                                        SaaS-based verification solution that leverages the power of Artificial Intelligence and
                                        componentized government data can be integrated into almost any platform to empower users to
                                        verify themselves instantly.</p>
                                    <p className="text-black font-weight-normal">The advantages of this easy and instant verification are not limited to social media. Readers may
                                        recall that a payment platform ran afoul of the RBI due to loopholes in their KYC procedures. Any
                                        financial or other online platform can integrate verification solutions to authenticate users in
                                        real-time and with information available to the user. </p>
                                    <p className="text-black font-weight-normal">Thanks to the underlying robustness and authentication policies in-built into the solution, and
                                        authenticated interfaces with government databases, there will be no need for additional checks
                                        from the platform’s side.</p>
                                    <p className="text-black font-weight-normal">The government’s push has given the debate on verification a new impetus.  What do you think
                                        about it?</p>
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <a href="contact"
                                                className="btn btn-primary btn-blue">GET IN TOUCH</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
