import * as React from 'react';
import CommunityAllActivityCard from "../../common/card/allActivityCard";
import LeftNavComponent from "../../common/components/left-nav";
import CommunityRightSection from "./community-right-section";

const ShowingAllActivity  = () => {
    return (

        <main className="dashboard-container student-profile">
            <div className="inner-container min-height-0 p-lg-3 d-md-block">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100">
                    <div className="left-column d-none d-md-none d-lg-flex ">
                        <LeftNavComponent/>
                    </div>
                    <div className="student-details tab-data active px-3 d-flex flex-column flex-grow-1">
                        <div className="card border-0 h-100">
                            <div className="card-body d-flex flex-column mh-100">
                                <h2 className="card-title text-capitalize text-dark f-14 py-3 d-flex justify-content-between">showing all activities
                                    <a href="#" className="text-primary">close</a>
                                </h2>
                                <ul className="list-unstyled show-list-activity mb-0 overflow-auto flex-grow-1">
                                    <CommunityAllActivityCard/>
                                    <CommunityAllActivityCard/>
                                    <CommunityAllActivityCard/>
                                    <CommunityAllActivityCard/>
                                    <CommunityAllActivityCard/>
                                    <CommunityAllActivityCard/>
                                    <CommunityAllActivityCard/>
                                    <CommunityAllActivityCard/>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex-column tab-data right-column d-none d-lg-flex">
                        <CommunityRightSection/>
                    </div>
                </div>
            </div>
        </main>



    );
}


export default  ShowingAllActivity;