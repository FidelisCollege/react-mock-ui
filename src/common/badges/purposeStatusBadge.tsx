import * as React from 'react';
import { Badge } from 'reactstrap';
import {IconClock} from "../icons";

const PurposeStatusBadge = (props) => {
    return (
        <div className="purpose-status-badge">
            <IconClock/>
            <label className="mb-0">status:</label>
            <a href="" className="text-white font-weight-normal ml-1">Awaiting coach endorsement</a>
        </div>
    );
}

export default PurposeStatusBadge;