import * as React from 'react';
import {Button, Card, CardImg, Col, Row} from "reactstrap";
import {CommunityTypes} from "./models/communityModels";
import CommunityCard from "./community-tab-compomponent";
import ExploreCommunityCard from "../../common/card/exploreCommunityCard";


const CommuntiyData = {
    memberCount: "03",
    member: "member",
    activityCount: "03",
    activity: "activity"
}
const ExploreCommunityTab  = () => {


    return (
        <>
            <div className="search-input-group form-control py-2 mt-2 mt-lg-3" id="searchBox">
                <input className="form-control  border-0  rounded-0 py-0" type="text" placeholder="Search communities" />
            </div>
            <hr className="my-2 my-lg-3"></hr>
            <div className="d-flex align-items-center justify-content-between px-2">
                <a href='#' className="f-14 text-light">04 results</a>
                <div className="d-none d-md-block">
                    <a className="text-capitalize card-sort-buttons btn f-14 btn-lg" href="#">alphabetical</a>
                    <a className="text-capitalize btn f-14 card-sort-buttons btn-lg active mx-1" href="#">number of app</a>
                    <a className="text-capitalize f-14 card-sort-buttons btn btn-lg" href="#">community size</a>
                </div>
                <div className="d-flex justify-content-end align-items-center  d-lg-none w-70">
                    <span className="f-14 text-light mr-1 text-capitalize">sort by:</span>
                    <div className="input-group py-2 sort-select w-auto">
                        <select className="custom-select py-2" id="inputGroupSelect04">
                            <option className="text-capitalize" selected >Number Of App</option>
                            <option value="1">One</option>

                        </select>
                    </div>
                </div>
            </div>
            <Row className="py-lg-3 py-3 m-0">
                <ExploreCommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                <ExploreCommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                <ExploreCommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>
                <ExploreCommunityCard communityTypes={CommunityTypes.JOIN} {...CommuntiyData}/>

            </Row>



        </>




    );
}


export default  ExploreCommunityTab;