import * as React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const ViewMentorCard = () => {
    return (

        <Card className="mentor-card card-shadow text-center d-flex align-items-center add-mentor-card border-0 view-all-card">
            <CardBody className="p-0 d-flex justify-content-center align-items-center flex-column">
                <a href="#">
                    <CardTitle className="border-0 my-3 text-primary f-14 text-capitalize">view all recommendations</CardTitle>
                </a>
            </CardBody>
        </Card>

    );
}


export default ViewMentorCard;