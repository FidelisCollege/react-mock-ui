import * as React from 'react';
import {Button, Card, CardImg, Col, Row} from "reactstrap";





const ExploreCommunityCard  = () => {


    return (
        <Col xs="24" sm="8" md="12">
            <Card className="card-shadow border-0 cursor-pointer mb-2 community-card">
                <div className="d-flex align-items-center">
                    <CardImg src="images/media-img.png" className="community-card-image"/>
                    <p className="mb-0 text-dark f-13 text-truncate ml-2">A larger community name</p>
                </div>
                <hr className='mb-0 my-2'></hr>
                <Row className="align-items-center">
                    <Col sm="8" xs="8" className="text-center">
                        <a href="#" className="text-dark f-13 font-weight-bold">03</a>
                        <h6 className="text-secondary f-13 text-capitalize">member</h6>
                    </Col>
                    <Col sm="8"  xs="8" className="text-center">
                        <a href="#" className="text-dark f-13 font-weight-bold">03</a>
                        <h6 className="text-secondary f-13 text-capitalize">activity</h6>
                    </Col>
                    <Col sm="8"  xs="8" className="p-0 text-center">
                        <Button className="btn btn-outline-primary text-capitalize f-13">join</Button>

                    </Col>

                </Row>
            </Card>
        </Col>



    );
}


export default  ExploreCommunityCard;