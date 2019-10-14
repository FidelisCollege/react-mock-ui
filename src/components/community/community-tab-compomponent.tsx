import * as React from 'react';
import { Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { withRouter, RouterProps } from 'react-router';
import CommunityCard from "./community-card";
import {CommunityTypes} from "./models/communityModels";

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
        <div className="d-flex flex-column h-100  px-md-3">
            <header className="border-bottom pb-md-2">
                <Nav pills className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex">
                        <NavItem className="mr-3">
                            <NavLink
                                className={"tab-buttons text-capitalize" + (activeTab === '1' ? ' active ' : '')}
                                onClick={() => toggle('1')}
                            >
                                community
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"tab-buttons text-capitalize btn" + (activeTab === '2' ? ' active ' : '')}
                                onClick={() => toggle('2')}
                            >
                                explore community
                            </NavLink>
                        </NavItem>
                    </div>

                </Nav>
            </header>

            <TabContent className="dashboard-tab-wrapper pt-3 pb-5 flex-grow-1" activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col xs="24" sm="8">
                            <CommunityCard communityTypes={CommunityTypes.POST} {...CommuntiyData}/>
                        </Col>
                        <Col xs="24" sm="8">
                            <CommunityCard communityTypes={CommunityTypes.POST} {...CommuntiyData}/>
                        </Col>
                        <Col xs="24" sm="8">
                            <CommunityCard communityTypes={CommunityTypes.POST} {...CommuntiyData}/>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        <h2 className="mb-0 pb-2 ">Recommended communities</h2>
                        <Row>
                            <Col xs="24" sm="8">
                                <CommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                            </Col>
                        </Row>



                    </div>
                </TabPane>

                <TabPane tabId="2">2</TabPane>

            </TabContent>





        </div>

    );
}


export default withRouter(CommunityTabComponent);