import * as React from 'react';
import CommunityDetailComponent from "./communityDetailsComponent";
import LeftNavComponent from "../../common/components/left-nav";


const CommunityProfile = () => {
    return (
        <>
            <main className="dashboard-container student-profile">
                <div className="inner-container min-height-0 p-lg-3">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100">
                        <div className="left-column d-none d-md-block">
                            <LeftNavComponent/>
                        </div>
                        <div className="student-details tab-data active w-100 pl-lg-3 p-2 d-flex flex-column overflow-auto">
                            <h3 className="text-capitalize text-primary pt-3 f-18">
                                <i className="icon-caret-left text-primary f-14 mr-2 font-weight-bold"></i>my communities
                            </h3>
                            <div className="position-relative profile-banner-wrapper">
                                <img src='images/profile-background.png' className="w-100 img-fluid h-100 banner-img"/>
                                <div className="profile-banner-content w-100 h-100 p-3 d-md-flex">
                                    <div className="d-flex align-items-center">
                                        <img src="images/media-img.png" alt="..." className="profile-img"/>
                                        <h6 className="profile-banner-heading text-white font-weight-bold ml-3">Community for Mountaineers & Trekkers of North America
                                            <div className="d-flex f-14 font-weight-normal mt-2">
                                                <a href="" className=" text-white">2.5K Members</a>
                                                <div className="ml-1 mr-1">|</div>
                                                <a href="" className=" text-white">980 Activities</a>
                                            </div>
                                        </h6>
                                    </div>
                                    <div className="d-flex joinned-badge">
                                        <span className="badge badge-pill bg-info text-white d-flex align-items-center">
                                            <div className="joined-wrapper mr-1"><i className="icon-check"></i></div>
                                            <span className="font-weight-normal  text-uppercase">joined</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <CommunityDetailComponent/>
                        </div>
                    </div>
                </div>
             </main>
        </>
    );
}

export default  CommunityProfile;
