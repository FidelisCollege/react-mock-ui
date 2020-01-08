import * as React from 'react';
import {Col, Row} from "reactstrap";
import {IconFacebook, IconInstagram, IconLinkdin, IconTwitter} from "../icons";



const AwardsAccomplishmentModalCard = () => {

    return (
        <section className="profile-info-wrapper">
            <div className="profile-info-content">
                <h4 className="f-14 text-dark mb-0 py-3 gray-border-bottom">Awards / Accomplishments</h4>
                <Row className="py-3">
                    <Col md="12" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid "/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-14 text-dark mb-0">This is my Award</h4>
                                <a href="" className="f-12 text-secondary text-capitalize">jan 2017</a>
                                <p className="f-12 text-light">This is my award for doing something.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="12" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid "/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-14 text-dark mb-0">This is my Award</h4>
                                <a href="" className="f-12 text-secondary text-capitalize">jan 2017</a>
                                <p className="f-12 text-light">This is my award for doing something.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="12" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid "/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-14 text-dark mb-0">This is my Award</h4>
                                <a href="" className="f-12 text-secondary text-capitalize">jan 2017</a>
                                <p className="f-12 text-light">This is my award for doing something.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="12" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid "/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-14 text-dark mb-0">This is my Award</h4>
                                <a href="" className="f-12 text-secondary text-capitalize">jan 2017</a>
                                <p className="f-12 text-light">This is my award for doing something.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="12" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid "/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-14 text-dark mb-0">This is my Award</h4>
                                <a href="" className="f-12 text-secondary text-capitalize">jan 2017</a>
                                <p className="f-12 text-light">This is my award for doing something.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default AwardsAccomplishmentModalCard;
