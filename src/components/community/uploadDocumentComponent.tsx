import * as React from 'react';
import {Col, Row} from "reactstrap";




const DocumentUploadComponent = () => {
    return (
        <>
        <Row className="no-gutters">
            <Col xs="10" md="6">
                <label className="text-dark f-14 font-weight-bold">Upload Document :</label>
            </Col>
            <Col>
                <button type="button" className=" btn btn-primary text-capitalize">choose file</button>
            </Col>

        </Row>
        <Row className="no-gutters pt-2 pb-3 border-bottom">
            <Col md="6">
                <label className="text-dark f-14 font-weight-bold">files name :</label>
            </Col>
            <Col>
                <input className="form-control text-capitalize" type="text" placeholder="Enter name to be displayed"/>
                <button type="button" className=" btn btn-primary text-capitalize mt-2 add-document-button px-3 btn-lg">add document </button>
            </Col>

        </Row>

        </>


    );
}

export default  DocumentUploadComponent;
