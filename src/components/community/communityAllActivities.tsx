
import * as React from 'react';
import CommunityActivityPostDetail from "./communityEventPost";
import CommunityActivityPost from "./communityActivityPost";
import CommunityActivityEventPost from "./communityEventPost";
import CommunityActivityAnnouncement from "./communityActivityAnnouncement";






const CommunityAllActivity  = () => {
    return (
        <ul className="list-unstyled show-list-activity mb-0">
            <li className="py-3">
                <CommunityActivityEventPost/>
            </li>
            <li>
                <CommunityActivityAnnouncement/>
            </li>
            <li>
                <CommunityActivityPost/>
            </li>





        </ul>
    );
}


export default  CommunityAllActivity;