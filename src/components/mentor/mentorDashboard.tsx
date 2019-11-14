import * as React from 'react';
import { Container } from 'reactstrap';

import MentorRightSection from "./mentorRightSection";
import MentorTab from "./mentorTab";
import AddMentorSearch from "./addmentorSearch";
import DefaultMentorCard from "./mentorDefaultCards";
import MentortabComponent from "./mentorTabComponent";
import {withRouter} from "react-router";
import LeftNavComponent from "../../common/components/left-nav";

const MentorDashboard = () => {
    return (
        <>
            <main className="dashboard-container student-profile">
                <div className="d-lg-none d-flex flex-column flex-grow-1 overflow-hidden">
                    <MentorTab/>
                </div>
                <div className="inner-container min-height-0 p-lg-3 d-none d-md-flex">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                        <div className="left-column d-lg-flex left-column d-none d-md-none d-lg-flex ">
                            <LeftNavComponent/>
                        </div>
                        <div className="student-details tab-data active px-3 d-flex flex-column flex-grow-1">
                            <MentortabComponent/>
                        </div>
                        <div className="flex-column tab-data right-column d-none d-lg-flex">
                            <MentorRightSection/>
                        </div>
                    </div>
                </div>
            </main>
        </>
        );
    }

export default (MentorDashboard);