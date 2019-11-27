import * as React from 'react';
import {Col, Row, } from "reactstrap";
import {IconAttach, IconAttachment, IconFileInsert, IconUpload} from "../../common";



const CommunityResourceDocument = () => {
    return (
        <div>
            <header className="border-bottom border-top py-2 mb-3 mt-2">
                <Row className="m-0">
                    <Col md="15" xs="10"  className="f-14 font-weight-bold text-capitalize text-dark">filename</Col>
                    <Col md="6" xs="6" className="f-14 font-weight-bold text-capitalize text-dark">uploaded</Col>
                </Row>
            </header>
            <Row className="m-0 py-2 justify-content-around justify-content-lg-between">
                <Col md="15" xs="10">
                    <a href="#" className="d-flex">
                        <IconFileInsert classname="text-secondary"/>
                        <p className="file-name mb-0 f-14 text-dark text-truncate">System Design Document</p>
                    </a>
                </Col>
                <Col md="6" xs="6" className="">
                    <div className="upload-date f-14 text-secondary">10-July-2019</div>
                </Col>
                <Col md="2" xs="2" className="text-right">
                    <a href="">
                        <IconUpload/>
                    </a>
                </Col>

            </Row>
            <Row className="m-0 py-2 justify-content-around justify-content-lg-between">
                <Col md="15" xs="10">
                    <a href="#" className="d-flex">
                        <IconAttach classname="text-secondary"/>
                        <p className="file-name mb-0 f-14 text-dark text-truncate">System Design Document</p>
                    </a>
                </Col>
                <Col md="6" xs="6">
                    <div className="upload-date f-14 text-secondary">10-July-2019</div>
                </Col>
                <Col md="2" xs="2" className="text-right">
                    <a href="">
                        <IconAttach/>
                    </a>
                </Col>

            </Row>
        </div>
    );
}

export default  CommunityResourceDocument;
