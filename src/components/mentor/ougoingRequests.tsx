
import * as React from 'react';
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import OutgoingMentorActions from "./requestMentorDropdown";
import OutgoingRequestCard from "./outgoingRequestCard";

export default class OutgoingRequestMentorTab extends React.Component {
    render() {
        return (
            <>
                <ListGroup className="list-unstyled overflow-scroll list-view py-2  request-tab-list">
                    <OutgoingRequestCard/>
                    <OutgoingRequestCard/>
                    <OutgoingRequestCard/>
                    <OutgoingRequestCard/>
                    <OutgoingRequestCard/>
                </ListGroup>


            </>

        );
    }
}