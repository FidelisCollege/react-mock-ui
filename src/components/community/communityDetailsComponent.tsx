import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {useState} from "react";
import {MentorTabNames} from "../mentor/helper/helpers";
import MentortabComponent from "../mentor/mentorTab";
import AboutCommuinityDetails from "./AboutCommunity";
import ActivityCommuinity from "./ActivityCommunity";
import RelatedCommunityDetails from "./relatedCommunityDetails";
import CommunityMembers from "./communityMembers";
import CommunityResources from "./communityResources";

const CommunityDetailsComponent = (props) => {
    const [activeTab, setActiveTab] = useState('about');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="community-details community-activity-detail d-flex flex-grow-1">
            <div className="d-lg-none d-md-flex flex-column flex-grow-1">
                <Nav pills className="d-flex justify-content-between align-items-center py-2 px-2 border-bottom community-activity-tabs overflow-auto d-lg-none">
                    <div className="d-flex">
                        <NavItem className="mr-3">
                            <NavLink
                                className={"text-capitalize" + (activeTab === 'about' ? ' active ' : '')}
                                onClick={() => toggle('about')}
                            >
                                about
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'activities' ? ' active ' : '')}
                                onClick={() => toggle('activities')}
                            >
                                activities
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'members' ? ' active ' : '')}
                                onClick={() => toggle('members')}
                            >
                                members
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'resource' ? ' active ' : '')}
                                onClick={() => toggle('resource')}
                            >
                                resources
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'relatedCommunities' ? ' active ' : '')}
                                onClick={() => toggle('relatedCommunities')}
                            >
                                communities
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'calender' ? ' active ' : '')}
                                onClick={() => toggle('calender')}
                            >
                                calender
                            </NavLink>
                        </NavItem>
                    </div>
                </Nav>
                <TabContent activeTab={activeTab} className="bg-white py-3 community-tab-content flex-grow-1">
                    <TabPane tabId="about">
                        <AboutCommuinityDetails/>
                    </TabPane>
                    <TabPane tabId="activities" className="h-100">
                        <ActivityCommuinity/>
                    </TabPane>
                    <TabPane tabId="members" className="h-100">
                        <CommunityMembers/>
                    </TabPane>
                    <TabPane tabId="resource" className="h-100">
                        <CommunityResources/>
                    </TabPane>
                    <TabPane tabId="relatedCommunities" className="h-100">
                        <RelatedCommunityDetails/>
                    </TabPane>
                    <TabPane tabId="calender" className="h-100">
                        <RelatedCommunityDetails/>
                    </TabPane>
                </TabContent>
            </div>
            <div className="d-md-none  d-lg-flex flex-grow-1 d-none">
                <Nav className="d-none d-lg-flex flex-column align-content-start align-items-start p-2 card-shadow bg-white">
                    <NavItem className="mb-2 nav-items ">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'about' ? ' active ' : '')}
                            onClick={() => { toggle('about'); }}
                        >
                            about
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'activities' ? ' active ' : '')}
                            onClick={() => { toggle('activities'); }}
                        >
                            activities
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'members' ? ' active ' : '')}
                            onClick={() => { toggle('members'); }}
                        >
                            members
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'resource' ? ' active ' : '')}
                            onClick={() => { toggle('resource'); }}
                        >
                            resources
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'relatedCommunities' ? ' active ' : '')}
                            onClick={() => { toggle('relatedCommunities'); }}
                        >
                            related communities
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'calender' ? ' active ' : '')}
                            onClick={() => { toggle('calender'); }}
                        >
                            calender
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="w-100 bg-white p-lg-3 py-3 community-tab-content overflow-auto">
                    <TabPane tabId="about">
                        <AboutCommuinityDetails/>
                    </TabPane>
                    <TabPane tabId="activities" className="h-100">
                        <ActivityCommuinity/>
                    </TabPane>
                    <TabPane tabId="members" className="h-100">
                        <CommunityMembers/>
                    </TabPane>
                    <TabPane tabId="resource" className="h-100">
                        <CommunityResources/>
                    </TabPane>
                    <TabPane tabId="relatedCommunities" className="h-100">
                        <RelatedCommunityDetails/>
                    </TabPane>
                    <TabPane tabId="calender" className="h-100">
                        <RelatedCommunityDetails/>
                    </TabPane>
                </TabContent>
            </div>

        </div>

    );
}
export default CommunityDetailsComponent;