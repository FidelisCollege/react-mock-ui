import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import DefaultMentorCard from "./mentorDefaultCards";
import RequestMentorCard from "./requestMentorCard";
import AddMentorCard from "./addmentorCard";

const MentortabComponent = () => {
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
                                className={"tab-buttons btn btn-primary text-capitalize" + (activeTab === '1' ? ' active ' : '')}
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

            <TabContent className="h-100" activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col md="6">
                        <DefaultMentorCard/>
                        </Col>
                        <Col md="6">
                            <DefaultMentorCard/>
                        </Col>
                        <Col md="6">
                            <DefaultMentorCard/>
                        </Col>
                        <Col md="6">
                            <DefaultMentorCard/>
                        </Col>
                        <AddMentorCard/>
                        {/*<RequestMentorCard/>*/}
                    </Row>
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


export default MentortabComponent;