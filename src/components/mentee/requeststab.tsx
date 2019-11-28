import * as React from 'react';
import OutgoingRequestMentorTab from "./ougoingRequests";
import IncomingRequstsMentorTab from "./IncomingRquests";

export default class RequestMentorTab extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h4 className="my-2 f-14 text-light font-weight-normal mb-0">Incoming</h4>
                    <IncomingRequstsMentorTab/>
                </div>
                <div className="mt-2">
                    <h4 className="my-3 f-14 text-light font-weight-normal mb-0">Outgoing</h4>
                    <OutgoingRequestMentorTab/>
                </div>
            </>

        );
    }
}