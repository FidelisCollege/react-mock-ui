
import * as React from 'react';
import CommunityActivityPostDetail from "./communityActivityPostDetail";
import CommunityActivityPost from "./communityActivityPost";
import {IconComment, IconLikeFilled, IconRecommend, IconReport} from "../../common";




const CommunityMissedActivity  = () => {
    return (
        <div className="media pb-0 text-capitalize">
            <div className="media-left">
                <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
            <div className="media-body">
                <h6 className="mb-0 person-message">
                    <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">mike holmes </a>
                    <span className="f-14 text-dark ml-1">missed a learning app</span>
                </h6>
                <time className="f-14 text-secondary">5 mins ago</time>
                <p className="text-dark f-14">aptitude text of army training</p>
                <div className="activity-footer px-4 py-2 d-flex justify-content-between align-items-center ">
                    <div className="d-flex">
                        <div className="cursor-pointer">
                            <IconComment className="text-secondary"/>
                            <span className="action-links">Comment</span>
                        </div>
                        <div className="cursor-pointer" data-toggle="modal" data-target="#recommendModal">
                            <IconRecommend className="text-secondary"/>
                            <span className="action-links"> Recommend</span>
                        </div>
                    </div>
                    <i className="icon-info-filled text-primary"></i>
                </div>
            </div>
        </div>

    );
}


export default  CommunityMissedActivity;