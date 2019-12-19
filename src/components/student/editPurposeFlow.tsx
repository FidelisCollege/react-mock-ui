import * as React from 'react';
import {Input, Label, FormGroup, Row, Col} from "reactstrap";
import LeftNavComponent from "../../common/components/left-nav";
import CreatableMulti from "../mentor/AutoSelectDropdown";
import {IconAttach, IconEdit} from "../../common";
import PurposeActivityCard from "../../common/card/purposeActivityCard";
import PurposeStatusBadge from "../../common/badges/purposeStatusBadge";


const EditPurposeWidget = () => {

    return (
        <main className="dashboard-container student-profile">
            <div className="inner-container min-height-0 p-lg-3 d-lg-flex">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                    <div className="left-column d-lg-flex left-column d-none d-md-none d-lg-flex ">
                        <LeftNavComponent/>
                    </div>
                    <div className="student-details tab-data active d-flex flex-column flex-grow-1 px-2 px-md-3">
                        <div className="align-items-center justify-content-between  d-flex ">
                            <h2 className="section-heading d-md-flex">my purpose<span><PurposeStatusBadge/></span></h2>
                            <a href="/EditPurposeWidget" className="f-14 text-primary">Close</a>
                        </div>
                        <div className="d-flex flex-grow-1 bg-white rounded overflow-auto">
                            <Row className="flex-grow-1 no-gutters">
                                <Col md="14" className="right-purpose-column px-md-4">
                                    <div className="edit-purpose-wrapper px-md-0 pb-md-4 pb-0">
                                        <h6 className="text-capitalize f-14 text-dark mb-4">purpose</h6>
                                        <FormGroup className="pb-2">
                                            <Input type="textarea" name="text" id="exampleText" className="" placeholder="" />
                                        </FormGroup>
                                        <hr className=""/>
                                        <h6 className="text-capitalize f-14 text-dark mb-4 edit-purpose-header">choice</h6>
                                        <div>
                                            <div className="mb-3">
                                                <label className="text-capitalize f-14 text-dark select-label">function</label>
                                                <div className="d-flex align-items-center">
                                                    <a href="" className="mr-3 text-secondary"><IconEdit/></a>
                                                    <CreatableMulti/>
                                                    <a href="" className="ml-3 text-secondary"><IconEdit/></a>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="text-capitalize f-14 text-dark select-label">industry</label>
                                                <div className="d-flex align-items-center">
                                                    <a href="" className="mr-3 text-secondary"><IconEdit/></a>
                                                    <CreatableMulti/>
                                                    <a href="" className="ml-3 text-secondary"><IconEdit/></a>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="text-capitalize f-14 text-dark select-label">location</label>
                                                <div className="d-flex align-items-center">
                                                    <a href="" className="mr-3 text-secondary"><IconEdit/></a>
                                                    <CreatableMulti/>
                                                    <a href="" className="ml-3 text-secondary"><IconEdit/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="d-md-none"/>
                                    </div>
                                </Col>
                                <hr className="d-md-none"/>
                                <Col md="10" className="px-md-4">
                                    <div className="edit-purpose-wrapper px-md-0 pt-md-4 pt-0">
                                        <h6 className="text-capitalize f-14 text-dark">purpose activity</h6>
                                        <PurposeActivityCard/>
                                    </div>

                                </Col>
                            </Row>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}

export default EditPurposeWidget;
