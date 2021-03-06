import * as React from 'react';
import { Container } from 'reactstrap';

import MentorRightSection from "./mentorRightSection";
import MentorTab from "./mentorTab";
import AddMentorSearch from "./addmentorSearch";
import DefaultMentorCard from "./mentorDefaultCards";
import MentortabComponent from "./mentorTabComponent";
import {withRouter} from "react-router";

const MentorDashboard = () => {
    return (
        <main className="dashboard-container student-profile">

                <div className="border-bottom d-lg-none d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100">
                    <MentorTab/>
                </div>
                <div className="inner-container min-height-0 p-lg-3 d-none d-md-block">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100">
                        <div className="left-column bg-primary d-none d-md-block"></div>
                        <div className="student-details tab-data active px-3 w-100">
                            <MentortabComponent/>
                        </div>
                        <div className="flex-column tab-data right-column d-none d-md-block">
                            <MentorRightSection/>
                        </div>
                    </div>
                </div>


        </main>
        );
    }

export default (MentorDashboard);