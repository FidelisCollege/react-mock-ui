import * as React from 'react';
import { Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import DefaultMentorCard from "./mentorDefaultCards";
import AddMentorCard from "./addmentorCard";
import RecommendMentorTooltip from "./recommendTooltip";

import { MentorTypes } from "./models/mentorModel";
import ViewMentorCard from "../viewAllCard";
import { withRouter, RouterProps } from 'react-router';
import { RouteUrls } from '../routes/routesConfig';
import MentorTab from "./mentorTab";

const MentorData = {
    name: "Robert Watson",
    title: "Creative Lead",
    text: "ThinQbator Inc."
}

const RecommendedMentorData = [{
    name: "Robert Watson",
    title: "Creative Lead",
    text: "ThinQbator Inc."
},
{
    name: "Robert Watson",
    title: "Creative Lead",
    text: "ThinQbator Inc."
},
{
    name: "Robert Watson",
    title: "Creative Lead",
    text: "ThinQbator Inc."
}]

export interface MentortabProps extends RouterProps {

}

const MentortabComponent = (props: MentortabProps) => {
    const { history } = props;
    const [activeTab, setActiveTab] = React.useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <div className="h-100">
            <header className="border-md-bottom pb-md-3">
                <Nav pills className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex">
                        <NavItem className="mr-3">
                            <NavLink
                                className={"tab-buttons text-capitalize" + (activeTab === '1' ? ' active ' : '')}
                                onClick={() => toggle('1')}
                            >
                                mentors
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={"tab-buttons text-capitalize btn" + (activeTab === '2' ? ' active ' : '')}
                                onClick={() => toggle('2')}
                            >
                                requests
                            </NavLink>
                        </NavItem>
                    </div>
                    <div className="d-none d-md-block">
                        <Button className="btn btn-outline-primary bg-white invite-mentor-btn py-md-2 px-md-4">
                            <i className="icon-add mr-2"></i>
                            Invite Mentor</Button>
                    </div>
                </Nav>
            </header>

            <TabContent className="overflow-auto mentor-tab-wrapper" activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row className="py-3">
                        <Col xs="12" md="6" className="d-none d-md-block">
                            <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                        </Col>
                        <Col xs="" md="6" onClick={() => history.push(RouteUrls.MENTOR_ADVANCE_SEARCH)}>
                            <AddMentorCard />
                        </Col>
                    </Row>
                    <div>
                        <div className="pb-2 d-flex border-bottom align-items-center">
                            <h2 className="mb-0">Recommended Mentors</h2>
                            <RecommendMentorTooltip />
                        </div>
                        <Row className="py-3">
                            {RecommendedMentorData.map((data, index) => {
                                return <Col xs="12" sm="6" key={index}>
                                    <DefaultMentorCard mentorType={MentorTypes.RECOMMENDED} {...data} />
                                </Col>
                            })}
                            <Col xs="12" sm="6">
                                <ViewMentorCard />
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <h4>Tab 1 Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
            <div className="bg-md-primary position-fixed chat-wrapper px-4 py-2 rounded-top">
                <div className="d-md-flex d-none">
                    <div className="mr-5">
                        <h2 className="mb-0 text-white f-16">Christopher Puckey</h2>
                        <p className="mb-0 text-white f-13">Mentoring manager</p>
                    </div>
                    <a href="#" type="button" className="btn bg-white text-primary  rounded px-3 py-2 text-capitalize">ask</a>
                </div>
                <a href="#" type="button" className="btn bg-primary text-white rounded px-3 py-3 text-capitalize  rounded px-2 py-3 text-capitalize chat-wrapper d-md-none">ask</a>
            </div>
            <button className="d-lg-none btn-block-custom">
                <i className="icon-add mr-2"></i>Add New Goal
            </button>

        </div>

    );
}


export default withRouter(MentortabComponent);