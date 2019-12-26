import * as React from 'react';
import { Badge } from 'reactstrap';

const CommunityMemberBadge = (props) => {
    return (
        <div className="d-flex joinned-badge">
            <span className="badge badge-pill bg-info text-white d-flex align-items-center">
                <div className="joined-wrapper mr-1"><i className="icon-check"></i></div>
                <span className="font-weight-normal  text-uppercase ml-1">joined</span>
            </span>
        </div>
    );
}

export default CommunityMemberBadge;