import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {useState} from "react";
import {MentorTabNames} from "../mentor/helper/helpers";
import MentortabComponent from "../../common/dashboard/mentorMenteeTabMob";
import AboutCommuinityDetails from "./AboutCommunity";
import ActivityCommuinity from "./ActivityCommunity";
import RelatedCommunityDetails from "./relatedCommunityDetails";
import CommunityMembers from "./communityMembers";
import CommunityResources from "./communityResources";

const CommunityDetailsComponent = (props) => {
    const [activeTab, setActiveTab] = useState('activities');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="community-details community-activity-detail d-flex flex-lg-row flex-column flex-grow-1 mt-2 mt-md-3 overflow-auto bg-white rounded card-shadow">
            <div className="d-lg-none d-flex flex-column overflow-auto community-nav-pills">
                <Nav pills className="d-flex justify-content-between align-items-center p-2 border-bottom community-activity-tabs overflow-auto d-lg-none">
                    <div className="d-flex">
                        <NavItem className="mr-3">
                            <NavLink
                                className={"text-capitalize" + (activeTab === 'activities' ? ' active ' : '')}
                                onClick={() => toggle('activities')}
                            >
                                activities
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'about' ? ' active ' : '')}
                                onClick={() => toggle('about')}
                            >
                                about
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
            </div>

            <div className="d-md-none d-lg-flex  d-none ">
                <Nav className="d-none d-lg-flex flex-column align-content-start align-items-start p-2 card-shadow bg-white">
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'activities' ? ' active ' : '')}
                            onClick={() => { toggle('activities'); }}
                        >
                            activities
                        </NavLink>
                    </NavItem>
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

            </div>
            <TabContent activeTab={activeTab} className="flex-grow-1 bg-white p-3  community-tab-content overflow-auto">
                <TabPane tabId="about" className="overflow-auto">
                    <AboutCommuinityDetails/>
                </TabPane>
                <TabPane tabId="activities" className="overflow-auto flex-grow-1">
                    <ActivityCommuinity/>
                </TabPane>
                <TabPane tabId="members" className="overflow-auto flex-grow-1 ">
                    <CommunityMembers/>
                </TabPane>
                <TabPane tabId="resource" className="overflow-auto flex-grow-1 ">
                    <CommunityResources/>
                </TabPane>
                <TabPane tabId="relatedCommunities" className="overflow-auto flex-grow-1 ">
                    <RelatedCommunityDetails/>
                </TabPane>
                <TabPane tabId="calender" className="overflow-auto flex-grow-1 ">
                    <RelatedCommunityDetails/>
                </TabPane>
            </TabContent>

        </div>


    );
}
export default CommunityDetailsComponent;