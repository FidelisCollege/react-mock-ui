import * as React from 'react';
import {Col, Row, } from "reactstrap";
import {IconAttach, IconAttachment, IconFileInsert, IconUpload} from "../../common";



const CommunityResourceDocument = () => {
    return (
        <div>
            <header className="border-left-0 border-right-0 py-2 mb-3 mt-2 header-border">
                <Row className="m-0">
                    <Col md="12" xs="10"  className="f-14 font-weight-bold text-capitalize text-dark">filename</Col>
                    <Col md="8" xs="6" className="f-14 font-weight-bold text-capitalize text-dark">uploaded</Col>
                </Row>
            </header>
            <Row className="m-0 py-2 justify-content-around justify-content-lg-between">
                <Col md="12" xs="10">
                    <a href="#" className="d-flex text-secondary">
                        <IconFileInsert classname=""/>
                        <p className="file-name mb-0 f-14 text-dark text-truncate">System Design Document</p>
                    </a>
                </Col>
                <Col md="8" xs="6" className="">
                    <div className="upload-date f-14 text-secondary">10-July-2019</div>
                </Col>
                <Col md="4" xs="2" className="">
                    <a href="" className="d-flex">
                        <IconUpload/>
                    </a>
                </Col>

            </Row>
            <Row className="m-0 py-2 justify-content-around justify-content-lg-between">
                <Col md="12" xs="10">
                    <a href="#" className="d-flex text-secondary">
                        <IconAttach classname=""/>
                        <p className="file-name mb-0 f-14 text-dark text-truncate">System Design Document</p>
                    </a>
                </Col>
                <Col md="8" xs="6">
                    <div className="upload-date f-14 text-secondary">10-July-2019</div>
                </Col>
                <Col md="4" xs="2" className="">
                    <a href="" className="">
                        <IconAttach/>
                    </a>
                </Col>

            </Row>
        </div>
    );
}

export default  CommunityResourceDocument;
