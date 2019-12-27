import * as React from 'react';
import {Button, Col, Nav, Row, TabContent, TabPane} from "reactstrap";
import {NavItem, NavLink} from "reactstrap";
import {useState} from "react";
import {IconBookMark} from "../../common";
import CommunityResourceTab from "./communityResourceApps";
import CommunityResourceApp from "./communityResourceApps";
import CommunityResourceDocument from "./CommunityResourceDocument";




const CommunityResources = () => {
    const [activeTab, setActiveTab] = useState('3');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (

        <div className="communities-detail-content d-flex flex-column h-100">
            <div className="d-flex related-communities-header justify-content-between">
                <div className="search-input-group" id="searchBox">
                    <input className="form-control" type="text" placeholder="Search by name or skills" />
                </div>
            </div>

                <Nav pills className="d-flex justify-content-between align-items-center py-2 community-activity-tabs">
                    <div className="d-flex">
                        <NavItem className="">
                            <NavLink
                                className={"text-capitalize" + (activeTab === '1' ? ' active ' : '')}
                                onClick={() => toggle('1')}
                            >
                                app
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === '2' ? ' active ' : '')}
                                onClick={() => toggle('2')}
                            >
                                badges
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === '3' ? ' active ' : '')}
                                onClick={() => toggle('3')}
                            >
                                documents
                            </NavLink>
                        </NavItem>

                    </div>

                </Nav>
                <TabContent activeTab={activeTab} className="w-100 bg-white flex-grow-1 overflow-auto ">
                    <TabPane tabId="1" className="h-100">
                        <CommunityResourceApp/>
                    </TabPane>
                    <TabPane tabId="2">
                        rrrr
                    </TabPane>
                    <TabPane tabId="3">
                        <CommunityResourceDocument/>
                    </TabPane>

                </TabContent>


        </div>
    );
}

export default  CommunityResources;
