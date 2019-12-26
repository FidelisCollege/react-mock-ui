import * as React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input} from 'reactstrap';
import {IconAttachment, IconCamera} from "../icons";
import {useState} from "react";
import PostEventTabComponent from "../../components/community/postEventTab";

const EventPostModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div  className="Community-Post-Modal d-none d-md-block">
            <button type="button" className="btn btn-primary text-capitalize ml-3 post-button"  onClick={toggle}>{buttonLabel}post</button>
            <Modal isOpen={modal} toggle={toggle} className="h-100 d-flex justify-content-center align-items-center">
                <ModalHeader toggle={toggle}>Activity Post</ModalHeader>
                <ModalBody className="px-0">
                    <PostEventTabComponent/>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default EventPostModal;