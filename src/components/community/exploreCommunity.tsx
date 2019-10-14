import * as React from 'react';
import {Button, Card, CardImg, Col, Row} from "reactstrap";
import {CommunityTypes} from "./models/communityModels";
import CommunityCard from "./community-tab-compomponent";



const ExploreCommunityTab  = () => {


    return (
        <>
            <div className="search-input-group form-control py-2" id="searchBox">
                <input className="form-control  border-0  rounded-0 py-0" type="text" placeholder="Search for mentors" />
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between align-items-center">
                <a href='#' className="f-14 text-light">04 results</a>
                <div className="d-none d-md-block">
                    <a className="text-capitalize card-sort-buttons btn f-14 btn-lg" href="#">alphabetical</a>
                    <a className="text-capitalize btn f-14 card-sort-buttons btn-lg" href="#">number of app</a>
                    <a className="text-capitalize f-14 card-sort-buttons btn btn-lg" href="#">community size</a>
                </div>
                <div className="w-75 d-flex justify-content-end align-items-center">
                    <span className="f-14 text-light mr-1 text-capitalize">sort by:</span>
                    <div className="input-group d-md-none w-50 py-2">
                        <select className="custom-select" id="inputGroupSelect04">
                            <option className="text-capitalize" selected >Number Of App</option>
                            <option value="1">One</option>

                        </select>
                    </div>
                </div>
            </div>

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
                </Col>
                <Col xs="24" sm="8">
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
                            <Col sm="8"  xs="8">
                                <Button className="btn btn-outline-primary text-capitalize f-13">post</Button>

                            </Col>

                        </Row>
                    </Card>
                </Col>
                <Col xs="24" sm="8">
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
                            <Col sm="8"  xs="8">
                                <Button className="btn btn-outline-primary text-capitalize f-13">post</Button>

                            </Col>

                        </Row>
                    </Card>
                </Col>
                <Col xs="24" sm="8">
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
                            <Col sm="8"  xs="8">
                                <Button className="btn btn-outline-primary text-capitalize f-13">post</Button>

                            </Col>

                        </Row>
                    </Card>
                </Col>
            </Row>



        </>




    );
}


export default  ExploreCommunityTab;