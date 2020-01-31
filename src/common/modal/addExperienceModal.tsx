import * as React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col} from 'reactstrap';
import {useState} from "react";
import {
    IconAward, IconDegree,
    IconEducationExperience,
    IconMilitaryExperience,
    IconOrganization,
    IconProfessionalExperience,
    IconScore, IconSkills
} from "../icons";

const AddExperienceModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button className="btn btn-outline-secondary text-capitalize f-14 mr-2" onClick={toggle}>add</button>
            <Modal isOpen={modal} toggle={toggle} className="h-100 d-flex justify-content-center align-items-center">
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div>
                        <Row className="modal-row">
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column justify-content-center">
                                <IconProfessionalExperience/>
                                <a className="f-12">professional experience</a>
                            </Col>
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column">
                                <IconEducationExperience/>
                                <a className="f-12">education experience</a>
                            </Col>
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column">
                                <IconMilitaryExperience/>
                                <a className="f-12">military experience</a>
                            </Col>
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column">
                                <IconOrganization/>
                                <a href="" className="f-12">professional organization</a>
                            </Col>
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column">
                                <IconScore/>
                                <a href="" className="f-12">test score</a>
                            </Col>
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column">
                                <IconAward/>
                                <a className="f-12">award/honor/accomplishment</a>
                            </Col>
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column">
                                <IconDegree/>
                                <a className="f-12">degree & certificate</a>
                            </Col>
                            <Col md="6" xs="12" className="d-flex flex-column align-items-center modal-column">
                                <IconSkills/>
                                <a className="f-12">knowledge & skills</a>
                            </Col>
                        </Row>



                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddExperienceModal;