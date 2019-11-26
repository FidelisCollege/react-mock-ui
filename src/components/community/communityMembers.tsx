import * as React from 'react';
import {Col, Row} from "reactstrap";
import DefaultMentorCard from "../mentor/mentorDefaultCards";
import {MentorTypes} from "../mentor/models/mentorModel";


const MentorData = {
    name: "Robert Watson",
    title: "Creative Lead",
    text: "ThinQbator Inc."
};

const CommunityMembers = () => {
    return (

        <div className="communities-detail-content d-flex flex-column h-100">
            <div className="d-flex   related-communities-header justify-content-between pb-2">
                <div className="search-input-group" id="searchBox">
                    <input className="form-control" type="text" placeholder="Search by name or skills" />
                </div>
            </div>
            <Row className="flex-grow-1 overflow-auto py-3 mx-0">
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>
                <Col xs="12" md="6" className="">
                    <DefaultMentorCard mentorType={MentorTypes.DEFAULT} {...MentorData} />
                </Col>


            </Row>
        </div>
    );
}

export default  CommunityMembers;
