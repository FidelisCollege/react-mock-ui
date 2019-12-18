import * as React from 'react';
import {Input} from "reactstrap";


const LocationPreferences = () => {

    return (
        <div className="content-container">
            <h1 className="purpose-heading">Where would you prefer to live and work?</h1>
            <div className="middle-container">
                <div className="d-flex justify-content-between pb-3 flex-column flex-md-row">
                    <Input placeholder="New Jersey, US" className="" />
                    <Input className="mx-md-2 my-3 my-md-0" placeholder="Enter 2nd preference"/>
                    <Input placeholder="Enter 3rd preference"/>

                </div>
            </div>
            <footer className="onboard-footer pt-0">
                <button type='button' className="btn btn-outline-primary footer-buttons mr-3">back</button>
                <button type='button'  className="btn btn-primary footer-buttons">next</button>
            </footer>
        </div>
    );
}

export default LocationPreferences;
