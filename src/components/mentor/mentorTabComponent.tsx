import * as React from 'react';
import { Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import DefaultMentorCard from "./mentorDefaultCards";
import AddMentorCard from "./addmentorCard";
import RecommendMentorTooltip from "./recommendTooltip";

import { MentorTypes } from "./models/mentorModel";
import ViewMentorCard from "../viewAllCard";
import { withRouter, RouterProps } from 'react-router';
import { RouteUrls } from '../routes/routesConfig';

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
            <header className="border-bottom pb-3">
                <Nav pills className="d-flex justify-content-between align-items-center">
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
                    <div className="">
                        <Button className="btn btn-outline-primary bg-white invite-mentor-btn py-2 px-4">
                            <i className="icon-add mr-2"></i>
                            Invite Mentor</Button>
                    </div>
                </Nav>
            </header>

            <TabContent className="h-100 overflow-auto" activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row className="py-3">
                        <Col xs="12" md="5">
                            <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                        </Col>
                        <Col xs="12" md="5" onClick={() => history.push(RouteUrls.MENTOR_ADVANCE_SEARCH)}>
                            <AddMentorCard />
                        </Col>
                    </Row>
                    <div>
                        <div className="pb-2 d-flex border-bottom align-items-center">
                            <h2 className="mb-0">Recommended Mentors</h2>
                            <RecommendMentorTooltip />
                        </div>
                        <Row className="py-3">
                            {RecommendedMentorData.map(data => {
                                return <Col xs="12" md="5">
                                    <DefaultMentorCard mentorType={MentorTypes.RECOMMENDED} {...data} />
                                </Col>
                            })}
                            <ViewMentorCard />
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
        </div>
    );
}


export default withRouter(MentortabComponent);