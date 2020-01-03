import * as React from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import AppFlowCollapse from "../../common/collapse/appWorkFlow";
import AboutCommuinityDetails from "../community/communityDetailsComponent";
import MobileAppLeftNav from "./appToBeTakenMobile";
import AppToTakenCard from "../../common/card/appToTakenCard";





const AppRightNav = () => {
    const [activeTab, setActiveTab] = React.useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    return (
        <div className="main-right-wrapper flex-grow-1 p-md-3 d-flex flex-column overflow-auto">
            <AppToTakenCard/>
            <div className=" d-flex flex-column overflow-auto">
                <Nav pills className="d-flex justify-content-between align-items-center pt-2 pb-3 overflow-auto">
                    <div className="d-flex">
                        <NavItem className="d-md-none">
                            <NavLink
                                className={"tab-buttons text-capitalize" + (activeTab === 'aboutTheApp' ? ' active ' : '')}
                                onClick={() => toggle('aboutTheApp')}
                            >
                                about the app
                            </NavLink>
                        </NavItem>
                        <NavItem className="">
                            <NavLink
                                className={"tab-buttons text-capitalize" + (activeTab === '1' ? ' active ' : '')}
                                onClick={() => toggle('1')}
                            >
                                Table of Contents
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"tab-buttons text-capitalize btn" + (activeTab === '2' ? ' active ' : '')}
                                onClick={() => toggle('2')}
                            >
                                Description
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"tab-buttons text-capitalize btn" + (activeTab === '3' ? ' active ' : '')}
                                onClick={() => toggle('3')}
                            >
                                Discussions
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"tab-buttons text-capitalize btn" + (activeTab === '4' ? ' active ' : '')}
                                onClick={() => toggle('4')}
                            >
                                Related Courses
                            </NavLink>
                        </NavItem>
                    </div>
                </Nav>
            </div>
            <TabContent className="dashboard-tab-wrapper flex-grow-1 overflow-auto" activeTab={activeTab}>
                <TabPane tabId="aboutTheApp">
                    <MobileAppLeftNav/>
                </TabPane>
                <TabPane tabId="1">
                    <AppFlowCollapse/>
                </TabPane>
                <TabPane tabId="2">
                    2
                </TabPane>
                <TabPane tabId="3">
                    3
                </TabPane>
                <TabPane tabId="4">
                    4
                </TabPane>
            </TabContent>

        </div>

    );
}

export default  AppRightNav;
