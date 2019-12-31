import * as React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const SwitchButton = (props) => {
    return (
        <div className="d-flex align-items-center">
            <a className="text-capitalize f-13 text-secondary mr-2">show</a>
            <Form>
                <FormGroup className="switch-button mb-0">
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="" />
                </FormGroup>
            </Form>
        </div>

    );
}

export default SwitchButton;