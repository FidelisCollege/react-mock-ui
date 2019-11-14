import * as React from 'react';
import {Button, Card, CardImg, Col, Row} from "reactstrap";
import CommunityCard, {CommunityCardProps} from "./community-card";
import {CommunityTypes} from "./models/communityModels";

const RelatedCommunities  = (props: CommunityCardProps) => {
    const {communityTypes, memberCount, member, activityCount, activity } = props;

    return (
        <Row className="mt-md-5 mt-3">
            <Col xs="24" sm="8">
                <Card className="card-shadow border-0 cursor-pointer mb-2 community-card">
                    <div className="d-flex align-items-center">
                        <CardImg src="images/media-img.png" className="community-card-image"/>
                        <p className="mb-0 text-dark f-13 text-truncate ml-2">A larger community name</p>
                    </div>
                    <hr className='mb-0 my-2'></hr>
                    <Row className="align-items-center">
                        <Col sm="8" xs="8" className="text-center">
                            <a href="#" className="text-dark f-13 font-weight-bold">{memberCount}</a>
                            <h6 className="text-secondary f-13 text-capitalize">{member}</h6>
                        </Col>
                        <Col sm="8"  xs="8" className="text-center">
                            <a href="#" className="text-dark f-13 font-weight-bold">{activityCount}</a>
                            <h6 className="text-secondary f-13 text-capitalize">{activity}</h6>
                        </Col>
                        <Col sm="8"  xs="8" className="p-0">
                            <button className="btn btn-outline-primary text-capitalize f-13">{communityTypes === CommunityTypes.POST ? 'post' : ' join'}</button>

                        </Col>

                    </Row>
                </Card>
            </Col>
        </Row>
    );
}


export default  RelatedCommunities;