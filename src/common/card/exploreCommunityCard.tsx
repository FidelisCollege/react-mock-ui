import * as React from 'react';
import {Button, Card, CardImg, Col, Row} from "reactstrap";
import {CommunityTypes} from "../../components/community/models/communityModels";


export interface CommunityCardProps {
    communityTypes: CommunityTypes ;
    memberCount: string;
    member: string;
    activityCount: string;
    activity: string;

}


const ExploreCommunityCard  = (props: CommunityCardProps) => {
    const {communityTypes, memberCount, member, activityCount, activity } = props;

    return (
        <Col xs="24" sm="8" md="12">
            <Card className="card-shadow border-0 cursor-pointer mb-2 community-card">
                <div className="d-flex align-items-center card-background">
                    <CardImg src="images/media-img.png" className="community-card-image"/>
                    <p className="mb-0 text-white f-13 ml-2 text-break">A larger community name</p>
                </div>
                <hr className='mt-0 mb-2'></hr>
                <Row className="align-items-center">
                    <Col sm="8" xs="8" className="text-center">
                        <a href="#" className="text-dark f-13 font-weight-bold">{memberCount}</a>
                        <h6 className="text-secondary f-13 text-capitalize">{member}</h6>
                    </Col>
                    <Col sm="8"  xs="8" className="text-center">
                        <a href="#" className="text-dark f-13 font-weight-bold">{activityCount}</a>
                        <h6 className="text-secondary f-13 text-capitalize">{activity}</h6>
                    </Col>
                    <Col sm="8"  xs="8" className="p-0 text-center">
                        <button className="btn btn-primary text-capitalize f-13 text-white">{communityTypes === CommunityTypes.JOIN ? 'post' : ' join'}</button>

                    </Col>
                </Row>
                <div className="card-close">
                    <i className="icon-close"></i>
                </div>
            </Card>
        </Col>



    );
}


export default  ExploreCommunityCard;