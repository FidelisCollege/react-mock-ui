import * as React from 'react';
import ProfileUpdate from "./profileUpdateComponent";
import MentorRecommendation from "./recommenndationsCard";
import MentorNotifications from "./notificationCard";


const MentorRightSection = () => {
    return (
        <div>
            <div className="card border-0 card-purpose tab-data m-3 m-lg-0 d-none d-lg-block">
                <div className="card-body card-shadow px-3">
                    <ProfileUpdate/>
                </div>
            </div>
            <div className="card border-0 card-purpose tab-data d-none d-lg-block mt-3">
                <div className="card-body card-shadow px-3">
                    <MentorRecommendation />
                </div>
            </div>
            <div className="card border-0 card-purpose tab-data d-none d-lg-block mt-3">
                <div className="card-body card-shadow px-3">
                    <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0">notifications</h3>
                    <hr></hr>
                    <div className="overflow-auto">
                        <MentorNotifications />
                        <MentorNotifications />
                        <MentorNotifications />
                        <MentorNotifications />
                        <MentorNotifications />
                        <MentorNotifications />
                        <MentorNotifications />
                        <MentorNotifications />
                        <MentorNotifications />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default  MentorRightSection;