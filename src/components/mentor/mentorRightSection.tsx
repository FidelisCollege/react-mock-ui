import * as React from 'react';
import ProfileUpdate from "./profileUpdateComponent";
import MentorRecommendation from "./recommenndationsCard";


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
                    <MentorRecommendation />
                </div>
            </div>
        </div>
    );
}


export default  MentorRightSection;