import * as React from 'react';
import { Container } from 'reactstrap';

const WelcomeComponent = () => {
    return (
        <Container className="h-100 d-flex justify-content-center align-items-center bg-white rounded rounded-md-0">
            <div className="onboard-wrapper-content">
                <h1 className="text-capitalize mb-3 onboard-heading">welcome luke !</h1>
                <p className="onboard-paragraph f-16">Welcome to the University Directory! As a community member, your profile will be accessible by other students, alumni, faculty and staff members.
                    Please safeguard information that you dont feel comfortable sharing with the community, but highlight any expertise or attributes you feel would benefit the community.</p>
                <div className="mt-5">
                    <button type="button" className="btn btn-primary text-capitalize btn-lg f-16"> accept </button>
                </div>
            </div>
        </Container>
    );
}

export default  WelcomeComponent;