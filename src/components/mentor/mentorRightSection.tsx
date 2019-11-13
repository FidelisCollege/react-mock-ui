import * as React from 'react';
import ProfileUpdate from "./profileUpdateComponent";
import MentorResources from "./resourceCard";
import MentorNotifications from "./notificationCard";
import {RouteUrls} from "../routes/routesConfig";
import AddMentorCard from "./mentorTabComponent";
import {Col} from "reactstrap";
import ChatWrapper from "../community/chatWrapper";



const MentorRightSection = () => {
    return (
        <div className="right-section-actions flex-grow-1 overflow-auto">
            <div className="card border-0 card-purpose tab-data m-3 m-lg-0 d-none d-lg-block action-cards">
                <div className="card-body card-shadow px-3">
                    <ProfileUpdate/>
                </div>
            </div>
            <div className="card border-0 card-purpose tab-data d-none d-lg-block mt-3">
                <div className="card-body card-shadow px-3" >
                    <MentorResources />
                </div>
            </div>
            <div className="card border-0 card-purpose tab-data d-none d-lg-block mt-3">
                <div className="card-body card-shadow px-3">
                    <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0">notifications</h3>
                    <hr></hr>
                    <div className="overflow-auto right-card-data">
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
            <ChatWrapper/>
        </div>
    );
}


export default  MentorRightSection;