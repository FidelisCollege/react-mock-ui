import * as React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Row, Col} from 'reactstrap';
import {MentorTypes} from "../mentor/models/mentorModel";


const CommunityCard = () => {


    return (
        <Card className="card-shadow border-0 cursor-pointer mb-2 community-card">
            <div className="d-flex align-items-center">
                <CardImg src="images/media-img.png" className="community-card-image"/>
                <p className="mb-0 ml-3 text-dark f-13">A larger community name can come here A larger community name can come here</p>
            </div>
            <hr></hr>
            <Row className="align-items-center">
                <Col sm="8" xs="8" className="text-center">
                    <a href="#" className="text-dark f-13 font-weight-bold">03</a>
                    <h6 className="text-secondary f-13 text-capitalize">member</h6>
                </Col>
                <Col sm="8"  xs="8" className="text-center">
                    <a href="#" className="text-dark f-13 font-weight-bold">03</a>
                    <h6 className="text-secondary f-13 text-capitalize">activity</h6>
                </Col>
                <Col sm="8"  xs="8">
                    <Button className="btn btn-outline-primary text-capitalize f-13">post</Button>

                </Col>

            </Row>
        </Card>


    );
}


export default  CommunityCard;