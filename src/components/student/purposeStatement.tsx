import * as React from 'react';
import {Input, Label, FormGroup} from "reactstrap";


const PurposeStatemnt = () => {

    return (
        <div className="content-container">
            <h1 className="purpose-heading">Write your goal here.</h1>
            <div className="middle-container">
                <FormGroup>
                    <Input type="textarea" name="text" id="exampleText" className="purpose-input-box" placeholder="I want to be clay modeller in automotive industry" />
                </FormGroup>
            </div>
            <footer className="onboard-footer pt-0">
                <button type='button' className="btn btn-outline-primary footer-buttons mr-3">back</button>
                <button type='button'  className="btn btn-primary footer-buttons">next</button>
            </footer>
        </div>
    );
}

export default PurposeStatemnt;
