import * as React from 'react';
import {Container, Row, Col} from "reactstrap";
import OnboardBadgeComponent from "./onboardBadgeComponent";

const SearchBadgeComponent = () => {
    return (
        <Row className="mt-3 mt-md-5">
            <Col md="">
                <OnboardBadgeComponent/>
                <OnboardBadgeComponent/>
                <OnboardBadgeComponent/>
                <OnboardBadgeComponent/>
                <OnboardBadgeComponent/>
            </Col>
        </Row>




    );
}
export default  SearchBadgeComponent;