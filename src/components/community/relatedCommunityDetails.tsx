
import * as React from 'react';
import {MentorTypes} from "../mentor/models/mentorModel";
import DefaultMentorCard from "../mentor/mentorTabComponent";
import {Button, Card, CardImg, Col, Row} from "reactstrap";
import CommunityCard, {CommunityCardProps} from "./community-card";
import {CommunityTypes} from "./models/communityModels";

const RelatedCommunityDetails  = () => {
    return (
        <div className="communities-detail-content d-flex flex-column h-100">
            <div className="d-flex  pb-3 related-communities-header justify-content-between">
                <div className="search-input-group" id="searchBox">
                    <input className="form-control" type="text" placeholder="Search by name or skills" />
                </div>
                <div className="d-flex align-items-center">
                    <span className="f-14 text-light mr-2 text-capitalize text-nowrap">sort by:</span>
                    <div className="input-group sort-select">
                        <select className="custom-select py-2" id="inputGroupSelect04">
                        <option className="text-capitalize">community size</option>
                        <option value="1">One</option>
                    </select></div>
                </div>
            </div>
            <Row className="pt-1 flex-grow-1 overflow-auto m-0 card-row">
                <Col xs="24" sm="8" className="card-col">
                    <CommunityCard communityTypes={CommunityTypes.JOIN} memberCount="" member="" activityCount="" activity=""/>
                </Col>
                <Col xs="24" sm="8" className="card-col">
                    <CommunityCard communityTypes={CommunityTypes.JOIN} memberCount="" member="" activityCount="" activity=""/>
                </Col>
            </Row>
        </div>
    );
}


export default  RelatedCommunityDetails;