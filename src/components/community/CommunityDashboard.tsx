import * as React from 'react';
import CommunityRightSection from "./community-right-section";
import CommunityTabComponent from "./community-tab-compomponent";
import MentortabComponent from "../mentor/mentorTabComponent";
import TabComponents from "../mentor/mentorTab";



const CommunityDashboard = () => {
    return (
        <main className="dashboard-container student-profile">

            <div className="border-bottom d-lg-none d-flex flex-grow-1 tab-content-wrapper min-height-0">
                <TabComponents/>
            </div>
            <div className="inner-container min-height-0 p-lg-3">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100 px-3">
                    <div className="left-column bg-primary d-none d-md-block"></div>
                    <div className="student-details tab-data active w-100">
                       <CommunityTabComponent/>
                    </div>
                    <div className="flex-column tab-data right-column d-none d-md-block">
                        <CommunityRightSection/>
                    </div>
                </div>
            </div>


        </main>
    );
}

export default CommunityDashboard;