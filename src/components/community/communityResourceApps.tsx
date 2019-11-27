import * as React from 'react';
import ResourceAppCard from "./resourceAppCard";
import {IconBookMark} from "../../common";



const CommunityResourceApp = () => {
    return (

        <ul className="list-unstyled show-list-activity mb-0 resource-app-list py-3 h-100 overflow-auto">
            <li className="py-3 active">
                <ResourceAppCard/>
            </li>
            <li className="py-3 active">
                <ResourceAppCard/>
            </li>
            <li className="py-3 active">
                <ResourceAppCard/>
            </li>
            <li className="py-3 active">
                <ResourceAppCard/>
            </li>
            <li className="py-3 active">
                <ResourceAppCard/>
            </li>
        </ul>
    );
}

export default  CommunityResourceApp;
