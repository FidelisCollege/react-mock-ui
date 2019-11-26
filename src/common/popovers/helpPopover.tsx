import * as React  from 'react';
import {Button, Popover, PopoverHeader, PopoverBody, Label, Input, FormGroup} from 'reactstrap';
import {useState} from "react";
import {IconCamera} from "../icons";

const HelpPopoverComponent = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <>
            <button type="button" id="Popover1" className="text-primary bg-transparent border-0 d-flex align-items-center f-14">
                <i className="icon-help"></i>
                <span>Help</span>
            </button>
            <Popover placement="bottom-start" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>How can we help?</PopoverHeader>
                <PopoverBody>
                    <FormGroup>
                        <Input type="textarea" name="text" id="exampleText" className="text-area border-bottom-0" placeholder="Type your question here" />
                        <div className="text-area-icon">
                            <IconCamera className="text-secondary"/>
                        </div>
                    </FormGroup>
                    <div className="d-flex flex-column">
                        <button className="btn btn-primary">Next</button>
                        <a className="text-center mt-1 f-14" href="#">Browse helpdesk</a>
                    </div>
                </PopoverBody>
            </Popover>








        </>

    );
}

export default HelpPopoverComponent;