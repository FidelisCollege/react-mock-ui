import * as React from 'react';
import {Col, Row} from "reactstrap";
import PostDropdown from "../../common/dropdown/postDropdown";




const UploadedDocumentComponent = () => {
    return (
        <>
            <Row className="pt-3 flex-nowrap m-0">
                <Col md="10" xs="10">
                   <h5 className="mb-0">filename</h5>
                </Col>
                <Col md="10" xs="10">
                    <h5 className="mb-0">UploadedOn</h5>
                </Col>
                <Col md="4" xs="4">
                    <h5 className="mb-0">Actions</h5>
                </Col>

            </Row>
            <div className="uploaded-document-wrapper">
                <Row className=" flex-nowrap border-bottom py-3 text-secondary m-0 uploaded-document-row">
                    <Col md="10" xs="10" className="uploaded-document-col">
                        <p className="mb-0 f-14 text-truncate">Averylongfilenamethatiscraxy.pdf</p>
                    </Col>
                    <Col md="10" xs="10" className="uploaded-document-col">
                        <p className="mb-0 d-flex">5/12/2019, <span>10:00AM</span></p>
                    </Col>
                    <Col md="4">
                       <PostDropdown/>
                    </Col>
                </Row>
                <Row className="flex-nowrap border-bottom py-3 text-secondary m-0">
                    <Col md="10" xs="10" className="">
                        <p className="mb-0 f-14 text-truncate">Averylongfilenamethatiscraxy.pdf</p>
                    </Col>
                    <Col md="10" xs="10">
                        <p className="mb-0 d-flex">5/12/2019, <span>10:00AM</span></p>
                    </Col>
                    <Col md="4" xs="4">
                        <PostDropdown/>
                    </Col>
                </Row>
            </div>
        </>


    );
}

export default  UploadedDocumentComponent;
