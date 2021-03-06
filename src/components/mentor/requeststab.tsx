
import * as React from 'react';
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import OutgoingRequestMentorTab from "./ougoingRequests";

export default class RequestMentorTab extends React.Component {
    render() {
        return (
            <>
                <ListGroup className="list-unstyled overflow-scroll list-view py-2 pb-5 request-tab-list">
                    <ListGroupItem href="#" className="media m-1 mb-3 card-shadow p-2 px-lg-3 py-lg-4 d-flex align-items-center">
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
                                    <Button className="btn btn-outline-primary mr-2">decline</Button>
                                    <Button className="btn btn-outline-primary active">accept</Button>
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
                    <ListGroupItem href="#" className="media m-1 mb-3 card-shadow p-2 px-lg-3 py-lg-4 d-flex align-items-center">
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
                                    <Button className="btn btn-outline-primary mr-2">decline</Button>
                                    <Button className="btn btn-outline-primary active">accept</Button>
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
                    <ListGroupItem href="#" className="media m-1 mb-3 card-shadow p-2 px-lg-3 py-lg-4 d-flex align-items-center">
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
                                    <Button className="btn btn-outline-primary mr-2">decline</Button>
                                    <Button className="btn btn-outline-primary active">accept</Button>
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
                    <ListGroupItem href="#" className="media m-1 mb-3 card-shadow p-2 px-lg-3 py-lg-4 d-flex align-items-center">
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
                                    <Button className="btn btn-outline-primary mr-2">decline</Button>
                                    <Button className="btn btn-outline-primary active">accept</Button>
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
                </ListGroup>
                <div className="mt-5">
                    <h4 className="my-3 f-14 text-light font-weight-normal mb-0">outgoing</h4>
                    <OutgoingRequestMentorTab/>

                </div>

            </>

        );
    }
}