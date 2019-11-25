import * as React from 'react';
import { Badge, Button } from 'reactstrap';

const ChooseFunctionBadge = (props) => {
    return (
        <div>

            <Badge className="badge badge-choose-function text-primary mr-2">
                <span>UX/UI Designer</span>
                <i className="icon-close text-primary f-14"></i>
            </Badge>
        </div>
    );
}

export default ChooseFunctionBadge;