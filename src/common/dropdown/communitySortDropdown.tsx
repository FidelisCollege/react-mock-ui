import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CommunitySortDropdown = (props) => {
    return (

        <div className="input-group sort-select">
            <select className="custom-select py-2" id="inputGroupSelect04">
                <option className="text-capitalize select-options">community size</option>
                <option value="1" className="select-options">One</option>
            </select>
        </div>

    );
}
export default  CommunitySortDropdown