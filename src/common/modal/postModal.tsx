import * as React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';
import {useState} from "react";
import {IconAttachment, IconCamera} from "..";

const CommunityPostModal = (props) => {
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
                <ModalHeader toggle={toggle}>Post</ModalHeader>
                <ModalBody>
                    <div className="d-flex align-items-center"><span className="f-14 text-light mr-2 text-capitalize">post type</span>
                        <div className="input-group post-dropdown">
                            <select className="custom-select py-2" id="inputGroupSelect04">
                            <option className="text-capitalize">announcement</option>
                            <option value="1">One</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <FormGroup className="pt-3">
                            <Input type="textarea" name="text" className="post-textarea" id="exampleText" placeholder="Write your post here" />
                        </FormGroup>
                    </div>
                    <div className="icon-wrapper d-flex justify-content-end">
                        <a href="#" className="px-3">
                            <IconAttachment className="text-secondary"/>
                        </a>
                        <a href="#" className="px-3">
                            <IconCamera className="text-secondary"/>
                        </a>
                    </div>
                </ModalBody>
                <ModalFooter className="">
                    <button type="button" className=" btn btn-outline-primary f-14 px-4 py-2 text-capitalize" onClick={toggle}>cancel</button>
                    <button type="button" className=" btn btn-outline-primary active f-14 px-4 py-2 text-capitalize" onClick={toggle}>post</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CommunityPostModal;