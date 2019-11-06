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
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="community-details d-flex py-3 community-activity-detail">
            <Nav className="d-flex flex-column align-content-start align-items-start p-2 card-shadow bg-white">
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '1' ? ' active ' : '')}
                            onClick={() => { toggle('1'); }}
                        >
                            about
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '2' ? ' active ' : '')}
                            onClick={() => { toggle('2'); }}
                        >
                            activities
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '3' ? ' active ' : '')}
                            onClick={() => { toggle('3'); }}
                        >
                            members
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '4' ? ' active ' : '')}
                            onClick={() => { toggle('4'); }}
                        >
                            resources
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '5' ? ' active ' : '')}
                            onClick={() => { toggle('5'); }}
                        >
                            related communities
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '7' ? ' active ' : '')}
                            onClick={() => { toggle('6'); }}
                        >
                            calender
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className="w-100 bg-white px-3">
                    <TabPane tabId="1">
                        <AboutCommuinityDetails/>
                    </TabPane>
                    <TabPane tabId="2" className="h-100">
                        <ActivityCommuinity/>
                    </TabPane>
                    <TabPane tabId="3" className="h-100">
                        <CommunityMembers/>
                    </TabPane>
                    <TabPane tabId="4" className="h-100">
                        <CommunityResources/>
                    </TabPane>
                    <TabPane tabId="5" className="h-100">
                        <RelatedCommunityDetails/>
                    </TabPane>
                </TabContent>
        </div>

    );
}
export default CommunityDetailsComponent;