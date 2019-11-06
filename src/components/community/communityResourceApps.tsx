import * as React from 'react';
import ResourceAppCard from "./resourceAppCard";
import {IconBookMark} from "../../common";



const CommunityResourceApp = () => {
    return (

        <ul className="list-unstyled show-list-activity mb-0 resource-app-list py-3">
            <li className="py-3 active">
                <ResourceAppCard/>
            </li>

            <li className="py-3">
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
                                <IconBookMark className="icon-bookmark text-primary"/>
                            </a>
                            <button type="button" className="btn btn-outline-primary text-capitalize px-4 ml-2">add</button>
                        </div>

                    </div>
                </div>
            </li>
            <li className="py-3">
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
                            <a href="#" className="text-secondary font-italic f-12 mr-2">added</a>
                        </div>

                    </div>
                </div>

            </li>

        </ul>
    );
}

export default  CommunityResourceApp;
