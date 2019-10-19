import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {useState} from "react";
import {MentorTabNames} from "../mentor/helper/helpers";
import MentortabComponent from "../mentor/mentorTab";

const CommunityDetailsComponent = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="community-details d-flex py-3">

            <Nav tabs vertical className="d-flex flex-column align-content-start align-items-start p-3 card-shadow bg-white">
                <NavItem className="mb-2">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '1' ? ' active ' : '')}
                        onClick={() => { toggle('1'); }}
                    >
                        about
                    </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '2' ? ' active ' : '')}
                        onClick={() => { toggle('2'); }}
                    >
                        activities
                    </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '3' ? ' active ' : '')}
                        onClick={() => { toggle('2'); }}
                    >
                        members
                    </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '4' ? ' active ' : '')}
                        onClick={() => { toggle('2'); }}
                    >
                        resources
                    </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '5' ? ' active ' : '')}
                        onClick={() => { toggle('2'); }}
                    >
                        related communities
                    </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '7' ? ' active ' : '')}
                        onClick={() => { toggle('2'); }}
                    >
                        calender
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab} className="w-100 bg-white">
                <TabPane tabId="1">
                        <div className="content-wrapper">
                            <p className="f-14 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-capitalize f-14 text-dark">active since</h3>
                                <div className="text-capitalize f-14 text-light">01 Feb 2018</div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-capitalize f-14 text-dark">sub communities</h3>
                                <p className="text-capitalize f-14 text-light mb-0">Climbers Sub Community 1</p>
                                <p className="text-capitalize f-14 text-light mb-0">Climbers Sub Community 2</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-capitalize f-14 text-dark">community manager</h3>
                                <p className="text-capitalize f-14 text-light mb-0">Laura Guzman</p>

                            </div>
                        </div>
                </TabPane>
                <TabPane tabId="2">
                    oo
                </TabPane>
            </TabContent>
            {/*<div className="border-bottom d-lg-none d-flex flex-grow-1 tab-content-wrapper min-height-0 ">
                <div className=" d-lg-none">
                    <div className="nav nav-tabs tab-icon-list-view custom-tabs py-2 border-bottom" id="nav-tab" role="tablist">
                        <a className={"nav-item nav-link"} id="nav-goal-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-goal" aria-selected="true">
                            <span className="title"></span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === MentorTabNames.MENTORS ? " active" : "")} onClick={() => this.onSelectMainTab(MentorTabNames.MENTORS)} id="nav-team-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-team" aria-selected="false">
                            <span className="title">{MentorTabNames.MENTORS}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === MentorTabNames.MENTEES ? " active" : "")} onClick={() => this.onSelectMainTab(MentorTabNames.MENTEES)} id="nav-purpose-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-purpose" aria-selected="false">
                            <span className="title">{MentorTabNames.MENTEES}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === MentorTabNames.COMMUNITIES ? " active" : "")} onClick={() => this.onSelectMainTab(MentorTabNames.COMMUNITIES)} id="nav-recommend-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-recommend" aria-selected="false">
                            <span className="title">{MentorTabNames.COMMUNITIES}</span>
                        </a>
                    </div>

                    <div className="inner-container min-height-0 p-lg-3 px-2">
                        <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                            <div className={`list-team tab-data ${activeMainTab === MentorTabNames.COACH ? " active" : ""} left-column`} id="nav-coach">
                                Coach Component
                            </div>
                            <div className={`student-details tab-data ${activeMainTab === MentorTabNames.MENTORS ? " active" : ""} px-lg-3`} id="nav-mentor">
                                <MentortabComponent/>
                            </div>
                            <div className={`student-details tab-data ${activeMainTab === MentorTabNames.MENTEES ? " active" : ""} px-lg-3`} id="nav-mentees">
                                1
                            </div>
                            <div className={`student-details tab-data ${activeMainTab === MentorTabNames.COMMUNITIES ? " active" : ""} px-lg-3`} id="nav-communities">
                                <CommunityDashboard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>

    );
}
export default CommunityDetailsComponent;