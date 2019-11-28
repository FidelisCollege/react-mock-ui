import * as React from 'react';
import { Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import DefaultMentorCard from "./menteeDefaultCards";
import AddmenteeCard from "./addmenteeCard";
import RecommendMentorTooltip from "./recommendTooltip";

import { MentorTypes } from "./models/mentorModel";
import ViewMentorCard from "../viewAllCard";
import { withRouter, RouterProps } from 'react-router';
import { RouteUrls } from '../routes/routesConfig';
import MentorTab from "./menteeTabMob";
import RequestTab from "./requeststab";
import RequestMentorChat from "./chatTab";
import {IconAdd} from "../../common";
import AddMentorButton from "../../common/card/addMentorButton";
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

const MenteeTabComponent = (props: MentortabProps) => {
    const { history } = props;
    const [activeTab, setActiveTab] = React.useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <div className="d-flex flex-column overflow-hidden">
            <div className="d-flex align-items-center justify-content-between  border-bottom">
                <h2 className="text-capitalize py-3 f-18 text-dark font-weight-normal">mentees dashboard</h2>
                <button className="btn btn-outline-primary invite-mentor-btn py-md-2 px-md-4 px-2">
                    <IconAdd className=""/>Invite Mentor
                </button>
            </div>
            <header className="border-bottom">
                <Nav pills className="d-flex justify-content-between align-items-center py-3">
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
                    <div className="f-14 d-flex d-flex mr-2">
                        <a href="#" className="text-capitalize text-primary">current</a>
                        <div className="px-2">|</div>
                        <a href="#" className="text-capitalize text-secondary">past</a>
                    </div>

                </Nav>
            </header>
            <div className="text-secondary f-14 py-2">You have 6 Mentor spot(s) still available.
                <a href="" className="text-primary">Click here</a> to change your max mentor limit.</div>
            <TabContent className="dashboard-tab-wrapper pt-2 overflow-auto" activeTab={activeTab}>
                <TabPane tabId="1" className="flex-grow-1">
                    <Row className="py-3 m-0">
                        <Col xs="12" md="8" className="d-none d-lg-block mb-2">
                            <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                        </Col>
                        <Col xs="" md="24" lg="8"  className="d-flex mb-2" onClick={() => history.push(RouteUrls.MENTOR_ADVANCE_SEARCH)}>
                            <AddmenteeCard />
                        </Col>
                    </Row>
                    <div>
                        <div className="pb-2 d-flex border-bottom align-items-center">
                            <h2 className="mb-0 font-weight-normal">Recommended Mentors</h2>
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
                <AddMentorButton/>
            </TabContent>
            {/*<RequestMentorChat/>*/}
        </div>








    );
}


export default withRouter(MenteeTabComponent);