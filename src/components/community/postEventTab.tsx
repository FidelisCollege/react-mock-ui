import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {useState} from "react";
import PostEventsTabContent from "./postEventTabContent";

const PostEventTabComponent = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="d-flex flex-column  flex-grow-1">
            <Nav pills className="pb-2 pt-0 border-bottom community-activity-tabs overflow-auto">
                <div className="d-flex">
                    <NavItem className="">
                        <NavLink
                            className={"text-capitalize" + (activeTab === '1' ? ' active ' : '')}
                            onClick={() => toggle('1')}
                        >
                            posts
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={"text-capitalize btn" + (activeTab === '2' ? ' active ' : '')}
                            onClick={() => toggle('2')}
                        >
                            announcements
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={"text-capitalize btn" + (activeTab === '3' ? ' active ' : '')}
                            onClick={() => toggle('3')}
                        >
                            events
                        </NavLink>
                    </NavItem>

                </div>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    abs
                </TabPane>
                <TabPane tabId="2">
                    abc
                </TabPane>
                <TabPane tabId="3" className="event-content-wrapper">
                    <PostEventsTabContent/>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default PostEventTabComponent;