import * as React from 'react';
import CommunityRightSection from "./community-right-section";
import CommunityTabComponent from "./community-tab-compomponent";
import TabComponents from "../mentor/mentorTab";
import LeftNavComponent from "../../common/components/left-nav";



const CommunityDashboard = () => {
    return (
        <main className="dashboard-container student-profile">
            <div className="inner-container min-height-0 p-lg-3">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100">
                    <div className="left-column d-lg-flex left-column d-none d-md-none d-lg-flex ">
                        <LeftNavComponent/>
                    </div>
                    <div className="student-details tab-data active w-100">

                       <CommunityTabComponent/>
                    </div>
                    <div className="flex-column tab-data right-column d-none d-lg-flex">
                        <CommunityRightSection/>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default CommunityDashboard;