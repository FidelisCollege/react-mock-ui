import * as React from 'react';
import CommunityDetailsComponent from "./communityDetailsComponent";
import {Col, Row} from "reactstrap";
import {IconTrash} from "../../common";
import AddMentorCard from "../mentor/addmentorCard";
import AddImageCard from "../../common/card/addImageCard";




const AboutCommuinityDetails = () => {

        return (
            <div className="content-wrapper">
                <p className="f-14 text-light ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                </p>
                <div className="d-flex align-items-center flex-wrap">
                    <div className="mb-2 position-relative mr-2"  >
                        <img className="cursor-pointer about-us-image img-fluid" src="images/media-img.png" alt=""/>
                        <a href="" className="delete-image-bg">
                            <IconTrash className="position-absolute delete-image-icon text-white"/>
                        </a>
                    </div>
                    <div className="mb-2 position-relative mr-2">
                        <img className="cursor-pointer about-us-image img-fluid" src="images/media-img.png" alt=""/>
                        <a href="" className="delete-image-bg">
                            <IconTrash className="position-absolute delete-image-icon text-white"/>
                        </a>
                    </div>
                    <div className="mb-2 position-relative mr-2">
                        <img className="cursor-pointer about-us-image img-fluid " src="images/media-img.png" alt=""/>
                        <a href="" className="delete-image-bg">
                            <IconTrash className="position-absolute delete-image-icon text-white"/>
                        </a>
                    </div>
                    <a className="mb-2 about-us-image d-flex" href="">
                        <AddImageCard />
                    </a>
                </div>
                <div className="mt-4">
                    <h3 className="text-capitalize f-14 text-dark">active since</h3>
                    <div className="text-capitalize f-14 text-light">01 Feb 2018</div>
                </div>
                <div className="mt-4">
                    <h3 className="text-capitalize f-14 text-dark">sub communities</h3>
                    <p className="text-capitalize f-14 text-light mb-0">Climbers Sub Community 1</p>
                    <p className="text-capitalize f-14 text-light mb-0">Climbers Sub Community 2</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-capitalize f-14 text-dark">community manager</h3>
                    <p className="text-capitalize f-14 text-light mb-0">Laura Guzman</p>

                </div>
            </div>
        );
    }
export default AboutCommuinityDetails;