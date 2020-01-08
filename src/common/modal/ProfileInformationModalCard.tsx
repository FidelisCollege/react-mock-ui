import * as React from 'react';
import {Col, Row} from "reactstrap";
import {IconFacebook, IconInstagram, IconLinkdin, IconTwitter} from "../icons";



const ProfileInformationModalCard = () => {

    return (
        <section className="profile-info-wrapper">
            <div className="profile-banner"></div>
            <div className="profile-info-content">
                <div className=" gray-border-bottom d-flex flex-column flex-md-row align-items-center">
                    <img src="images/media-img.png" className="img-fluid profile-image"/>
                    <Row className="profile-detail-wrapper flex-grow-1 d-flex justify-content-between line-height-1">
                        <Col md="12" className="">
                            <div className="person-info text-capitalize">
                                <h4 className="text-dark f-20">Natalie Anderson</h4>
                                <div className="text-light f-14">natalie.anderson@hotmail.com</div>
                            </div>
                        </Col>
                        <Col md="12" className="">
                            <div className="d-flex w-100 mt-3 justify-content-center justify-content-md-end">
                                <div className="social-icon-bg mr-4">
                                    <IconFacebook/>
                                </div>
                                <div className="social-icon-bg mr-4">
                                    <IconLinkdin/>
                                </div>
                                <div className="social-icon-bg mr-4">
                                    <IconTwitter/>
                                </div>
                                <div className="social-icon-bg">
                                    <IconInstagram/>
                                </div>
                            </div>
                        </Col>
                        <Col md="12" className="d-flex align-items-center mt-4 justify-content-center justify-content-md-start">
                            <a href="#" className="text-capitalize  text-primary f-14">request mentor</a>
                            <div className="px-2">|</div>
                            <a href="#" className="text-capitalize  text-primary f-14">message</a>
                        </Col>

                    </Row>
                </div>
                <div className="p-4 gray-border-bottom">
                    <Row className="no-gutters">
                        <Col md="3"><label className="text-secondary f-14 text-capitalize">Primary</label></Col>
                        <Col md="11"><a href="" className="text-light">natalie.anderson@fidelis-inc.com</a></Col>
                        <Col md="5"> <a href="" className=" f-14 text-light">+1 234 567890(L)</a></Col>
                        <Col md="5"> <a href="" className=" f-14 text-light">+1 234 567890(L)</a></Col>
                    </Row>
                    <Row className="no-gutters">
                        <Col md="3"><label className="text-secondary f-14 text-capitalize">secondary</label></Col>
                        <Col md="11"><a href="" className="text-light">natalie.anderson@fidelis-inc.com</a></Col>
                        <Col md="5"> <a href="" className=" f-14 text-light">+1 234 567890(L)</a></Col>
                    </Row>
                </div>
                <div className="py-4 gray-border-bottom">
                    <h4 className="text-dark f-14">Introduction</h4>
                    <p className="introduction-content">You think water moves fast? You should see ice. It moves like it has a mind.
                        Like it knows it killed the world once andgot a taste for murder. After the avalanche,
                        it took us aweek to climb out. Now, I don’t know exactly when we turned on each other,
                        but I know that seven of us survived the slide… and only five made it out. Now we took an oath,
                        that I’m breaking now. We said we’d say it was the snow
                        that killed the other two, but it wasn’t. Nature is lethal but it doesn’t hold a candle to man.</p>
                </div>
            </div>
        </section>
    );
}

export default ProfileInformationModalCard;
