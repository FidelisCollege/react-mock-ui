import * as React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const RequestMentorCard = () => {
    return (
        <div>
            <Card className="mentor-card card-shadow text-center d-flex align-items-center border-0">
                <CardImg className="img-wrapper"/>
                <CardBody className="p-0">
                    <CardTitle className="border-0 my-3 text-dark">Robert Watson</CardTitle>
                    <CardSubtitle className="text-light f-14">Creative Lead</CardSubtitle>
                    <CardText className="text-secondary f-14">ThinQbator Inc.</CardText>
                    <Button className="btn btn-outline-primary bg-white mt-2 text-capitalize f-13 px-2">send request</Button>
                </CardBody>
            </Card>
        </div>
    );
}


export default  RequestMentorCard;