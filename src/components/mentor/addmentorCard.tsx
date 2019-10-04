import * as React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const AddMentorCard = () => {
    return (
        <Card className="mentor-card card-shadow text-center d-flex align-items-center add-mentor-card">
            <CardBody className="p-0 d-flex justify-content-center align-items-center flex-column">
                <a href="#" className="add-mentor d-flex justify-content-center align-items-center"><i className="icon-add text-primary font-weight-bolder"></i></a>
                <CardTitle className="border-0 my-3 text-primary f-14">Robert Watson</CardTitle>
            </CardBody>
        </Card>

    );
}


export default AddMentorCard;