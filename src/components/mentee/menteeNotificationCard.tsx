import * as React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import {MentorTypes} from "./models/mentorModel";
import {MentorCardProps} from "./menteeDefaultCards";

export interface MentorNotificationCardProps {
    image: string;
    title: string;
    text: string;
}
const MentorNotification = (props: MentorNotificationCardProps) => {
    const {image, text, title} = props;
    return (
        <div>
            <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0">notification</h3>
            <Card className="mentor-card card-shadow text-center d-flex align-items-center border-0 cursor-pointer mb-2">
                <CardImg src="images/media-img.png" className="img-wrapper"/>
                <CardBody className="p-0">
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap">{image}</CardImg>
                    <CardSubtitle className="text-light f-14">{title}</CardSubtitle>
                    <CardText className="text-secondary f-14">{text}</CardText>

                </CardBody>
            </Card>

        </div>
    );
}


export default  MentorNotification;


