import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MentortabComponent from "./menteeTabComponent";
import AddmenteeSearch from "./addmenteeSearch";
import {MentorTabNames} from "./helper/helpers";
import CommunityDasboard from "../community/CommunityDashboard";
import CommunityDashboard from "../community/CommunityDashboard";
import MenteeTabComponent from "./menteeTabComponent";



export default class TabComponents extends React.Component <{},any> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            activeMainTab: MentorTabNames.COACH,
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    onSelectMainTab = (mainTabName: MentorTabNames) => {
        this.setState({ activeMainTab: mainTabName });
    }

    render() {
        const {activeMainTab} = this.state;

        return (
            <div className="overflow-hidden d-flex flex-column flex-grow-1">

                    <div className="nav nav-tabs tab-icon-list-view custom-tabs py-2 border-bottom justify-content-between flex-shrink-0" id="nav-tab" role="tablist">
                        <a className={"nav-item nav-link" + (activeMainTab === MentorTabNames.COACH ? " active" : "")} onClick={() => this.onSelectMainTab(MentorTabNames.COACH)} id="nav-goal-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-goal" aria-selected="true">
                            <span className="title">{MentorTabNames.COACH}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === MentorTabNames.MENTORS ? " active" : "")} onClick={() => this.onSelectMainTab(MentorTabNames.MENTORS)} id="nav-team-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-team" aria-selected="false">
                            <span className="title">{MentorTabNames.MENTORS}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === MentorTabNames.MENTEES ? " active" : "")} onClick={() => this.onSelectMainTab(MentorTabNames.MENTEES)} id="nav-purpose-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-purpose" aria-selected="false">
                            <span className="title">{MentorTabNames.MENTEES}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === MentorTabNames.COMMUNITIES ? " active" : "")} onClick={() => this.onSelectMainTab(MentorTabNames.COMMUNITIES)} id="nav-recommend-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-recommend" aria-selected="false">
                            <span className="title">{MentorTabNames.COMMUNITIES}</span>
                        </a>
                    </div>

                    <div className="inner-container  min-height-0 p-lg-3 d-lg-none d-flex">
                        <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                            <div className={`list-team tab-data ${activeMainTab === MentorTabNames.COACH ? " active" : ""}  px-lg-3 px-md-3 p-2`} id="nav-coach">
                                Coach Component
                            </div>
                            <div className={`student-details tab-data ${activeMainTab === MentorTabNames.MENTORS ? " active" : ""} px-lg-3 px-md-3 p-2`} id="nav-mentor">
                                <MentortabComponent/>
                            </div>
                            <div className={`student-details tab-data ${activeMainTab === MentorTabNames.MENTEES ? " active" : ""} px-lg-3 p-2`} id="nav-mentees">
                                <MenteeTabComponent/>
                            </div>
                            <div className={`student-details tab-data ${activeMainTab === MentorTabNames.COMMUNITIES ? " active" : ""} px-lg-3 p-2`} id="nav-communities">
                                <CommunityDashboard/>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}