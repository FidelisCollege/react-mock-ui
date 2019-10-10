import * as React from 'react';
import MentorNotifications from "../mentor/notificationCard";
import CommunityAnnouncements from "./Announcement-card";
import CommunityEvents from "./communityEvents";
import CommunityActivity from "./community-activity";





const CommunityRightSection = () => {
    return (
        <div>
            <div className="card border-0 card-purpose tab-data m-3 m-lg-0 d-none d-lg-block">
                <div className="card-body card-shadow px-3">
                    <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0 align-items-center">announcements (04)
                        <div className="border-0 d-block text-right f-13">
                            <a href="#" className="text-primary">view all</a>
                        </div>
                    </h3>
                    <hr></hr>
                    <div className="overflow-auto">
                        <CommunityAnnouncements/>
                        <CommunityAnnouncements/>
                        <CommunityAnnouncements/>
                    </div>

                </div>
            </div>
            <div className="card border-0 card-purpose tab-data d-none d-lg-block mt-3">
                <div className="card-body card-shadow px-3" >
                    <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0 align-items-center">Events (05)
                        <div className="border-0 d-block text-right f-13">
                            <a href="#" className="text-primary">view all</a>
                        </div>
                    </h3>
                    <hr></hr>
                    <div className="overflow-auto">
                        <CommunityEvents/>
                        <CommunityEvents/>
                        <CommunityEvents/>
                    </div>
                </div>
            </div>
            <div className="card border-0 card-purpose tab-data d-none d-lg-block mt-3">
                <div className="card-body card-shadow px-3">
                    <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0 align-items-center">Activities (10)
                        <div className="border-0 d-block text-right f-13">
                            <a href="#" className="text-primary">view all</a>
                        </div>
                    </h3>
                    <hr></hr>
                    <div className="overflow-auto">
                        <CommunityActivity/>
                        <CommunityActivity/>
                    </div>
                </div>
            </div>
            <div className="bg-md-primary position-fixed chat-wrapper px-4 py-2 rounded-top">
                <div className="d-md-flex d-none">
                    <div className="mr-5">
                        <h2 className="mb-0 text-white f-16">Christopher Puckey</h2>
                        <p className="mb-0 text-white f-13">Mentoring manager</p>
                    </div>
                    <a href="#" type="button" className="btn bg-white text-primary  rounded px-3 py-2 text-capitalize">ask</a>
                </div>
                <a href="#" type="button" className="btn bg-primary text-white rounded px-3 py-3 text-capitalize  rounded px-2 py-3 text-capitalize chat-wrapper d-md-none">ask</a>
            </div>

        </div>
    );
}


export default  CommunityRightSection;