import * as React from 'react';
import {Button, Col, Nav, Row, TabContent, TabPane} from "reactstrap";
import {NavItem, NavLink} from "reactstrap";
import {useState} from "react";
import CommunityAllActivity from "./communityAllActivities";
import CommunityActivityAnnouncement from "./communityActivityAnnouncement";
import CommunityActivityPost from "./communityActivityPost";
import CommunityPostModal from "./postModal";






const ActivityCommuinity = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <Nav pills className="d-flex justify-content-between align-items-center py-2 px-2 border-bottom community-activity-tabs">
                <div className="d-flex">
                    <NavItem className="mr-3">
                        <NavLink
                            className={"text-capitalize" + (activeTab === '1' ? ' active ' : '')}
                            onClick={() => toggle('1')}
                        >
                            all
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={"text-capitalize btn" + (activeTab === '2' ? ' active ' : '')}
                            onClick={() => toggle('2')}
                        >
                            events
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={"text-capitalize btn" + (activeTab === '3' ? ' active ' : '')}
                            onClick={() => toggle('3')}
                        >
                            announcements
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={"text-capitalize btn" + (activeTab === '4' ? ' active ' : '')}
                            onClick={() => toggle('4')}
                        >
                            posts
                        </NavLink>
                    </NavItem>
                </div>

            </Nav>
            <TabContent activeTab={activeTab} className="w-100 bg-white">
                <TabPane tabId="1">
                    <CommunityAllActivity/>
                </TabPane>
                <TabPane tabId="2">
                    rrrr
                </TabPane>
                <TabPane tabId="3">
                    <CommunityActivityAnnouncement/>
                </TabPane>
                <TabPane tabId="4" className="h-100 ">
                    <div className="d-flex justify-content-between pl-lg-5 ml-lg-3 py-3">
                        <input className="form-control py-0" type="text" placeholder="Search for mentors" />
                        <CommunityPostModal/>
                    </div>
                    <CommunityActivityPost/>
                </TabPane>
            </TabContent>
    </>


    );
}
export default ActivityCommuinity;