import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {useState} from "react";
import classnames from 'classnames';
import StudentLandingContainer from "../studentLandingPage/containers/studentLandingContainer";
import RecommendCardComponent from "../../common/card/recommendCardComponent";
import ActivityStreamComponent from "../community/activityStreamComponent";


const MentorDetailedComponent = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="flex-grow-1 tab-content card card-shadow border-0 flex-column main-content">
            <div className="overflow-parent-wrapper p-0 p-lg-3">
                <header className="person d-flex align-items-center student-details-header p-3 p-lg-0 pb-lg-3 position-relative">
                    <img src="images/avatar28.png" alt="" className="rounded-circle border person-img d-none d-md-inline-block mr-3" />
                    <div className="d-flex justify-content-center person-info flex-column">
                        <div>
                            <span className="person-name text-capitalize mr-2">rakesh veetil</span>
                            <a href="" className="link-details border-left px-2 mr-2 text-primary d-none">View</a>
                            <i data-toggle="modal" data-target="#recommendModal" className="icon-super text-primary cursor-pointer"></i>
                        </div>
                        <a href="" className="d-block person-subinfo">rakeshveetil@yopmail.com</a>
                    </div>
                    <a href="base-layout-dashboard.html" aria-label="Close" className="close position-absolute">
                        <i className="icon-close"></i>
                    </a>

                </header>
                <div className="p-3 p-lg-0 pb-lg-3">
                    <RecommendCardComponent/>
                </div>

                <div className="px-2 border-bottom mb-0 mb-lg-3">

                    <Nav tabs className="nav-tabs tab-icon-view py-2">
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === '1' ? ' active ' : '')}
                                onClick={() => { toggle('1'); }}
                            >

                                <i className="icon-list mb-3 d-none d-lg-block"></i>
                                <span className="title">activity</span>

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === 'goals' ? ' active ' : '')}
                                onClick={() => { toggle('goals'); }}
                            >

                                <i className="icon-goal mb-3 d-none d-lg-block"></i>
                                <span className="title">goals</span>

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === '3' ? ' active ' : '')}
                                onClick={() => { toggle('3'); }}
                            >

                                <i className="icon-message mb-3 d-none d-lg-block"></i>
                                <span className="title">message</span>

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === '4' ? ' active ' : '')}
                                onClick={() => { toggle('4'); }}
                            >

                                <i className="icon-smartphone mb-3 d-none d-lg-block"></i>
                                <span className="title">sms</span>

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === '5' ? ' active ' : '')}
                                onClick={() => { toggle('5'); }}
                            >

                                <i className="icon-info mb-3 d-none d-lg-block"></i>
                                <span className="title">info</span>

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === '6' ? ' active ' : '')}
                                onClick={() => { toggle('6'); }}
                            >

                                <i className="icon-flag mb-3 d-none d-lg-block"></i>
                                <span className="title">flag</span>

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === '7' ? ' active ' : '')}
                                onClick={() => { toggle('7'); }}
                            >

                                <i className="icon-coaching mb-3 d-none d-lg-block"></i>
                                <span className="title">coaching</span>

                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"nav-item ml-0" + (activeTab === '8' ? ' active ' : '')}
                                onClick={() => { toggle('8'); }}
                            >

                                <i className="icon-private mb-3 d-none d-lg-block"></i>
                                <span className="title">private</span>

                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <TabContent activeTab={activeTab} className="overflow-auto">
                    <TabPane tabId="1">
                        <ActivityStreamComponent/>
                    </TabPane>
                    <TabPane tabId="goals">
                        <StudentLandingContainer/>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}






export default MentorDetailedComponent;
