import * as React from 'react';

import { Media } from 'reactstrap';

const CommunityEvents = () => {
    return (


        <Media className="mb-3">
            <Media left top href="#">
                <div className="event bg-primary d-flex align-items-center flex-column">
                    <p className="event-date mb-0 text-white" >05</p>
                    <h3 className="mb-0 event-month text-white">Sep</h3>
                </div>
            </Media>
            <Media body className="ml-3">
                <Media paragraph className="f-14 text-dark">
                    Entrepreneur Round table
                </Media>
                <time className="f-14 text-secondary text-capitalize">Radisson Blu Hotel, Mumbai</time>

            </Media>
        </Media>



    );
}


export default  CommunityEvents;