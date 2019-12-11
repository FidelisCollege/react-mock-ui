import * as React from 'react';
import LeftNavComponent from "../../common/components/left-nav";
import MentorRightSection from "./mentorRightSection";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {useState} from "react";
import {any} from "prop-types";
import MentorDetailedComponent from "./mentorDetailedComponent";


const Example = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
}
class MentorDetail extends React.Component<any> {

    render() {
        return (

            <main className="dashboard-container student-details-wrapper">

                <div className="inner-container min-height-0 p-lg-3 d-lg-flex">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                        <div className="left-column d-lg-flex left-column d-none d-md-none d-lg-flex ">
                            <LeftNavComponent/>
                        </div>
                        <div className="student-details tab-data active d-flex flex-column flex-grow-1 px-md-3">
                            <div className="student-details d-flex flex-grow-1">
                                <MentorDetailedComponent/>
                            </div>
                        </div>
                        <div className="flex-column tab-data right-column d-none d-lg-flex">
                            <MentorRightSection/>
                        </div>
                    </div>
                </div>

            </main>
        );
    }
}




export default MentorDetail;
