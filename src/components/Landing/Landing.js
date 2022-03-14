import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import axios from "axios";

const statistics = { ClientCount: '', TotalCase: '', RedCase: '' }
const Landing = () => {
    const [statisticState, updateStatisticState] = useState(statistics);

    useEffect(() => {
        checkStatistics()
    }, [])

    async function checkStatistics() {
        let clientDetails = await axios.get("https://verify.evaluationz.com:304/api/KompassWebsiteData");
        let res = clientDetails.data
        updateStatisticState(() => ({ ...statisticState, ClientCount: res.data.ClientCount, TotalCase: res.data.TotalCase, RedCase: res.data.RedCase }))
    }

    const { ClientCount, TotalCase, RedCase } = statisticState

    return (
        <section>
            <Helmet>
                <title>Evaluationz: Employee, Vendor and User Verification</title>
                <meta name="description" content="Evaluationz is a Nascom empanalled gold partner in the space of employee, vendor and user verification which is digitized and real time" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification" />
            </Helmet>

            <div className="hero-block py-5 mt-5">
                <div className="container pt-3">
                    <div className="col-12 px-0 pb-md-5">
                        <h1>If you need it verified, we've got it covered.</h1>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <div className="user-card">
                                <div className="user-card-body">
                                    <img src="images/landing/image-1.jpg" className="img-fluid shadow-2xl" />
                                    <h3 className="mb-0">Employees<i className="mdi mdi-chevron-right c-blue mt-1"></i></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-md-3 float-md-right">
                            <div className="user-card">
                                <div className="user-card-body">
                                    <img src="images/landing/image-2.jpg" className="img-fluid shadow-2xl" />
                                    <h3 className="mb-0">User<i className="mdi mdi-chevron-right c-red mt-1"></i></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-section p-b-100 position-relative">
                <div className="container-fluid pt-100 pb-30 bg-black">
                    <div className="banner-carousel default-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer pt-0">
                            <div className="owl-stage">
                                <div className="owl-item">
                                    <div className="item my-3">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center blue-image-left">
                                                        <img src="images/landing/carousel/banner-image-1.jpg" alt="shape" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <h2 className="c-red">Leaders in digital verification</h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <p className="text-white">Bespoke solutions powered by AI and integration</p>
                                                            <Link to="/about-us" className="btn btn-primary btn-red">Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item my-3">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center red-image-left">
                                                        <img src="images/landing/carousel/banner-image-2.jpg" alt="shape" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <h2 className="c-red">The next evolution in verification.</h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <p className="text-white">Digital. Instant. And universal.</p>
                                                            <Link to="/services" className="btn btn-primary btn-blue">Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item my-3">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center blue-image-left">
                                                        <img src="images/landing/carousel/banner-image-3.jpg" alt="shape" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <h2 className="c-red">Verification made digital. And simple.</h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <p className="text-white">Verification made digital. And simple.</p>
                                                            <Link to="/technology" className="btn btn-primary btn-red">Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item my-3">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center red-image-left">
                                                        <img src="images/landing/carousel/banner-image-4.jpg" alt="shape" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <h2 className="c-red">Our Verification, your system.</h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <p className="text-white">Seamless Integration with powerful API</p>
                                                            <Link to="/technology" className="btn btn-primary btn-blue">Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item my-3">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-image text-center blue-image-left">
                                                        <img src="images/landing/carousel/banner-image-5.jpg" alt="shape" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pb-30">
                                                    <div className="about-section-item about-item-details">
                                                        <div className="section-title section-title-left text-start">
                                                            <h2 className="c-red">Extending verification from B2B to B2B2C</h2>
                                                        </div>
                                                        <div className="about-content">
                                                            <p className="text-white">Read our latest blog</p>
                                                            <Link to="/blog" className="btn btn-primary btn-red">Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-blue pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Verified is vital</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Trust, but verify is an old proverb that has taken new
                                        meaning in this digital age.</p>

                                    <p className="text-white">
                                        The importance of verification cannot be overemphasised.
                                        The need for verification has expanded from employee
                                        background verification to almost any aspect of current
                                        living. And Evaluationz is one of the few companies that
                                        have been able to keep pace with the ever-expanding
                                        needs. And what’s more. We have been able to harness the
                                        power of AI to create the proprietary Blue G tech platform
                                        that makes real-time digital verification a possibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center red-image-right">
                                <img src="images/landing/image-3.jpg" alt="shape" className="shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center blue-image-left">
                                <img src="images/landing/image-4.jpg" className="shadow-2xl" alt="shape" />
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Who do we verify for?</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Trust, but verify is an old proverb that has taken new
                                        meaning in this digital age.</p>

                                    <p className="text-white">
                                        Evaluationz offers digital verification services for use
                                        cases that include corporates, BFSI, fintech, e-commerce,
                                        HR and staffing, IT and SaaS, healthcare and individual
                                        users or customers. Evaluation offers instant or
                                        near-instant verification solutions based on the
                                        proprietary BlueG platform.
                                    </p>
                                    <Link to="/industries" className="btn btn-primary btn-blue">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="c-red">What do we verify?</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-black">
                                        Evaluationz uses artificial intelligence to automate the
                                        verification process while staying compliant to statutory
                                        norms of data privacy that govern the verification
                                        process. Importantly, we have the capability to solution
                                        our current identity verification product with liveness
                                        detection and OCR capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center red-image-right">
                                <img src="images/landing/image-5.jpg" className="shadow-2xl" alt="shape" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-1.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-2.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-3.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Employment Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-4.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-5.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Criminal Record Check
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center my-md-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-6.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Social Media Check
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-7.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Reference Check
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-8.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Drug Test
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-9.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Digital Passport Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/landing/icons/icon-10.png" alt="shape" width="80" />
                            <span className="font-weight-bold ml-2">
                                Credit Check
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center my-md-4">
                        <div className="col-12">
                            <Link to="/services" className="btn btn-primary btn-blue">Explore</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-blue pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center red-image-left">
                                <img src="images/landing/image-6.jpg" className="shadow-2xl" alt="shape" />
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">How do we verify?</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white font-weight-normal">Evaluationz’ proprietary <b>BlueG platform</b>, developed
                                        completely in-house. leverages the power of AI,
                                        components of government identity documents and
                                        databases, and the ease of intuitive, user-friendly
                                        interfaces to offer accurate and comprehensive results
                                        in real-time.</p>

                                    <Link to="/technology" className="btn btn-primary btn-red">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section about-section-bg bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <h1 className="c-red font-weight-bolder">Why Evaluationz</h1>
                    </div>

                    <div className="row statistic-block">
                        <div className="grid d-md-flex">
                            <div className="col-md-4">
                                <div className="circle">
                                    <div className="circle__inner">
                                        <h1 className="c-red">{ClientCount}+</h1>
                                        <p className="c-blue">COMPANIES</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="circle">
                                    <div className="circle__inner">
                                        <h1 className="c-red">{TotalCase}+</h1>
                                        <p className="c-blue">VERIFICATIONS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="circle">
                                    <div className="circle__inner">
                                        <h1 className="c-red">{RedCase}+</h1>
                                        <p className="c-blue">RED FLAGS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <p className="text-white">
                            Building on sound expertise gathered since our inception in <b>2006</b>, Evaluationz India has evolved to become the leader
                            in digital verification. Our services span a breadth of industries and a depth of verification categories.
                        </p>

                        <div className="col-12">
                            <Link to="/about-us" className="btn btn-primary btn-blue">Explore</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-section position-relative">
                <div className="container-fluid py-5 bg-red">
                    <div className="row">
                        <h1 className="text-white font-weight-bolder pl-80">Client list</h1>
                    </div>
                    <div className="client-carousel default-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer pt-0">
                            <div className="owl-stage">
                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/amazon.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/conduent.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/icici.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/hdfclife.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/infosys.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/logo-without_punch_line.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/outsource.jpg" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/quess.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/sbilife.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/tatamotors.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item bg-white p-2">
                                        <div className="container">
                                            <img src="images/landing/clients/xoriant.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="about-section bg-blue pt-5 pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <h1 className="text-white font-weight-bolder">Success Stories</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="card-group">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body m-2 rounded bg-white shadow-sm">
                                    <div className="col-12">
                                        <p className="text-black">
                                            is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic typesetting,
                                            remaining essentially unchanged. It was popularised in
                                            the 1960s with the release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently with desktop
                                            publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </p>
                                        <Link to="/case-studies" className="btn btn-primary btn-blue">Explore</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 bg-transparent ml-md-3">
                                <div className="row">
                                    <div className="col-sm-6 py-2">
                                        <div className="card card-body h-100 bg-white shadow-sm">
                                            <p className="text-black mb-0">
                                                is simply dummy text
                                                of the printing and
                                                typesetting industry.
                                                Lorem Ipsum has been
                                                the industry's standard
                                                dummy text ever since
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 py-2">
                                        <div className="card h-100 bg-white shadow-sm">
                                            <div className="card-body">
                                                <p className="text-black mb-0">
                                                    is simply dummy text
                                                    of the printing and
                                                    typesetting industry.
                                                    Lorem Ipsum has been
                                                    the industry's standard
                                                    dummy text ever since
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 py-2">
                                        <div className="card card-body h-100 bg-white shadow-sm">
                                            <p className="text-black mb-0">
                                                is simply dummy text
                                                of the printing and
                                                typesetting industry.
                                                Lorem Ipsum has been
                                                the industry's standard
                                                dummy text ever since
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 py-2">
                                        <div className="card h-100 bg-white shadow-sm">
                                            <div className="card-body">
                                                <p className="text-black mb-0">
                                                    is simply dummy text
                                                    of the printing and
                                                    typesetting industry.
                                                    Lorem Ipsum has been
                                                    the industry's standard
                                                    dummy text ever since
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="testimonial-section position-relative">
                <div className="container-fluid pt-5 pb-3 bg-white">
                    <div className="row">
                        <h1 className="c-red font-weight-bolder pl-80">Blog</h1>
                    </div>
                    <div className="blog-carousel default-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer pt-0">
                            <div className="owl-stage">
                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl" >
                                                        <img className="card-img-top blog-card-padding-4" src="images/blogs/blog-1/banner-1.png"  alt="Blog" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Why background verification
                                                                services are crucial before and
                                                                after listing properties</h4>
                                                            <Link to="/blog1" className="btn btn-primary btn-red">Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl" >
                                                        <img className="card-img-top blog-card-padding-4" src="images/blogs/blog-2/banner-1.jpg" alt="Blog" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Hassle-free verification and fraud protection for the fintech industry</h4>
                                                            <Link to="/blog2" className="btn btn-primary btn-red">Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog shadow-2xl">
                                                    <div className="card" >
                                                        <img className="card-img-top blog-card-padding-4" src="images/blogs/blog-3/banner-1.jpg" alt="Blog" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Ensuring a safer drive for ride-hailing customers</h4>
                                                            <Link to="/blog3" className="btn btn-primary btn-red">Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-red pt-5 pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="text-white">Start verifying now.</h2>
                                </div>
                                <Link to="/contact" className="btn btn-primary btn-blue">Get in touch</Link>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center blue-image-right">
                                <img src="images/landing/image-7.jpg" className="shadow-2xl" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
