
import * as React from 'react';
import CommunityActivityPostDetail from "./communityActivityPostDetail";
import CommunityActivityPost from "./communityActivityPost";
import CommunityMissedActivity from "./CommunityMissedApp";





const CommunityAllActivity  = () => {
    return (
        <ul className="list-unstyled show-list-activity mb-0 overflow-auto">
            <li className="py-3">
                <CommunityActivityPostDetail/>
            </li>
            <li>
                <CommunityMissedActivity/>
            </li>


        </ul>
    );
}


export default  CommunityAllActivity;