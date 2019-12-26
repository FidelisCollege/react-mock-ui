import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import {useState} from "react";
import AboutCommuinityDetails from "./AboutCommunity";
import ActivityCommuinity from "./ActivityCommunity";
import RelatedCommunityDetails from "./relatedCommunityDetails";
import CommunityMembers from "./communityMembers";
import CommunityResources from "./communityResources";
import CommunityAdminTab from "./communityAdmin";

const CommunityNomMemberDetailsComponent = (props) => {
    const [activeTab, setActiveTab] = useState('activities');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="community-details community-activity-detail d-flex flex-lg-row flex-column flex-grow-1 mt-2 mt-md-3 overflow-auto bg-white rounded card-shadow">
            <div className="d-lg-none d-flex flex-column overflow-auto community-nav-pills">
                <Nav pills className="d-flex justify-content-between align-items-center p-2  community-activity-tabs overflow-auto d-lg-none">
                    <div className="d-flex">
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
                                className={"text-capitalize btn" + (activeTab === 'relatedCommunities' ? ' active ' : '')}
                                onClick={() => toggle('relatedCommunities')}
                            >
                                related communities
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'content' ? ' active ' : '')}
                                onClick={() => toggle('content')}
                            >
                                content
                            </NavLink>
                        </NavItem>

                    </div>
                </Nav>
            </div>

            <div className="d-md-none d-lg-flex  d-none ">
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
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'relatedCommunities' ? ' active ' : '')}
                            onClick={() => { toggle('relatedCommunities'); }}
                        >
                            related communities
                        </NavLink>
                    </NavItem>
                    <NavItem className="mb-2 nav-items">
                        <NavLink
                            className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === 'content' ? ' active ' : '')}
                            onClick={() => { toggle('content'); }}
                        >
                            content
                        </NavLink>
                    </NavItem>
                </Nav>

            </div>
            <TabContent activeTab={activeTab} className="flex-grow-1 bg-white p-3  community-tab-content overflow-auto">
                <TabPane tabId="about" className="overflow-auto">
                    <AboutCommuinityDetails/>
                </TabPane>
                <TabPane tabId="relatedCommunities" className="overflow-auto flex-grow-1">
                    related communities
                </TabPane>
                <TabPane tabId="content" className="overflow-auto flex-grow-1 ">
                    content
                </TabPane>

            </TabContent>

        </div>


    );
}
export default CommunityNomMemberDetailsComponent;