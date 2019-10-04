import * as React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import {MentorTypes} from "./models/mentorModel";

export interface MentorCardProps {
    mentorType: MentorTypes;
    name: string;
    title: string;
    text: string;
}

const DefaultMentorCard = (props: MentorCardProps) => {
    const {mentorType, name, text, title} = props;

    return (
        <div>
            <Card className="mentor-card card-shadow text-center d-flex align-items-center border-0 cursor-pointer mb-2">
                <CardImg src="images/avatar100.png" className="img-wrapper"/>
                <CardBody className="p-0">
                    <CardTitle className="border-0 my-3 text-dark">{name}</CardTitle>
                    <CardSubtitle className="text-light f-14">{title}</CardSubtitle>
                    <CardText className="text-secondary f-14">{text}</CardText>
                    <Button className="btn btn-outline-primary  mt-2 text-capitalize f-13">{mentorType === MentorTypes.DEFAULT ? 'message' : 'send request'}</Button>
                </CardBody>
            </Card>
        </div>

    );
}


export default  DefaultMentorCard;