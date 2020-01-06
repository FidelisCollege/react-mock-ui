import * as React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col} from 'reactstrap';
import {useState} from "react";

const AddNewExperienceModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="">
            <button  onClick={toggle} className="text-primary f-13 text-capitalize d-flex align-items-baseline line-height-1 bg-transparent border-0">
                <i className="icon-add text-primary font-weight-bold mr-1 add-doc"/>add
            </button>

            <Modal isOpen={modal} toggle={toggle} className="new-experience-modal">
                <ModalHeader toggle={toggle}>Add Experience</ModalHeader>
                <ModalBody className="overflow-auto px-0">
                    <div className="pt-0 admin-feild-heading mb-4">
                        <h5 className="admin-label text-capitalize text-dark">Company Name</h5>
                        <input className="form-control" type="text" placeholder="Enter your company name"/>
                        <div className="custom-control custom-checkbox mt-2">
                            <input className="custom-control-input" id="customCheckCustom" type="checkbox" value=""/>
                            <label className="custom-control-label text-capitalize f-14 text-secondary pt-1" htmlFor="customCheckCustom">I currently work here</label>
                        </div>
                    </div>
                    <div className="d-flex mb-4 flex-column">
                        <Row>
                            <Col md="12" className="pt-0 admin-feild-heading">
                                <h5 className=" admin-label text-capitalize text-dark">start date</h5>
                                <input className="form-control event-start-date" type="text" placeholder="Set Date"/>
                            </Col>
                            <Col md="12" className="pt-0 admin-feild-heading">
                                <h5 className="admin-label text-capitalize text-dark">end date</h5>
                                <input className="form-control text-capitalize event-start-date" type="text" placeholder="Set Date"/>
                            </Col>
                        </Row>
                        <a href="" className="f-14 text-secondary mt-4">You have 1 other current position. Would you like to end it?</a>
                        <div className="custom-control custom-checkbox mt-2">
                            <input className="custom-control-input" id="customCheckCustom" type="checkbox" value=""/>
                            <label className="custom-control-label text-capitalize text-dark " htmlFor="customCheckCustom">End this Position</label>
                            <div>
                                <label className="admin-label text-capitalize text-dark mt-3">talentica software</label>
                                <p className="f-12 text-secondary">3 yrs 10 months</p>
                                <div className="d-flex flex-column ml-2">
                                    <div className="d-flex align-items-center">
                                        <div className="list-type-items mr-2"></div>
                                        <div className="f-14 text-dark text-capitalize">lead ux designer</div>
                                    </div>
                                    <div className="ml-3 f-12 text-secondary">April 2017 - Present , Pune Area, India</div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="pt-0 admin-feild-heading mb-4">
                        <h5 className=" admin-label text-capitalize text-dark">function</h5>
                        <input className="form-control" type="text" placeholder="Geographical information systems manager"/>

                    </div>
                    <div className="pt-0 admin-feild-heading mb-4">
                        <h5 className=" admin-label admin-label text-capitalize text-dark">Industry</h5>
                        <input className="form-control" type="text" placeholder="Healthcare/Biotech/Medical Devices/Pharmaceuticals"/>

                    </div>
                    <div className="pt-0 admin-feild-heading mb-4">
                        <h5 className=" admin-label admin-label text-capitalize text-dark">City</h5>
                        <input className="form-control" type="text" placeholder="Enter your City"/>

                    </div>
                    <div className="pt-0 admin-feild-heading mb-4">
                        <h5 className=" admin-label admin-label text-capitalize text-dark">Position</h5>
                        <input className="form-control" type="text" placeholder="Enter your position title"/>

                    </div>

                    <div className="pt-0 admin-feild-heading">
                        <h5 className=" admin-label admin-label text-capitalize text-dark">Describe your experience</h5>
                        <input className="form-control event-description  mt-3" type="text" placeholder="A very long name"/>
                        <a href="" className="f-14 text-secondary">0 characters remaining</a>
                    </div>

                </ModalBody>
                <ModalFooter className="d-flex justify-content-between px-0">
                    <a href="" className="admin-label text-capitalize text-dark f-14 text-dark">Clear Information</a>
                    <button className="btn btn-primary text-capitalize f-14 btn-lg" onClick={toggle}>update</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddNewExperienceModal;