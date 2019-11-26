import * as React from 'react';
import {Button, Col, ListGroup, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import { withRouter, RouterProps } from 'react-router';
import CommunityCard from "./community-card";
import {CommunityTypes} from "./models/communityModels";
import ExploreCommunityTab from "./exploreCommunity";
import IncomingRequestsCard from "../mentor/IncomingRquests";
import IncomingRequstsMentorTab from "../mentor/IncomingRquests";

const CommuntiyData = {
    memberCount: "03",
    member: "member",
    activityCount: "03",
    activity: "activity"
}
export interface CommunityTabProps extends RouterProps {}

const CommunityTabComponent = (props: CommunityTabProps) => {
    const { history } = props;
    const [activeTab, setActiveTab] = React.useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <div className="d-flex flex-column h-100  px-md-3 px-2">
            <h2 className="text-capitalize py-3 border-bottom f-18 text-dark font-weight-normal">Communities dashboard</h2>
            <header className="border-bottom pb-2 d-flex justify-content-between align-items-center">
                <Nav pills className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <NavItem className="mr-3">
                            <NavLink
                                className={"tab-buttons text-capitalize btn" + (activeTab === '1' ? ' active ' : '')}
                                onClick={() => toggle('1')}
                            >
                                community
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"tab-buttons text-capitalize" + (activeTab === '2' ? ' active ' : '')}
                                onClick={() => toggle('2')}
                            >
                                explore communities
                            </NavLink>
                        </NavItem>
                    </div>

                </Nav>
                <div className="f-14 d-none d-lg-flex d-md-flex">
                    <a href="#" className="text-capitalize text-primary">current</a>
                    <div className="px-2">|</div>
                    <a href="#" className="text-capitalize text-secondary">past</a>

                </div>
            </header>
            <TabContent className="dashboard-tab-wrapper flex-grow-1 overflow-auto" activeTab={activeTab}>
                <TabPane tabId="1">
                    <IncomingRequstsMentorTab/>
                    <h2 className="f-14 text-light font-weight-normal px-2 text-capitalize">my communities</h2>
                    <Row className="m-0">
                        <Col xs="24" sm="8" md="12">
                            <CommunityCard communityTypes={CommunityTypes.POST} {...CommuntiyData}/>
                        </Col>
                        <Col xs="24" sm="8" md="12">
                            <CommunityCard communityTypes={CommunityTypes.POST} {...CommuntiyData}/>
                        </Col>
                        <Col xs="24" sm="8" md="12">
                            <CommunityCard communityTypes={CommunityTypes.POST} {...CommuntiyData}/>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        <h2 className="mb-0 pb-2 f-14 font-weight-normal px-2 text-capitalize">recommended communities</h2>
                        <Row className="m-0">
                            <Col xs="24" sm="8" md="12" className="">
                                <CommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                            </Col>
                            <Col xs="24" sm="8" md="12" className="">
                                <CommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                            </Col>
                            <Col xs="24" sm="8" md="12" className="">
                                <CommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                            </Col>
                            <Col xs="24" sm="8" md="12" className="">
                                <CommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                            </Col>

                        </Row>



                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <ExploreCommunityTab/>
                </TabPane>

            </TabContent>
        </div>

    );
}


export default withRouter(CommunityTabComponent);