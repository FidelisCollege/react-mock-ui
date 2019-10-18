import * as React from 'react';

import { Media } from 'reactstrap';

const CommunityEvents = () => {
    return (
        <div className="card border-0 card-purpose tab-data d-none d-lg-block mt-3">
            <div className="card-body card-shadow px-3" >
                <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0 align-items-center">Events (05)
                    <div className="border-0 d-block text-right f-13">
                        <a href="#" className="text-primary">view all</a>
                    </div>
                </h3>
                <hr></hr>
                <div className="overflow-auto">
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
                </div>
            </div>
        </div>





    );
}


export default  CommunityEvents;