import * as React from 'react';
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';




export default class IncomingRequestsCard extends React.Component {
    render() {
        return (
            <ListGroupItem href="#" className="media card-shadow p-2 px-lg-3 py-lg-3 d-flex align-items-center">
                <div className="pr-2">
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
                            <button className="btn btn-outline-primary mr-2 text-capitalize">decline</button>
                            <button className="btn btn-outline-primary active text-capitalize">accept</button>
                        </div>
                        <div className="d-md-none d-flex justify-content-end align-items-center">
                            <a className="mr-2 " href="#" role="button">
                                <i className="icon-close f-13 tab-action-button border border-secondary rounded text-danger font-weight-bold"></i>
                            </a>
                            <a className="tab-action-button p-1" href="#" role="button">
                                <i className="icon-check tab-action-button border bg-primary  f-13 rounded text-white font-weight-bold"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </ListGroupItem>






        );
    }
}