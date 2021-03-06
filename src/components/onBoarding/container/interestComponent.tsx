import * as React from 'react';
import {Container, Row, Col} from "reactstrap";
import OnboardBadgeComponent from "./onboardBadgeComponent";
import SearchtComponent from "./search";
import SearchBadgeComponent from "./searchBadge";

const InterestComponent = () => {
    return (
        <Container className="h-100 d-flex justify-content-center align-items-center bg-white rounded rounded-md-0">
            <div className="onboard-wrapper-content">
                <div className="px-4">
                    <h1 className="mb-5 onboard-heading">Tell us more about your interests</h1>
                    <SearchtComponent/>
                    <div>
                        <SearchBadgeComponent/>
                    </div>

                    <div className="mt-5">
                        <button type="button" className="btn btn-primary text-capitalize btn-lg f-16"> continue </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default  InterestComponent;