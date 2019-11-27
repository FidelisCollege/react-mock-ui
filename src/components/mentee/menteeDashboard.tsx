import * as React from 'react';
import { Container } from 'reactstrap';

import MenteeRightSection from "./menteeRightSection";
import MenteeTab from "./menteeTabMob";
import AddmenteeSearch from "./addmenteeSearch";
import DefaultMentorCard from "./menteeDefaultCards";
import MenteetabComponent from "./menteeTabComponent";
import {withRouter} from "react-router";
import LeftNavComponent from "../../common/components/left-nav";

const MenteesDashboard = () => {
    return (
        <>
            <main className="dashboard-container student-profile">
                <div className="d-lg-none d-flex flex-column flex-grow-1 overflow-hidden">
                    <MenteeTab/>
                </div>
                <div className="inner-container min-height-0 p-lg-3 d-none d-lg-flex">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                        <div className="left-column d-lg-flex left-column d-none d-md-none d-lg-flex ">
                            <LeftNavComponent/>
                        </div>
                        <div className="student-details tab-data active d-flex flex-column flex-grow-1 px-md-3">
                            <MenteetabComponent/>
                        </div>
                        <div className="flex-column tab-data right-column d-none d-lg-flex">
                            <MenteeRightSection/>
                        </div>
                    </div>
                </div>
            </main>
        </>
        );
    }

export default (MenteesDashboard);