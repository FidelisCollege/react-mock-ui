
import * as React from 'react';
import {InputGroup} from "reactstrap";
import {IconComment, IconLikeFilled, IconReport} from "../../common";


const CommunityActivityPostDetail  = () => {
    return (

        <div className="media pb-0 text-capitalize">
            <div className="media-left">
                <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
            <div className="media-body">
                <h6 className="mb-0 person-message">
                    <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">Resham Pal Pundalik </a>
                    <span className="f-14 text-dark ml-1 text-lowercase font-weight-normal">has posted an event in Smoke Test</span>
                </h6>
                <time className="f-12 text-secondary pb-3 border-bottom d-flex">5 minutes ago</time>

                <div className="d-flex pt-3">
                    <div className="mr-3 text-center">
                        <p className="f-14 text-dark mb-0">sep</p>
                        <p className=" f-16 font-weight-bold text-dark mb-0">20</p>
                    </div>
                    <div>
                        <p className="text-capitalize mb-0 f-14 text-light">advance certified scrum master program</p>
                        <p className="post-location mb-0 f-13 text-secondary">Radisson Blu Hotel, Mumbai</p>
                        <time className="f-13 text-secondary">03:00 pm - 05:00 pm</time>
                    </div>
                </div>


                <div className="activity-footer px-2 py-2 d-flex justify-content-between align-items-center">
                    <div>
                        <a className="cursor-pointer action-links" href="#">
                            <IconLikeFilled className="text-secondary mr-2"/>
                            <span className="d-none d-lg-inline f-14">like</span>
                        </a>
                        <a className="cursor-pointer action-links ml-5" href="#">
                            <IconComment className="text-secondary mr-2"/>
                            <span className="d-none d-lg-inline f-14">comment</span>
                        </a>
                    </div>
                    <a className="cursor-pointer action-links ml-5" href="#">
                        <IconReport className="text-secondary"/>
                    </a>
                </div>
            </div>
        </div>



    );
}


export default  CommunityActivityPostDetail;