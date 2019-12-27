import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {useState} from "react";
import ResourcesDocumentComponent from "./resourceDocumentComponent";
import ResourcesDocumentWeblink from "./rexourceDocumentWeblink";

const CommunityResourceDocument = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="">
            <Nav tabs className="community-activity-tabs border-0 justify-content-start text-capitalize py-3">
                <div className="button-toggle d-flex p-0">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'document' })}
                            onClick={() => { toggle('document'); }}
                        >
                           document
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'weblink' })}
                            onClick={() => { toggle('weblink'); }}
                        >
                            weblink
                        </NavLink>
                    </NavItem>
                </div>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="document">
                    <ResourcesDocumentComponent/>
                </TabPane>
                <TabPane tabId="weblink">
                    <ResourcesDocumentWeblink/>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default CommunityResourceDocument;