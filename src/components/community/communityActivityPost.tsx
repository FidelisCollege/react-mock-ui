
import * as React from 'react';
import {InputGroup} from "reactstrap";
import {IconComment, IconLikeFilled, IconReport} from "../../common";
import CommunityActivityPostDetail from "./communityEventPost";
import PostDropdown from "../../common/dropdown/postDropdown";


const CommunityActivityPost  = () => {
    return (
        <>
        <ul className="list-unstyled show-list-activity mb-0">
            <li className="py-3">
                <div className="media pb-0 text-capitalize">
                    <div className="media-left">
                        <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
                    <div className="media-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0 person-message">
                                <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">Resham Pal Pundalik </a>
                                <span className="f-14 text-dark ml-1 text-lowercase font-weight-normal">has posted  in Smoke Test</span>
                            </h6>
                            <PostDropdown/>
                        </div>
                        <time className="f-14 text-secondary d-flex">5 Sep 2019</time>
                        <hr/>
                        <p className="text-secondary f-14 pr-lg-5" >This course is ideal for beginners with an interest in ceramics and who wish
                            to participate in an enjoyable practical ceramics course...
                            <a href="#" className="text-capitalize text-primary f-14">See full details</a>
                        </p>
                        <div className="activity-footer px-2 py-2 d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <div>
                                    <a className="cursor-pointer action-links" href="#">
                                        <IconLikeFilled className="text-secondary mr-2"/>
                                        <span className="d-none d-lg-inline f-14">like</span>
                                    </a>
                                </div>

                                <a className="cursor-pointer action-links ml-5" href="#">
                                    <IconComment className="text-secondary mr-2"/>
                                    <span className="d-none d-lg-inline f-14">comment</span>
                                </a>
                            </div>
                            {/*<IconReport className="text-secondary"/>*/}
                        </div>
                    </div>
                </div>

            </li>
        </ul>
        </>
    );
}


export default  CommunityActivityPost;