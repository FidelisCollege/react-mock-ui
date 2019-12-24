import * as React from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";





const EditActivityPurposeCard = () => {
    return (

        <div className="media pb-0 text-capitalize d-flex flex-column">
            <div className="d-flex">
                <div className="media-left">
                    <img className="cursor-pointer mr-3 purpose-card-img" src="images/media-img.png" alt=""/></div>
                <div className="media-body">
                    <h6 className="mb-0 person-message">
                        <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">mike holmes </a>
                        <span className="f-14 text-dark ml-1">missed a learning app</span>
                    </h6>
                    <time className="f-14 text-secondary">5 mins ago</time>
                    <p className="f-14 my-2 text-secondary">aptitude text of army training</p>
                </div>
            </div>
            <InputGroup>
                <Input placeholder="Write a message" className="input-send-wrapper" />
                {/*<span className="border-top border-bottom border-secondary"><i className="icon-attachment"></i></span>*/}
                <InputGroupAddon addonType="append">
                    <InputGroupText className="send-button">Send</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>

    );
}


export default  EditActivityPurposeCard;