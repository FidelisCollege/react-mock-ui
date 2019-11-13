
import * as React from 'react';
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import OutgoingMentorActions from "./requestMentorDropdown";

export default class OutgoingRequestCard extends React.Component {
    render() {
        return (
            <ListGroupItem className="media mb-3 card-shadow p-2 px-lg-3 py-lg-4 d-flex align-items-center">
                <div className="pr-1">
                    <img src="images/media-img.png" alt="..." className="border media-img"/>
                </div>
                <Row className="w-100 align-items-center ">

                    <Col xs="16" sm="16" className="pl-2">
                        <h5 className="mb-0 text-dark">Mike Holmes</h5>
                        <p className="text-dark f-13 mb-0 text-truncate">Visual designer @ Ron design Labs, Abu Dhabi</p>
                        <div className="d-flex f-13 text-secondary">
                            <a href="" className="text-secondary">24 Mentees</a>
                            <div className="ml-1 mr-1 text-secondary">|</div>
                            <a href="" className="text-secondary"> 02 Mentors</a>
                        </div>
                    </Col>
                    <Col xs="8" sm="8" className="">
                        <div className="d-md-flex justify-content-end d-none">
                            <button type="button" className="btn btn-outline-primary mr-2">withdraw</button>
                            <button className="btn btn-outline-primary active">resend</button>
                        </div>
                        <OutgoingMentorActions/>
                    </Col>
                </Row>
            </ListGroupItem>






        );
    }
}