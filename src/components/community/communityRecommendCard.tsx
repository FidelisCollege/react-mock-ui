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
const CommunityRecommendCard  = (props: CommunityCardProps) => {
    const {communityTypes, memberCount, member, activityCount, activity } = props;

    return (
        <Card className="card-shadow border-0 cursor-pointer mb-2 community-card p-0">
            <div className="d-flex align-items-center card-background">
                <CardImg src="images/media-img.png" className="community-card-image"/>
                <p className="mb-0 text-white f-13 ml-2 text-break">A larger community name</p>
            </div>
            <hr className='mt-0 mb-2'></hr>
            <div className="d-flex">
                <Row className="align-items-center w-50">
                    <Col sm="6" xs="6" className="text-center">
                        <a href="#" className="text-dark f-13 font-weight-bold">03</a>
                        <h6 className="text-secondary f-13 text-capitalize">member</h6>
                    </Col>
                    <Col sm="6" xs="6" className="text-center">
                        <a href="#" className="text-dark f-13 font-weight-bold">02</a>
                        <h6 className="text-secondary f-13 text-capitalize">activity</h6>
                    </Col>

                </Row>
                <Row className="w-50">
                    <Col sm="6" xs="6" className="p-0 text-center">
                        <button className="btn btn-primary text-capitalize f-13 text-white">accept</button>
                    </Col>
                    <Col sm="6" xs="6" className="p-0 text-center">
                        <button className="btn btn-primary text-capitalize f-13 text-white">reject</button>

                    </Col>
                </Row>
            </div>



            <div className="card-close">
                <i className="icon-close"></i>
            </div>
        </Card>



    );
}


export default  CommunityRecommendCard;