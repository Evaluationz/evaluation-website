import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: About us</title>
            </Helmet>

            <div className="about-section bg-red pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/about-us/image-1.jpg" alt="shape" className="blue-image-left"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">A leap of technology from a foundation of truth</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">Who We Are</h1>
                                    <p className="text-black font-weight-bold">Built on integrity</p>
                                </div>

                                <div className="about-content">
                                    <p className="text-black font-weight-normal">It is fitting that as a company in the verification business, Evaluationz has been built and nurtured on values of trust, respect, and
                                        most importantly, integrity since its inception in 2006.</p>

                                    <p className="text-black font-weight-normal">As we have grown, these values have remained steadfast, and they have been imbued by our people to become an integral part
                                        of our culture. And this has led to Evaluationz becoming a great place to work, where innovation is encouraged and development
                                        is a given.</p>

                                    <p className="text-black font-weight-normal">The ambition to stay ahead of the curve has seen Evaluationz not just keep pace with changes in the verification landscape, but
                                        introduce innovative technology and processes that further the cause.
                                        Led by a visionary leadership team and execution excellence of every dedicated employee, Evaluationz defines a
                                        forward-thinking approach that carries everyone ahead. And earns the respect of clients, partners, other stakeholders, and
                                        society at large.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-blue pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">What We Do</h1>
                                    <p className="text-white font-weight-bold">Keeping it honest since 2006</p>
                                </div>

                                <div className="about-content">
                                    <p className="text-white font-weight-normal">It started with employee background verification services in 2006. And that foundation has stood us in good stead as we expanded and innovated to being one of the leading players in digital verification.</p>

                                    <p className="text-white font-weight-normal">Today, we offer a gamut of services that span verification types and industries. We have the capability to solve our own digital
                                        identity verification product with liveness detection and OCR capabilities.</p>

                                    <p className="text-white font-weight-normal">Evaluationz proprietary BlueG platform, developed completely in-house, leverages the power of AI, components of government
                                        identity documents and databases, and the ease of intuitive, user-friendly interfaces to offer accurate and comprehensive results
                                        in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">Core Values</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 py-2">
                            <div className="card h-100 text-white">
                                <div className="card-body bg-blue">
                                    <h3 className="text-white">Integrity</h3>
                                    <p className="text-white">
                                        Because an organization founded on the concept of
                                        verification and truth-finding has to live the principle.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100">
                                <div className="card-body bg-red">
                                    <h3 className="text-white">Commitment</h3>
                                    <p className="text-white">
                                        Because commitment to staying at the edge of
                                        verification technology encourages innovation, skills,
                                        and future thinking.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100">
                                <div className="card-body bg-red">
                                    <h3 className="text-white">Teamwork</h3>
                                    <p className="text-white">
                                        Because great technology is built and runs on
                                        collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100">
                                <div className="card-body bg-blue">
                                    <h3 className="text-white">Mutual Respect</h3>
                                    <p className="text-white">
                                        Because an atmosphere where every employee is
                                        treated with respect and feels valued creates
                                        something bigger.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Leadership Team</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/nobby.jpg" alt="Nobby"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Nobby Nazareth</h5>
                                    <h5 className="card-title">Founder & CEO</h5>
                                    <p className="card-text">Nobby started his career as a public sector banker for a
                                        decade, after which he moved into HR with leadership
                                        firms like Personnel Search Services, Ray & Berndtson,
                                        and Hewitt Associates. Prior to starting off on his own in
                                        2001, Nobby was the Chief Recruitment Officer for
                                        Microland group based in Bangalore. With an equally
                                        balanced experience in professional services and
                                        entrepreneurship, Nobby is focused on organising
                                        disruptions in the HR space, particularly by leveraging
                                        technology and the intelligence around it. Nobby
                                        founded Evaluationz in 2006 and led it to be among the
                                        most recognised and respected employee verification
                                        firms in India with the NASSCOM NSR Gold Partner
                                        ratings. Today, under his leadership, Evaluationz has a
                                        presence across business and user segments to offer
                                        verification solutions that are cutting edge in the
                                        industry.</p>
                                    <p>Nobby is an avid squash player, golfer and loves nature.</p>

                                    <Link to="/www.linkedin.com/in/nobbynazareth/">www.linkedin.com/in/nobbynazareth/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/manikandan.jpg" alt="Manikandan"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <h5 className="card-title">Manikandan Ramasamy</h5>
                                    <h5 className="card-title">Technology Advisor</h5>
                                    <p className="card-text">Manikandan is a software technologist, having created
                                        numerous products in Fintech, Healthtech, HRtech as
                                        well in supply chain for over two decades. While
                                        technology drives the professional passion, Manikandan
                                        also equally manifests passion outside work. An avid
                                        swimmer, Manikandan hopes one day to cross the
                                        English Channel. Having a great understanding of
                                        animal behavior, Manikandan takes care of numerous
                                        dogs and cats, with their food and when required
                                        medical needs, aiming one day to be able to setup an
                                        animal care centre. Manikandan relentlessly works for
                                        his spiritual upliftment being associated with
                                        MaitriBodh Parivaar, a socio-spiritual organization.</p>
                                    <p>Manikandan holds a Computer Engineering degree
                                        from Pace University, New York as well as a Masters in
                                        Business Administration degree.</p>

                                    <Link to="/www.linkedin.com/in/manikandaramasamy/">www.linkedin.com/in/manikandaramasamy/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/piyush.jpg" alt="Piyush"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Piyush N Jha</h5>
                                    <h5 className="card-title">Vice President</h5>
                                    <p className="card-text">Since 2016, Piyush has been instrumental in driving
                                        business by building ownership of goals in himself and
                                        his team.</p>
                                    <p>He is a Bachelor of Engineering with over 14 years of
                                        multichannel industry experience in Customer
                                        Relationship and Business Management. He specializes
                                        in Planning Strategy and execution which covers the
                                        entire Customer Life Cycle from Acquisition to
                                        Retention.</p>

                                    <p>
                                        His leadership style resonates in building ghost
                                        leadership and ownership within the team and that
                                        separates him in his style of managing a business.
                                        As a social cause initiative, he likes doing Training,
                                        Career Guidance for young Indian students in schools
                                        and college to make society a better place to live. In his
                                        free time, he loves cooking and playing the flute.
                                    </p>

                                    <Link to="/www.linkedin.com/in/piyushnjha/">www.linkedin.com/in/piyushnjha/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/parvathi.jpg" alt="Parvathi"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Parvathi Shankar</h5>
                                    <h5 className="card-title">HR Manager</h5>
                                    <p className="card-text">Parvathi creates a fine balance between business
                                        objectives and people asset sentiment. While driving a
                                        ‘full of life’ culture at Evaluationz, she makes sure she
                                        does not miss sight of the business goals and targets.’</p>
                                    <p>She is an accomplished, versatile, and result-oriented
                                        Human Resource professional with overall 15 years of
                                        progressive experience in the gamut of HR functions.</p>

                                    <p>
                                        Graduate degree in HRM from Bangalore University.
                                        Parvathi is also passionate about sports and cooking.
                                    </p>

                                    <Link to="/www.linkedin.com/in/parvathi-shankar-a5659b63/">www.linkedin.com/in/parvathi-shankar-a5659b63/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="mr-3" src="images/about-us/ganesh.jpg" alt="Ganesh N C"/>
                                            </div>
                                            <div className="media__body">
                                                <h5 className="mt-0">Ganesh N C</h5>
                                                <h5 className="mt-0">Manager-Finance</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <p className="card-text">While the entire organization is focused on being client and market-centric, Ganesh is constantly watching the financial
                                        health of the firm.</p>
                                    <p>Quiet and unassuming, Ganesh is involved in every part of the business, which improves the financial performance of the
                                        business and drives greater focus. He is an astute Finance Professional with over 20 years of experience in spearheading
                                        entire Finance, Accounts, Compliance & Taxation related operations.</p>

                                    <Link to="/www.linkedin.com/in/ganeshan-n-c-467992165/">www.linkedin.com/in/ganeshan-n-c-467992165/</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">Board of Directors</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/nobby.jpg" alt="Nobby"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <h5 className="card-title">Nobby Nazareth</h5>
                                    <h5 className="card-title">Founder & CEO</h5>
                                    <p className="card-text">Nobby started his career as a public sector banker for a
                                        decade, after which he moved into HR with leadership
                                        firms like Personnel Search Services, Ray & Berndtson,
                                        and Hewitt Associates. Prior to starting off on his own in
                                        2001, Nobby was the Chief Recruitment Officer for
                                        Microland group based in Bangalore. With an equally
                                        balanced experience in professional services and
                                        entrepreneurship, Nobby is focused on organising
                                        disruptions in the HR space, particularly by leveraging
                                        technology and the intelligence around it. Nobby
                                        founded Evaluationz in 2006 and led it to be among the
                                        most recognised and respected employee verification
                                        firms in India with the NASSCOM NSR Gold Partner
                                        ratings. Today, under his leadership, Evaluationz has a
                                        presence across business and user segments to offer
                                        verification solutions that are cutting edge in the
                                        industry.</p>
                                    <p>Nobby is an avid squash player, golfer and loves nature.</p>

                                    <Link to="/www.linkedin.com/in/nobbynazareth/">www.linkedin.com/in/nobbynazareth/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="mr-3" src="images/about-us/kk-mathew.jpg" alt="KK-Mathew"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <h5 className="card-title">KK Mathew</h5>
                                    <h5 className="card-title">Director</h5>
                                    <p className="card-text">Mathew heads one of India's leading advertising
                                        agencies. As the founder of Disha Communications,
                                        Mathew has over 30 years of experience in the
                                        advertising field.</p>
                                    <p>He has been the inspiration behind the growth of the
                                        agency from a humble start-up to a position of standing
                                        today.</p>

                                    <p>
                                        Mathew is also the Governing Council Member of
                                        prestigious industry bodies like the Public Relations
                                        Council of India
                                    </p>

                                    <Link to="/www.linkedin.com/in/mathew-k-k-99b35b12">www.linkedin.com/in/mathew-k-k-99b35b12</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 py-2">
                            <div className="card h-100 text-white">
                                <ul className="media__container pl-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="mr-3" src="images/about-us/maheshwar.jpg" alt="Maheshwar"/>
                                            </div>
                                            <div className="media__body">
                                                <h5 className="mt-0">Maheshwar Tiruchinapalli</h5>
                                                <h5 className="mt-0">President & CEO</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <p className="card-text">Maheshwar is the President & CEO of TVI Global. He brings 18 years of experience in translating strategy to execution: delivering
                                        top-line and bottom-line results. He has extensive experience in sales, marketing, professional services, and strategic
                                        growth initiatives.</p>
                                    <p>Mahesh has established himself as a value creator and growth catalyst throughout the US, Latin America, Europe,
                                        Middle East, and Asia Pacific. His experience ranges from start-ups to major global players, including market leaders
                                        such as NCR, SITA, Cisco, Nortel, and AT&T.</p>

                                    <p>
                                        He holds an Executive MBA from Emory University, a Master’s in Electrical Engineering from University of South Florida,
                                        and Bachelor of Electronics Engineering from Bangalore University.
                                    </p>

                                    <Link to="/www.linkedin.com/in/tmmaheshwar">www.linkedin.com/in/tmmaheshwar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
