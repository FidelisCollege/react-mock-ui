import * as React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Row, Col} from 'reactstrap';
import {CommunityTypes} from "./models/communityModels";


export interface CommunityCardProps {
    communityTypes: CommunityTypes ;
    memberCount: string;
    member: string;
    activityCount: string;
    activity: string;

}
const CommunityCard  = (props: CommunityCardProps) => {
    const {communityTypes, memberCount, member, activityCount, activity } = props;

    return (
        <Card className="card-shadow border-0 cursor-pointer mb-2 community-card">
            <div className="d-flex align-items-center">
                <CardImg src="images/media-img.png" className="community-card-image"/>
                <p className="mb-0 text-dark f-13 text-truncate ml-2">A larger community name</p>
            </div>
            <hr className='mb-0 mt-1'></hr>
            <Row className="align-items-center">
                <Col sm="8" xs="8" className="text-center">
                    <a href="#" className="text-dark f-13 font-weight-bold">{memberCount}</a>
                    <h6 className="text-secondary f-13 text-capitalize">{member}</h6>
                </Col>
                <Col sm="8"  xs="8" className="text-center">
                    <a href="#" className="text-dark f-13 font-weight-bold">{activityCount}</a>
                    <h6 className="text-secondary f-13 text-capitalize">{activity}</h6>
                </Col>
                <Col sm="8"  xs="8">
                    <Button className="btn btn-outline-primary text-capitalize f-13">{communityTypes === CommunityTypes.POST ? 'post' : ' join'}</Button>

                </Col>

            </Row>
        </Card>


    );
}


export default  CommunityCard;