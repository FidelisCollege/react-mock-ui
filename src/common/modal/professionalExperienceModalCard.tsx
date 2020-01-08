import * as React from 'react';
import {Col, Row} from "reactstrap";
import {IconFacebook, IconInstagram, IconLinkdin, IconTwitter} from "../icons";



const ProffessionalExperienceModalCard = () => {

    return (
        <section className="profile-info-wrapper">
            <div className="profile-info-content">
                <h4 className="f-14 text-dark mb-0 py-3 gray-border-bottom">Professional Experience</h4>
                <div className="gray-border-bottom py-4">
                    <label className="admin-label text-capitalize text-dark mt-3">talentica software</label>
                    <p className="f-12 text-secondary">3 yrs 10 months</p>
                    <div className="d-flex flex-column ml-2">
                        <div className="d-flex align-items-center">
                            <div className="list-type-items mr-2"></div>
                            <div className="f-14 text-dark text-capitalize line-height-1">lead ux designer</div>
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
                                    <div className="f-14 text-dark text-capitalize line-height-1">lead ux designer</div>
                                </div>
                                <div className="f-12 text-secondary">April 2017 - Present , Pune Area, India</div>
                                <p className="f-14 text-secondary my-3">Work with startups to build engaging product experiences. Working with an awesome team and Luke for Fidelis who will eventually disrput the wat students take educations.</p>
                            </div>
                        </li>
                        <li className="timeline-event">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <div className="f-14 text-dark text-capitalize line-height-1">lead ux designer</div>
                                </div>
                                <div className="f-12 text-secondary">April 2017 - Present , Pune Area, India</div>
                                <p className="f-14 text-secondary my-3">Work with startups to build engaging product experiences. Working with an awesome team and Luke for Fidelis who will eventually disrput the wat students take educations.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProffessionalExperienceModalCard;
