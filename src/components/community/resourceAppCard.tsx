import * as React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import CommunityActivityPostDetail from "./communityAllActivities";
import {IconAdd, IconBookMark} from "../../common";

const ResourceAppCard = () => {
    return (

        <div className="media pb-0 text-capitalize resource-app-card">
            <div className="media-left">
                <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/>
            </div>
            <div className="media-body border-bottom d-flex justify-content-between align-items-center pb-4">
                <div className=" ">
                    <h6 className="mb-0 person-message">
                        <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">App name 1</a>
                    </h6>
                    <p className="f-12 text-secondary mb-0">App description can come in this line</p>
                </div>
                <div>
                    <a href="#">
                        <IconBookMark className="icon-bookmark"/>
                    </a>
                    <a  href="#">
                        <IconAdd className="text-primary ml-2 p-1"/>
                    </a>

                </div>

            </div>
        </div>

    );
}


export default  ResourceAppCard;