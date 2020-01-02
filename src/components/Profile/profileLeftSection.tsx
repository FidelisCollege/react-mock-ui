import * as React from 'react';
import {Card, Col, Row} from "reactstrap";
import {IconEye, IconFacebook, IconInstagram, IconLinkdin, IconPublish, IconSettings, IconTwitter} from "../../common";



const ProfileLeftSection = () => {

    return (
        <div className="flex-grow-1 profile-left-section d-flex">
            <Card className="border-0 flex-grow-1 card-shadow px-3 overflow-auto">
                <div>
                    <div className="d-flex py-4 align-items-center flex-column flex-md-row text-center text-md-left">
                        <img className="mr-2 person-img" src="https://d14yfdwx2sby9t.cloudfront.net/upload/image/user/8bd714d1-3bc0-4723-8e1e-f5d7d860a3aa.jpg" alt=""/>
                        <div className="person-info text-capitalize">
                            <h4 className="text-dark f-20">Natalie Anderson</h4>
                            <div className="text-light f-14">natalie.anderson@hotmail.com</div>
                        </div>
                    </div>
                    <div className="section-footer">
                        <div className="d-flex align-items-center">
                            <IconPublish className="text-primary"/>
                            <a className="ml-2 text-capitalize f-14 text-dark">publish</a>
                        </div>
                        <div className="d-flex align-items-center mx-md-4">
                            <IconEye className="text-primary"/>
                            <a className="ml-2 text-capitalize f-14 text-dark">view</a>
                        </div>
                        <div className="d-flex align-items-center">
                            <IconSettings className="text-primary"/>
                            <a className="ml-2 text-capitalize f-14 text-dark">settings</a>
                        </div>
                    </div>
                    <div className="section-footer flex-column px-0 f-14">
                        <div className="d-flex justify-content-between w-100">
                            <label>Primary</label>
                            <a href="" className="text-light">natalie.anderson@fidelis-inc.com</a>
                        </div>
                        <div  className="d-flex justify-content-between w-100">
                            <label>Secondary</label>
                            <a href="" className="text-light">natalie.anderson@fidelis-inc.com</a>
                        </div>
                    </div>
                    <div className="section-footer px-0 flex-column">
                        <Row className="">
                            <Col md="12" className="mb-2">
                                <a href="" className=" f-14 text-light mr-4">+1 234 567890(L)</a>
                            </Col>
                            <Col md="12" className="mb-2">
                                <a href="" className=" f-14 text-light mr-4">+1 234 567890(W)</a>
                            </Col>
                            <Col md="12" className="mb-2">
                                <a href="" className=" f-14 text-light">+1 234 567890(M)</a>
                            </Col>
                        </Row>
                        <div className="d-flex w-100 mt-3">
                            <div className="social-icon-bg mr-4">
                                <IconFacebook/>
                            </div>
                            <div className="social-icon-bg mr-4">
                                <IconLinkdin/>
                            </div>
                            <div className="social-icon-bg mr-4">
                                <IconTwitter/>
                            </div>
                            <div className="social-icon-bg mr-4">
                                <IconInstagram/>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <h4 className="text-dark f-14">Introduction</h4>
                        <p className="introduction-content">You think water moves fast? You should see ice. It moves like it has a mind.
                            Like it knows it killed the world once andgot a taste for murder. After the avalanche,
                            it took us aweek to climb out. Now, I don’t know exactly when we turned on each other,
                            but I know that seven of us survived the slide… and only five made it out. Now we took an oath,
                            that I’m breaking now. We said we’d say it was the snow
                            that killed the other two, but it wasn’t. Nature is lethal but it doesn’t hold a candle to man.</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ProfileLeftSection;
