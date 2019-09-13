import * as React from 'react';
import {Col, Container, Row} from "reactstrap";
import OnboardBadgeComponent from "./interestComponent";
import SearchtComponent from "./search";
import SearchBadgeComponent from "./searchBadge";

const ProffessionalComponent = () => {
    return (
        <Container className="h-100 d-flex justify-content-center align-items-center bg-white rounded rounded-md-0 px-4">
            <div className="onboard-wrapper-content px-md-5 p-0">
                <h1 className="mb-md-5 mb-3  onboard-heading">Choose the functions & industries that you would like to mentor</h1>
                <div className="d-flex justify-content-between flex-md-row flex-column">
                    <div className="proffessional-wrapper pl-0">
                        <SearchtComponent/>
                        <div>
                            <SearchBadgeComponent/>
                        </div>
                    </div>
                    <div className="proffessional-wrapper-right">
                        <SearchtComponent/>
                        <div>
                            <SearchBadgeComponent/>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button type="button" className="btn btn-primary text-capitalize btn-lg f-16"> continue </button>
                </div>
            </div>


        </Container>
    );
}

export default  ProffessionalComponent;