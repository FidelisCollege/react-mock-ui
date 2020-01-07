import * as React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col} from 'reactstrap';
import {useState} from "react";
import {IconFacebook, IconInstagram, IconLinkdin, IconPublish, IconTwitter} from "../icons";
import SocialIconWrapper from "../../components/Profile/socialIconsWrapper";
import SwitchButton from "../card/proffesionalExperienceCard";

const ProfilePublishModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <button  onClick={toggle} className="line-height-1 bg-transparent border-0 d-flex align-items-center p-0">
                <IconPublish className="text-primary"/>
                <a className="ml-2 text-capitalize f-14 text-dark">publish</a>
            </button>

            <Modal isOpen={modal} toggle={toggle} className="profile-publish-modals">
                <ModalBody className="p-0 overflow-auto bg-transparent">
                   <section className="profile-info-wrapper">
                       <div className="profile-banner"></div>
                       <div className="profile-info-content">
                           <div className=" gray-border-bottom d-flex flex-column flex-md-row align-items-center">
                               <img src="images/media-img.png" className="img-fluid profile-image"/>
                               <Row className="profile-detail-wrapper flex-grow-1 d-flex justify-content-between">
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

                   <section className="profile-info-wrapper">
                       <div className="profile-info-content">
                           <h4 className="f-14 text-dark mb-0 py-3 gray-border-bottom">Professional Experience</h4>
                           <div className="gray-border-bottom py-4">
                               <label className="admin-label text-capitalize text-dark mt-3">talentica software</label>
                               <p className="f-12 text-secondary">3 yrs 10 months</p>
                               <div className="d-flex flex-column ml-2">
                                   <div className="d-flex align-items-center">
                                       <div className="list-type-items mr-2"></div>
                                       <div className="f-14 text-dark text-capitalize">lead ux designer</div>
                                   </div>
                                   <div className="ml-3 f-12 text-secondary">April 2017 - Present , Pune Area, India</div>
                                   <p className="f-14 text-secondary m-3">Work with startups to build engaging product experiences. Working with an awesome team and Luke for Fidelis who will eventually disrput the wat students take educations.</p>
                               </div>
                           </div>
                           <div className="gray-border-bottom py-4">
                               <label className="admin-label text-capitalize text-dark">A very awesome company</label>
                               <p className="f-12 text-secondary">3 yrs 10 months</p>
                               <ul className="timeline">
                                   <li className="timeline-event">
                                       <div className="d-flex flex-column">
                                           <div className="d-flex align-items-center">
                                               <div className="f-14 text-dark text-capitalize">lead ux designer</div>
                                           </div>
                                           <div className="f-12 text-secondary">April 2017 - Present , Pune Area, India</div>
                                           <p className="f-14 text-secondary my-3">Work with startups to build engaging product experiences. Working with an awesome team and Luke for Fidelis who will eventually disrput the wat students take educations.</p>
                                       </div>
                                   </li>
                                   <li className="timeline-event">
                                       <div className="d-flex flex-column">
                                           <div className="d-flex align-items-center">
                                               <div className="f-14 text-dark text-capitalize">lead ux designer</div>
                                           </div>
                                           <div className="f-12 text-secondary">April 2017 - Present , Pune Area, India</div>
                                           <p className="f-14 text-secondary my-3">Work with startups to build engaging product experiences. Working with an awesome team and Luke for Fidelis who will eventually disrput the wat students take educations.</p>
                                       </div>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </section>
                   <section>
                        <div className="profile-info-content">
                            <h4 className="f-14 text-dark mb-0 py-3 gray-border-bottom">Awards / Accomplishments</h4>
                            <Row className="py-3">
                                <Col md="12">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid "/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-14 text-dark">This is my Award</h4>
                                            <a href="" className="f-12 text-secondary">jan 2017</a>
                                            <p className="f-12 text-light">This is my award for doing something.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid "/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-14 text-dark">This is my Award</h4>
                                            <a href="" className="f-12 text-secondary">jan 2017</a>
                                            <p className="f-12 text-light">This is my award for doing something.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid "/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-14 text-dark">This is my Award</h4>
                                            <a href="" className="f-12 text-secondary">jan 2017</a>
                                            <p className="f-12 text-light">This is my award for doing something.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid "/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-14 text-dark">This is my Award</h4>
                                            <a href="" className="f-12 text-secondary">jan 2017</a>
                                            <p className="f-12 text-light">This is my award for doing something.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid "/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-14 text-dark">This is my Award</h4>
                                            <a href="" className="f-12 text-secondary">jan 2017</a>
                                            <p className="f-12 text-light">This is my award for doing something.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                    <section>
                        <div className="profile-info-content">
                            <h4 className="f-14 text-dark mb-0 py-3 gray-border-bottom">Knowledge and Skills</h4>
                            <h4 className="f-14 text-dark mt-3">Badges (Micro-Credentials) / Other</h4>
                            <Row className="py-3 gray-border-bottom">
                                <Col md="24" className="mb-2">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid badge-image"/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-13 text-light text-capitalize">My Badge 1</h4>
                                            <a href="" className="f-12 text-secondary">Smoke Test</a>
                                            <p  className="f-12 text-secondary">Level 1 (05/12/2019)</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="24" className="mb-2">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid badge-image "/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-13 text-light text-capitalize">My Badge 1</h4>
                                            <a href="" className="f-12 text-secondary">Smoke Test</a>
                                            <p className="f-12 text-secondary">Level 1 (05/12/2019)</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="24" className="mb-2">
                                    <div className="d-flex">
                                        <div>
                                            <img src="images/media-img.png" className="img-fluid badge-image"/>
                                        </div>
                                        <div  className="ml-3">
                                            <h4 className="f-13 text-light text-capitalize">My Badge 1</h4>
                                            <a href="" className="f-12 text-secondary">Smoke Test</a>
                                            <p className="f-12 text-secondary">Level 1 (05/12/2019)</p>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                            <div>
                                <h4 className="f-14 text-dark mt-3">Aptitude</h4>
                                <Row className="py-3 gray-border-bottom">
                                    <Col md="24" className="mb-2">
                                        <div className="d-flex">
                                            <div>
                                                <img src="images/media-img.png" className="img-fluid badge-image"/>
                                            </div>
                                            <div  className="ml-3">
                                                <h4 className="f-13 text-light text-uppercase">sat</h4>
                                                <a href="" className="f-12 text-secondary">Smoke Test</a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="24" className="mb-2">
                                        <div className="d-flex">
                                            <div>
                                                <img src="images/media-img.png" className="img-fluid badge-image"/>
                                            </div>
                                            <div  className="ml-3">
                                                <h4 className="f-13 text-light text-capitalize">My Badge 1</h4>
                                                <a href="" className="f-12 text-secondary">Smoke Test</a>
                                                <a href="" className="f-12 text-secondary">Level 1 (05/12/2019)</a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="24" className="mb-2">
                                        <div className="d-flex">
                                            <div>
                                                <img src="images/media-img.png" className="img-fluid badge-image"/>
                                            </div>
                                            <div  className="ml-3">
                                                <h4 className="f-13 text-light text-capitalize">My Badge 1</h4>
                                                <a href="" className="f-12 text-secondary">Smoke Test</a>
                                                <a href="" className="f-12 text-secondary">Level 1 (05/12/2019)</a>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                    </section>


                </ModalBody>

            </Modal>
        </>
    );
}

export default ProfilePublishModal;