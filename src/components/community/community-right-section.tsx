import * as React from 'react';
import MentorNotifications from "../mentor/notificationCard";
import CommunityAnnouncements from "./Announcement-card";
import CommunityEvents from "./communityEvents";
import CommunityActivity from "./community-activity";
import {Media} from "reactstrap";
import ChatWrapper from "./chatWrapper";





const CommunityRightSection = () => {
    return (
        <div className="overflow-auto flex-grow-1 pb-5">
            <CommunityAnnouncements/>
            <CommunityEvents/>
            <CommunityActivity/>
            <ChatWrapper/>
        </div>
    );
}


export default  CommunityRightSection;