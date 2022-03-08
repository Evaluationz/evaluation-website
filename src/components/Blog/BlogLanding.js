import React from "react";
import { Link,useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Blog = () => {
    const history = useHistory();
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
            </Helmet>
            <div className="hero-block p-tb-100">
                <div className="container">
                    <div className="col-12 px-0">
                        <h1>Blogs</h1>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4 py-2" onClick={ () => history.push(`/blog1`)}>
                            <div className="user-card h-100 bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-1/image-1.png" alt="blog"/>
                                </div>
                                <div className="card-body">

                                    <h4>Why background verification
                                        services are crucial before and
                                        after listing properties</h4>
                                    <p>The world of rental is fraught with risk. It is a contract
                                        between two (usually) complete strangers where the
                                        asset under contract is of tremendous value. With the</p>
                                </div>
                            </div>
                         </div>
                        <div className="col-md-4 py-2" onClick={ () => history.push(`/blog2`)}>
                            <div className="user-card h-100 bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-2/image-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">

                                    <h4>Hassle-free verification and fraud protection for the fintech industry</h4>
                                    <p>Recently, social media was abuzz with users discovering that there were loans taken out in their name - loans that they had no idea about. While some of them found out from  </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2" onClick={ () => history.push(`/blog3`)}>
                            <div className="user-card h-100 bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-3/image-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">

                                    <h4>Ensuring a safer drive for ride-hailing customers
                                    </h4>
                                    <p>It is a situation that any cab aggregator or ride-hailing company fears. Blaring headlines about driver misbehaviour or criminality.  Unfortunately, they are more common than anybody would imagine.
                                        Sample these</p>
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
