import * as React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {IconComment} from "../icons";

const CommentCollapse = () => (
    <div>
        <a className="cursor-pointer action-links ml-5" href="#" id="toggler">
            <IconComment className="text-secondary mr-2"/>
            <span className="d-none d-lg-inline f-14">comment</span>
        </a>
        <UncontrolledCollapse toggler="#toggler">
            <Card>
                <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                    similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>
);

export default CommentCollapse;