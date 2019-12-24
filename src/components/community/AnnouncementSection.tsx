import * as React from 'react';

import { Media } from 'reactstrap';
import CommunityAnnouncementsCard from "../../common/card/communityAnnouncementCard";

const CommunityAnnouncements = () => {
    return (
        <div className="card border-0 card-purpose tab-data m-3 m-lg-0 d-none d-lg-block">
            <div className="card-body card-shadow px-3">
                <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0 align-items-center">announcements (04)
                    <div className="border-0 d-block text-right f-13">
                        <a href="#" className="text-primary">view all</a>
                    </div>
                </h3>
                <hr></hr>
                <div className="overflow-auto">
                    <CommunityAnnouncementsCard/>
                    <CommunityAnnouncementsCard/>
                    <CommunityAnnouncementsCard/>
                    <CommunityAnnouncementsCard/>
                    <CommunityAnnouncementsCard/>
                </div>

            </div>
        </div>





    );
}


export default  CommunityAnnouncements;