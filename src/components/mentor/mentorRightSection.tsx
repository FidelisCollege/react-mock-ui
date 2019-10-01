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


export default  MentorRightSection;