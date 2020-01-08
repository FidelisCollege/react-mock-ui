import * as React from 'react';
import {Col, Row} from "reactstrap";
import {IconFacebook, IconInstagram, IconLinkdin, IconTwitter} from "../icons";



const KnowledgeSkillsModalCard = () => {

    return (
        <section className="profile-info-wrapper">
            <div className="profile-info-content">
                <h4 className="f-14 text-dark mb-0 py-3 gray-border-bottom">Knowledge and Skills</h4>
                <h4 className="f-14 text-dark mt-3">Badges (Micro-Credentials) / Other</h4>
                <Row className="py-3 gray-border-bottom">
                    <Col md="24" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid badge-image"/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-13 text-light text-capitalize mb-0">My Badge 1</h4>
                                <a href="" className="f-12 text-secondary">Smoke Test</a>
                                <p  className="f-12 text-secondary mb-0">Level 1 (05/12/2019)</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="24" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid badge-image "/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-13 text-light text-capitalize mb-0">My Badge 1</h4>
                                <a href="" className="f-12 text-secondary">Smoke Test</a>
                                <p className="f-12 text-secondary">Level 1 (05/12/2019)</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="24" className="mb-3">
                        <div className="d-flex">
                            <div>
                                <img src="images/media-img.png" className="img-fluid badge-image"/>
                            </div>
                            <div  className="ml-3">
                                <h4 className="f-13 text-light text-capitalize mb-0">My Badge 1</h4>
                                <a href="" className="f-12 text-secondary">Smoke Test</a>
                                <p className="f-12 text-secondary mb-0">Level 1 (05/12/2019)</p>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div>
                    <h4 className="f-14 text-dark mt-3">Aptitude</h4>
                    <Row className="py-3 gray-border-bottom">
                        <Col md="24" className="mb-3">
                            <div className="d-flex">
                                <div>
                                    <img src="images/media-img.png" className="img-fluid badge-image"/>
                                </div>
                                <div  className="ml-3">
                                    <h4 className="f-13 text-light text-uppercase mb-0">sat</h4>
                                    <a href="" className="f-12 text-secondary">Smoke Test</a>
                                </div>
                            </div>
                        </Col>
                        <Col md="24" className="mb-3">
                            <div className="d-flex">
                                <div>
                                    <img src="images/media-img.png" className="img-fluid badge-image"/>
                                </div>
                                <div  className="ml-3">
                                    <h4 className="f-13 text-light text-capitalize mb-0">My Badge 1</h4>
                                    <a href="" className="f-12 text-secondary">Smoke Test</a>
                                    <a href="" className="f-12 text-secondary mb-0">Level 1 (05/12/2019)</a>
                                </div>
                            </div>
                        </Col>
                        <Col md="24" className="mb-3">
                            <div className="d-flex">
                                <div>
                                    <img src="images/media-img.png" className="img-fluid badge-image"/>
                                </div>
                                <div  className="ml-3">
                                    <h4 className="f-13 text-light text-capitalize mb-0">My Badge 1</h4>
                                    <a href="" className="f-12 text-secondary">Smoke Test</a>
                                    <a href="" className="f-12 text-secondary mb-0">Level 1 (05/12/2019)</a>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        </section>
    );
}

export default KnowledgeSkillsModalCard;
