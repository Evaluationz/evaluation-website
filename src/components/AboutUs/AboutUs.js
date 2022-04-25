import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: About us</title>
                <meta name="description" content="Learn about values, mission and leadership team and the Board of Directors leading Evaluationz" />
                <meta name="keywords" content="Nobby Nazareth, Piyush Jha, Manikandan Ramasamy, Ganesh N C, Parvathi Shankar, KK Mathew, Maheshwar Tiruchinapalli" />
                <meta property="og:description" content="Learn about values, mission and leadership team and the Board of Directors leading Evaluationz" />
                <meta property="og:url" content="https://evaluationz.com/about-us" />
                <meta property="og:image" content="https://evaluationz.com/images/favicon.jpg" />
                <meta property="og:image:secure_url" content="https://evaluationz.com/images/favicon.jpg" />
                <meta name="twitter:image" content="https://evaluationz.com/images/favicon.jpg" />
            </Helmet>

            <div className="about-section bg-red py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/about-us/image-1.jpg" alt="shape" className="blue-image-left shadow-2xl"/>
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

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
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

            <div className="about-section bg-blue py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="text-white font-weight-bolder">What We Do</h1>
                                    <p className="text-white font-weight-bold">Keeping it honest since 2006</p>
                                </div>

                                <div className="about-content">
                                    <p className="text-white font-weight-normal">It started with employee background verification services in 2006. And that foundation has stood us in good stead as we expanded and innovated to being one of the leading players in digital verification.</p>

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

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
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
                                    <p className="text-white mb-0">
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
                                    <p className="text-white mb-0">
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
                                    <p className="text-white mb-0">
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
                                    <p className="text-white mb-0">
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

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Leadership Team</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
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
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Nobby started his career as a public sector banker for a\n" +
                                        "                                        decade, after which he moved into HR with leadership\n" +
                                        "                                        firms like Personnel Search Services, Ray & Berndtson,\n" +
                                        "                                        and Hewitt Associates. Prior to starting off on his own in\n" +
                                        "                                        2001, Nobby was the Chief Recruitment Officer for\n" +
                                        "                                        Microland group based in Bangalore. With an equally\n" +
                                        "                                        balanced experience in professional services and\n" +
                                        "                                        entrepreneurship, Nobby is focused on organising\n" +
                                        "                                        disruptions in the HR space, particularly by leveraging\n" +
                                        "                                        technology and the intelligence around it. Nobby\n" +
                                        "                                        founded Evaluationz in 2006 and led it to be among the\n" +
                                        "                                        most recognised and respected employee verification\n" +
                                        "                                        firms in India with the NASSCOM NSR Gold Partner\n" +
                                        "                                        ratings. Today, under his leadership, Evaluationz has a\n" +
                                        "                                        presence across business and user segments to offer\n" +
                                        "                                        verification solutions that are cutting edge in the\n" +
                                        "                                        industry." +

                                        "                                    Nobby is an avid squash player, golfer and loves nature."}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/nobbynazareth/"}} target="_blank">www.linkedin.com/in/nobbynazareth/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/Manikandan.png" alt="Manikandan"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <h5 className="card-title">Manikandan Ramasamy</h5>
                                    <h5 className="card-title">Technology Advisor</h5>
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Manikandan is a software technologist, having created\n" +
                                        "                                        numerous products in Fintech, Healthtech, HRtech as\n" +
                                        "                                        well in supply chain for over two decades. While\n" +
                                        "                                        technology drives the professional passion, Manikandan\n" +
                                        "                                        also equally manifests passion outside work. An avid\n" +
                                        "                                        swimmer, Manikandan hopes one day to cross the\n" +
                                        "                                        English Channel. Having a great understanding of\n" +
                                        "                                        animal behavior, Manikandan takes care of numerous\n" +
                                        "                                        dogs and cats, with their food and when required\n" +
                                        "                                        medical needs, aiming one day to be able to setup an\n" +
                                        "                                        animal care centre. Manikandan relentlessly works for\n" +
                                        "                                        his spiritual upliftment being associated with\n" +
                                        "                                        MaitriBodh Parivaar, a socio-spiritual organization.Manikandan holds a Computer Engineering degree\n" +
                                        "                                        from Pace University, New York as well as a Masters in\n" +
                                        "                                        Business Administration degree."}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/manikandaramasamy/"}} target="_blank">www.linkedin.com/in/manikandaramasamy/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
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
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Since 2016, Piyush has been instrumental in driving\n" +
                                        "                                        business by building ownership of goals in himself and\n" +
                                        "                                        his team. He is a Bachelor of Engineering with over 14 years of\n" +
                                        "                                        multichannel industry experience in Customer\n" +
                                        "                                        Relationship and Business Management. He specializes\n" +
                                        "                                        in Planning Strategy and execution which covers the\n" +
                                        "                                        entire Customer Life Cycle from Acquisition to\n" +
                                        "                                        Retention. His leadership style resonates in building ghost\n" +
                                        "                                        leadership and ownership within the team and that\n" +
                                        "                                        separates him in his style of managing a business.\n" +
                                        "                                        As a social cause initiative, he likes doing Training,\n" +
                                        "                                        Career Guidance for young Indian students in schools\n" +
                                        "                                        and college to make society a better place to live. In his\n" +
                                        "                                        free time, he loves cooking and playing the flute."}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/piyushnjha/"}} target="_blank">www.linkedin.com/in/piyushnjha/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
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
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Parvathi creates a fine balance between business\n" +
                                        "                                        objectives and people asset sentiment. While driving a\n" +
                                        "                                        'full of life' culture at Evaluationz, she makes sure she\n" +
                                        "                                        does not miss sight of the business goals and targets.' She is an accomplished, versatile, and result-oriented\n" +
                                        "                                        Human Resource professional with overall 15 years of\n" +
                                        "                                        progressive experience in the gamut of HR functions. Graduate degree in HRM from Bangalore University.\n" +
                                        "                                        Parvathi is also passionate about sports and cooking."}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/parvathi-shankar-a5659b63/"}} target="_blank">www.linkedin.com/in/parvathi-shankar-a5659b63/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
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
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"While the entire organization is focused on being client and market-centric, Ganesh is constantly watching the financial\n" +
                                        "                                        health of the firm.\n" +
                                        "                                        Quiet and unassuming, Ganesh is involved in every part of the business, which improves the financial performance of the\n" +
                                        "                                        business and drives greater focus. He is an astute Finance Professional with over 20 years of experience in spearheading\n" +
                                        "                                        entire Finance, Accounts, Compliance & Taxation related operations."}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/ganeshan-n-c-467992165/"}} target="_blank">www.linkedin.com/in/ganeshan-n-c-467992165/</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">Board of Directors</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
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
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Nobby started his career as a public sector banker for a\n" +
                                        "                                        decade, after which he moved into HR with leadership\n" +
                                        "                                        firms like Personnel Search Services, Ray & Berndtson,\n" +
                                        "                                        and Hewitt Associates. Prior to starting off on his own in\n" +
                                        "                                        2001, Nobby was the Chief Recruitment Officer for\n" +
                                        "                                        Microland group based in Bangalore. With an equally\n" +
                                        "                                        balanced experience in professional services and\n" +
                                        "                                        entrepreneurship, Nobby is focused on organising\n" +
                                        "                                        disruptions in the HR space, particularly by leveraging\n" +
                                        "                                        technology and the intelligence around it. Nobby\n" +
                                        "                                        founded Evaluationz in 2006 and led it to be among the\n" +
                                        "                                        most recognised and respected employee verification\n" +
                                        "                                        firms in India with the NASSCOM NSR Gold Partner\n" +
                                        "                                        ratings. Today, under his leadership, Evaluationz has a\n" +
                                        "                                        presence across business and user segments to offer\n" +
                                        "                                        verification solutions that are cutting edge in the\n" +
                                        "                                        industry.\n" +
                                        "                                        Nobby is an avid squash player, golfer and loves nature."}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/nobbynazareth/"}} target="_blank">www.linkedin.com/in/nobbynazareth/</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
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
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Mathew heads one of India's leading advertising\n" +
                                        "                                        agencies. As the founder of Disha Communications,\n" +
                                        "                                        Mathew has over 30 years of experience in the\n" +
                                        "                                        advertising field.\n" +
                                        "                                        He has been the inspiration behind the growth of the\n" +
                                        "                                        agency from a humble start-up to a position of standing\n" +
                                        "                                        today.\n" +
                                        "                                        Mathew is also the Governing Council Member of\n" +
                                        "                                        prestigious industry bodies like the Public Relations\n" +
                                        "                                        Council of India"}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/mathew-k-k-99b35b12/"}} target="_blank">www.linkedin.com/in/mathew-k-k-99b35b12</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
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
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Maheshwar is the President & CEO of TVI Global. He brings 18 years of experience in translating strategy to execution: delivering\n" +
                                        "                                        top-line and bottom-line results. He has extensive experience in sales, marketing, professional services, and strategic\n" +
                                        "                                        growth initiatives.\n" +
                                        "                                        Maheshwar has established himself as a value creator and growth catalyst throughout the US, Latin America, Europe,\n" +
                                        "                                        Middle East, and Asia Pacific. His experience ranges from start-ups to major global players, including market leaders\n" +
                                        "                                        such as NCR, SITA, Cisco, Nortel, and AT&T.\n" +
                                        "                                        \n" +
                                        "                                        He holds an Executive MBA from Emory University, a Master’s in Electrical Engineering from University of South Florida,\n" +
                                        "                                        and Bachelor of Electronics Engineering from Bangalore University."}
                                    </ReadMoreAndLess>

                                    <Link to={{pathname: "https://www.linkedin.com/in/tmmaheshwar/"}} target="_blank">www.linkedin.com/in/tmmaheshwar</Link>
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
