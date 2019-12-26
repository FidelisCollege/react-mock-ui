import * as React from 'react';
import CommunityDetailComponent from "./communityDetailsComponent";
import LeftNavComponent from "../../common/components/left-nav";
import {IconleftCaret} from "../../common";
import CommunityMemberBadge from "../../common/badges/communityMemberBadge";


const CommunityMember = () => {
    return (
        <>

            <main className="dashboard-container student-profile">
                <div className="inner-container min-height-0 p-lg-3">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100">
                        <div className="left-column d-lg-flex left-column d-none d-md-none d-lg-flex ">
                            <LeftNavComponent/>
                        </div>
                        <div className="student-details tab-data active flex-grow-1 pl-lg-3 d-flex flex-column p-2">
                            <h3 className="text-capitalize text-primary f-18">
                                <IconleftCaret className="icon-caret-left text-primary mr-1 mb-2"/>my communities
                            </h3>
                             <div className="profile-banner-wrapper">
                                <div className="profile-banner-content d-md-flex">
                                    <div className="d-flex align-items-center">
                                        <img src="images/media-img.png" alt="..." className="profile-img"/>
                                        <h6 className="profile-banner-heading text-white font-weight-bold ml-3">Community for Mountaineers & Trekkers of North America
                                            <div className="d-flex f-14 font-weight-normal py-2">
                                                <a href="" className=" text-white">2.5K Members</a>
                                                <div className="ml-1 mr-1">|</div>
                                                <a href="" className=" text-white">980 Activities</a>
                                            </div>
                                            <div className="f-14 d-flex font-weight-normal text-capitalize flex-column flex-md-row">
                                                <div className="d-flex">
                                                    <label>email:</label>
                                                    <a href="" className="text-white ml-1 text-truncate"> averylongcommunityname@fidelis-inc</a>
                                                </div>
                                                <div className="ml-1 mr-1 d-none d-md-block">|</div>
                                                <div className="d-flex">
                                                    <label>phone:</label>
                                                    <a href="" className="text-white ml-1"> +1 123 234 2345</a>
                                                </div>
                                            </div>
                                        </h6>
                                    </div>
                                    <CommunityMemberBadge/>
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

export default  CommunityMember;
