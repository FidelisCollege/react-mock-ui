import * as React from 'react';
import {Row} from "reactstrap";
import PurposeBadge from "../../common/badges/purposeBadge";


const FunctionRoles = () => {

    return (
        <div className="content-container">
            <h1 className="purpose-heading">What are the 3 roles / functions you would be interested in?</h1>
            <div className="search-input-group" id="searchBox">
                <input className="form-control" type="text" placeholder="Search for mentors" />
            </div>
            <div className="middle-container">
                <div className="d-flex flex-wrap mt-3">
                   <PurposeBadge/>
                   <PurposeBadge/>
                   <PurposeBadge/>
               </div>
                <p className="text-secondary purpose-drag-head mt-5">Click and drag each item to prioritise.</p>

            </div>
            <footer className="onboard-footer pt-0">
                <button type='button' className="btn btn-primary footer-buttons">next</button>
            </footer>
        </div>
    );
}

export default FunctionRoles;
