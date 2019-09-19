import * as React from 'react';
import { Container } from 'reactstrap';
import  MentortabComponent from './mentorTabComponent';
import MentorRightSection from "./mentorRightSection";

const AdvanceSearch = () => {
    return (
        <div className="inner-container min-height-0 p-lg-3">
            <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                <div className="list-team tab-data left-column bg-primary"></div>
                <div className="student-details tab-data active px-3 w-100">
                    <MentortabComponent/>
                </div>
                <div className="flex-column main-content tab-data right-column ">
                    <MentorRightSection/>
                </div>
            </div>

        </div>
    );
}


export default  AdvanceSearch;