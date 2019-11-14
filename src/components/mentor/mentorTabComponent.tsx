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
import RequestTab from "./requeststab";
import RequestMentorChat from "./chatTab";
// import {IconAdd} from "../../common";

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
        <div className="d-flex flex-column overflow-hidden">
            <header className="border-bottom pb-md-2">
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
                        <Button className="btn btn-outline-primary invite-mentor-btn py-md-2 px-md-4">
                            <i className="icon-add mr-2"></i>
                            Invite Mentor</Button>
                    </div>
                </Nav>
            </header>
            <TabContent className="dashboard-tab-wrapper pt-2 overflow-auto" activeTab={activeTab}>
                <TabPane tabId="1" className="flex-grow-1">
                    <Row className="py-3 m-0">
                        <Col xs="12" md="8" className="d-none d-lg-block mb-2">
                            <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                        </Col>
                        <Col xs="" md="8" className="d-flex mb-2" onClick={() => history.push(RouteUrls.MENTOR_ADVANCE_SEARCH)}>
                            <AddMentorCard />
                        </Col>
                    </Row>
                    <div>
                        <div className="pb-2 d-flex border-bottom align-items-center">
                            <h2 className="mb-0">Recommended Mentors</h2>
                            <RecommendMentorTooltip />
                        </div>
                        <Row className="py-3 m-0">
                            {RecommendedMentorData.map((data, index) => {
                                return <Col xs="12" sm="8" className="mb-2" key={index}>
                                    <DefaultMentorCard mentorType={MentorTypes.RECOMMENDED} {...data} />
                                </Col>
                            })}
                            <Col xs="12" sm="8" className="d-flex mb-2">
                                <ViewMentorCard />
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tabId="2" className="">
                    <RequestTab/>
                </TabPane>
                <button className="d-lg-none btn-block-custom add-mentor-button">
                    <i className="icon-add mr-2"></i>Add mentor
                </button>
            </TabContent>
            {/*<RequestMentorChat/>*/}
        </div>








    );
}


export default withRouter(MentortabComponent);