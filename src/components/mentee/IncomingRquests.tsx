import * as React from 'react';
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import IncomingRequestsCard from "./incomingRequestCard";




export default class IncomingRequsts extends React.Component {
    render() {
        return (
            <ListGroup className="list-unstyled overflow-scroll list-view py-2 request-tab-list">
                <IncomingRequestsCard/>

            </ListGroup>




        );
    }
}