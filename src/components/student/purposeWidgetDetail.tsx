import * as React from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    Container
} from 'reactstrap';
import {useState} from "react";
import ProfessionalPriorities from "./professional-priorities";
import PaginationComponent from "../../common/pagination";


const PurposeWidgetDetail = (props) => {
    const [activeTab, setActiveTab] = useState('Priorities');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="community-details community-activity-detail d-flex flex-lg-row flex-column flex-grow-1 mt-2 mt-md-3 overflow-auto rounded card-shadow my-purpose">
            <div className="d-lg-none d-flex flex-column">
                <Nav  className="d-flex justify-content-between align-items-center p-2 border-bottom d-lg-none">
                    <div className="d-flex">
                        <NavItem className="mr-3 purpose-nav-item">
                            <NavLink
                                className={"text-capitalize" + (activeTab === 'Priorities' ? ' active ' : '')}
                                onClick={() => toggle('Priorities')}
                            >
                                Professional Priorities
                            </NavLink>
                        </NavItem>
                        <NavItem  className="mr-3 purpose-nav-item">
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'Functions' ? ' active ' : '')}
                                onClick={() => toggle('Functions')}
                            >
                                Functions / Roles
                            </NavLink>
                        </NavItem>
                        <NavItem className="mr-3 purpose-nav-item">
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'Industry' ? ' active ' : '')}
                                onClick={() => toggle('Industry')}
                            >
                                Industry preferences
                            </NavLink>
                        </NavItem>
                        <NavItem className="mr-3 purpose-nav-item">
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'Location' ? ' active ' : '')}
                                onClick={() => toggle('Location')}
                            >
                                Location preferences
                            </NavLink>
                        </NavItem>
                        <NavItem className="mr-3 purpose-nav-item">
                            <NavLink
                                className={"text-capitalize btn" + (activeTab === 'Purpose' ? ' active ' : '')}
                                onClick={() => toggle('Purpose')}
                            >
                                Purpose Statement
                            </NavLink>
                        </NavItem>

                    </div>
                </Nav>
            </div>

            <Nav className="d-none d-lg-flex flex-column align-content-start align-items-start p-2 card-shadow  navs-list flex-grow-1">
                <NavItem className="mb-2 nav-items navs-list-items text-capitalize nav-item">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14 nav-link completed nav-link" + (activeTab === 'Priorities' ? ' active ' : '')}
                        onClick={() => { toggle('Priorities'); }}
                    >
                        Professional Priorities
                        <i className="icon-checkmark nav-list-icons f-14"></i>
                    </NavLink>
                </NavItem>
                <NavItem className="mb-2 nav-items navs-list-items text-capitalize nav-item">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14 nav-link nav-link" + (activeTab === 'Functions' ? ' active ' : '')}
                        onClick={() => { toggle('Functions'); }}
                    >
                        Functions / Roles

                    </NavLink>
                </NavItem>

                <NavItem className="mb-2 nav-items navs-list-items text-capitalize nav-item">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14 nav-link nav-link" + (activeTab === 'Industry' ? ' active ' : '')}
                        onClick={() => { toggle('Industry'); }}
                    >
                        Industry preferences

                    </NavLink>
                </NavItem>
                <NavItem className="mb-2 nav-items navs-list-items text-capitalize nav-item">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14 nav-link nav-link" + (activeTab === 'Location' ? ' active ' : '')}
                        onClick={() => { toggle('Location'); }}
                    >
                        Location preferences

                    </NavLink>
                </NavItem>
                <NavItem className="mb-2 nav-items navs-list-items text-capitalize nav-item">
                    <NavLink
                        className={"tab-buttons text-capitalize text-dark f-14 nav-link nav-link" + (activeTab === 'Purpose' ? ' active ' : '')}
                        onClick={() => { toggle('Purpose'); }}
                    >
                        Purpose Statement

                    </NavLink>
                </NavItem>
            </Nav>



            <TabContent activeTab={activeTab} className="flex-grow-1 p-3  p-md-0 community-tab-content overflow-auto">
                <TabPane tabId="Priorities" className="overflow-auto flex-grow-1 text-center">
                    <ProfessionalPriorities/>
                </TabPane>
                <TabPane tabId="Functions" className="overflow-auto flex-grow-1 text-center">
                    2
                </TabPane>
                <TabPane tabId="Industry" className="overflow-auto flex-grow-1 ">
                   3
                </TabPane>
                <TabPane tabId="Location" className="overflow-auto flex-grow-1 ">
                    4
                </TabPane>
                <TabPane tabId="Purpose" className="overflow-auto flex-grow-1 ">
                    5
                </TabPane>
            </TabContent>

            <PaginationComponent/>



        </div>


    )
}
export default PurposeWidgetDetail;