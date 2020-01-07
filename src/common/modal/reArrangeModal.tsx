import * as React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col} from 'reactstrap';
import {useState} from "react";

const ReArrangeSectionModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="">
            <button  onClick={toggle} className="text-primary f-13 text-capitalize d-flex align-items-baseline line-height-1 bg-transparent border-0">
                re-arrange section
            </button>

            <Modal isOpen={modal} toggle={toggle} className="Profile-modals re-arrange-modals">
                <div className="px-3">
                    <ModalHeader toggle={toggle}>Re-arrange sections</ModalHeader>
                    <ModalBody className="overflow-auto px-0">
                        daDsssssssssss
                    </ModalBody>
                </div>
                <ModalFooter className="d-flex justify-content-between">
                    <a href="" className="admin-label text-capitalize text-dark f-14 text-dark">reset arrangement</a>
                    <button className="btn btn-primary text-capitalize f-14 btn-lg" onClick={toggle}>save</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ReArrangeSectionModal;