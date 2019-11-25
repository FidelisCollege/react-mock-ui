
import * as React from 'react';


export default class RequestMentorChat extends React.Component {
    render() {
        return (
            <div className="bg-md-primary position-fixed chat-wrapper rounded-top">
                <div className="d-md-flex d-none">
                    <div className="mr-5">
                        <h2 className="mb-0 text-white f-16">Christopher Puckey</h2>
                        <p className="mb-0 text-white f-13">Mentoring manager</p>
                    </div>
                    <a href="#" type="button" className="btn bg-white text-primary  rounded px-3 py-2 text-capitalize">ask</a>
                </div>
                <a href="#" type="button" className="btn bg-primary text-white rounded px-3 py-3 text-capitalize  rounded px-2 py-3 text-capitalize chat-wrapper d-md-none">ask</a>
            </div>
        );
    }
}