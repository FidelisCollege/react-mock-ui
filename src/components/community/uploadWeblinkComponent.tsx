import * as React from 'react';
import {Col, Row} from "reactstrap";




const DocumentWeblinkComponent = () => {
    return (
        <>
            <Row className="no-gutters">
                <Col md="6">
                    <label className="text-dark f-14 font-weight-bold">Web Link :</label>
                </Col>
                <Col>
                    <input className="form-control text-capitalize" type="text" placeholder="Paste URL or web link"/>
                </Col>

            </Row>
            <Row className="no-gutters pt-2 pb-3 border-bottom">
                <Col md="6">
                    <label className="text-dark f-14 font-weight-bold">Web Link Name :</label>
                </Col>
                <Col>
                    <input className="form-control text-capitalize" type="text" placeholder="Enter name to be displayed"/>
                    <button type="button" className=" btn btn-primary text-capitalize mt-2 add-document-button px-3 py-2">add web link </button>
                </Col>

            </Row>

        </>


    );
}

export default  DocumentWeblinkComponent;
