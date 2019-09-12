import * as React from 'react';
import { Container } from 'reactstrap';

const WelcomeComponent = () => {
    return (
        <Container className="h-100 d-flex justify-content-center align-items-center">
            <div className="onboard-wrapper-content">
                <h1 className="text-capitalize">welcome luke !</h1>
                <p>welcome to the university directory! as  a community member, your profile will be accessible by other students,
                    allumini, faculty and staff members. please safeguard information that you dont feel comfortable sharing to community, but highlight any expertise or attributes you feel would benifit the community.</p>
            </div>


        </Container>
    );
}

export default  WelcomeComponent;