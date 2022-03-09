import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const BlogDetails = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
            </Helmet>

            <div className="about-section bg-white pt-100 mt-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-black font-weight-bolder">Hassle-free verification and fraud protection for the fintech industry</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section col-md-10 p-0 m-0 red-image-right red-image-bottom">
                <img src="images/blogs/blog-2/image-1.jpg" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white pt-100 pb-4 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">Recently, social media was abuzz with users discovering that there were loans taken out in their name - loans that they had no idea about. While some of them found out from investigating why their CIBIL scores were dropping, others realised it when collection agents started calling them. The cause of this particular episode of identity theft – the perpetrators used PAN numbers of the affected parties – involved a loan app. (Source: https://wap.business-standard.com/article-amp/companies/loan-fraud-hits-indiabulls-fintech-arm-fraudsters-use-pan-numbers-122021600373_1.html )</p>
                                    <p className="text-black font-weight-normal">But this was just one of many stories involving financial fraud by users of fintech products. And it reiterated the need to shine a spotlight on more reliable and indisputable verification in the fintech industry. </p>

                                    <p className="text-black font-weight-bold mb-0">Booming fintech industry</p>
                                    <p className="text-black font-weight-normal">The term fintech refers to innovative digital technology solutions that aim to optimize financial services and banking. The fintech industry has grown exponentially in the last few years. “India’s overall fintech market opportunity is estimated to be $1.3 Tn by 2025, growing at a CAGR of 31% during 2021-2025. Of this, lending tech is likely to account for 47% ($616 Bn), followed by insurance tech at 26% ($339 Bn) and digital payments at 16% ($208 Bn).” (Source: https://inc42.com/reports/state-of-indian-fintech-infocus-bnpl-q1-2022-report/ )</p>
                                    <p className="text-black font-weight-bold mb-0">Fraud in the fintech industry</p>
                                    <p className="text-black font-weight-normal">Over the last few years, a push towards financial inclusion and a surge in digital access to financial products and services has seen a significant increase in the number of people in the formal financial space.</p>
                                    
                                    <p className="text-black font-weight-normal">The rise in numbers has also been accompanied by an increase in crimes. </p>
                                    <p className="text-black font-weight-normal">A study by TransUnion, an American consumer credit reporting agency, found the percentage of suspected fraudulent digital transaction attempts against businesses originating from India increased 28.32% in 2021 over 2019. </p>
                                    <p className="text-black font-weight-normal">Data from multiple sources point to the same conclusions of an increase in fraud. Making the protection from frauds a prime concern for the fintech industry.</p>
                                    <p className="text-black font-weight-bold mb-0">The prize (and price) of speed</p>
                                    <p className="text-black font-weight-normal">Fintech players have turned the banking and lending industry on its head. From a seller-focussed, procedure-heavy and time-consuming affair, availing of most financial products or services have now become near-instant, convenient and built with the customer experience in mind.</p>
                                    <p className="text-black font-weight-normal">A large majority of fintech services, mainly in the app/platform space, work on instant or near-instant on-boarding. The benefit of instant approval comes with the burden of instant verification as well.</p>
                                    <p className="text-black font-weight-normal">The verification of information submitted by users to the fintech platform forms the bulwark against the fake profiles and fraudsters. The TransUnion study revealed that financial services had the most significant increase in fraud attempt rate at 88.50%, with true identity theft being the leading factor. </p>
                                   
                                    <p className="text-black font-weight-bold mb-0">Fraud protection for fintech platforms </p>
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-12 pt-5 pb-30">
                                                <div className="text-center">
                                                    <img src="images/blogs/blog-2/image-2.jpg" alt="shape" className="blog-details-image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-black font-weight-normal">A robust and accurate verification system in place is vital to ensure that user information authenticated before any transactions can be undertaken. User information in this space covers identity, address, employment, creditworthiness, and criminal records.</p>
                                    <p className="text-black font-weight-normal">The verification checks that need to be carried out and can go a long way in safeguarding fintech platforms are:</p>
                                    <p className="text-black font-weight-bold mb-0">Digital Identity Verification</p>
                                    <p className="text-black font-weight-normal">Identity theft is one of the biggest issues in fintech-related fraud. And Digital Identity Verification is the start point of the checks for the verification process. Advanced verification service companies offer the option of API integration with the platform’s backend platform to ensure that the ID documents can be authenticated in real time, digitally. </p>
                                    <p className="text-black font-weight-bold mb-0">Digital Address Verification</p>
                                    <p className="text-black font-weight-normal">The authentication of addresses can be carried out by the verification platform as well. The right verification solution can utilise government documents and GPS-enabled features for verification of the address. </p>
                                    <p className="text-black font-weight-bold mb-0">Credit Check</p>
                                    <p className="text-black font-weight-normal">A negative credit history can be a red flag that points to unreliable financial behavior. This check becomes even more significant for fintech platforms that offer loans or other advances to consumers. The credit check can be regularly refreshed with automatic triggers if the company opts for API integration. </p>
                                    <p className="text-black font-weight-bold mb-0">Criminal Record Check</p>
                                    <p className="text-black font-weight-normal">A person with a criminal record or with cases in curt may be a risk for the company.  Comprehensive verification of the criminal data of a person entails scrutinizing using court records and conducting International Database Checks If necessary. </p>
                                    <p className="text-black font-weight-bold mb-0">Easy on-boarding for customers. Safe users for platforms. </p>
                                    <p className="text-black font-weight-normal">Choosing the right verification solution for a fintech platform makes it a win-win for both customer and company. The customer gets instant and hassle-free user KYC while the company enrolls a user who they can trust. A solution that utilizes Artificial Intelligence (AI) and the componentized government data can offer accurate, authenticated results in minutes. With trust that you can take to the bank. </p>
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