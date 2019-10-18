import * as React from 'react';

const ShowingAllActivity  = () => {
    return (
        <main className="dashboard-container student-profile">
            <div className="inner-container min-height-0 p-lg-3">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100 px-md-3">
                    <div className="left-column bg-primary d-none d-md-block">p</div>
                    <div className="student-details tab-data active w-100 px-md-3 overflow-auto">
                        <div className="card border-0 h-100">
                            <div className="card-body">
                                <h2 className="card-title text-capitalize text-dark f-14 py-4 d-flex justify-content-between">showing all activities
                                    <a href="#" className="text-primary">close</a>
                                </h2>
                                <ul className="list-unstyled show-list-activity mb-0 ">
                                    <li className="py-3">
                                        <div className="media pb-0 text-capitalize">
                                            <div className="media-left">
                                                <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
                                            <div className="media-body">
                                                <h6 className="mb-0 person-message">
                                                    <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">mike holmes </a>
                                                    <span className="f-14 text-dark ml-1">missed a learning app</span>
                                                </h6>
                                                <time className="f-14 text-secondary">5 mins ago</time>
                                                <p className="text-dark f-14">aptitude text of army training</p>
                                                <div className="activity-footer px-4 py-2 d-flex justify-content-between align-items-center ">
                                                    <div className="d-flex">
                                                        <div className="cursor-pointer mr-4">
                                                            <i className="icon-message footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary">Comment</span>
                                                        </div>
                                                        <div className="cursor-pointer" data-toggle="modal" data-target="#recommendModal">
                                                            <i className="icon-super footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary"> Recommend</span>
                                                        </div>
                                                    </div>
                                                    <i className="icon-info-filled text-primary"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="py-3">
                                        <div className="media pb-0 text-capitalize">
                                            <div className="media-left">
                                                <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
                                            <div className="media-body">
                                                <h6 className="mb-0 person-message">
                                                    <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">mike holmes </a>
                                                    <span className="f-14 text-dark ml-1">missed a learning app</span>
                                                </h6>
                                                <time className="f-14 text-secondary">5 mins</time>
                                                <p className="text-dark f-14">aptitude text of army training</p>
                                                <div className="activity-footer px-4 py-2 d-flex justify-content-between align-items-center ">
                                                    <div className="d-flex">
                                                        <div className="cursor-pointer mr-4">
                                                            <i className="icon-message footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary">Comment</span>
                                                        </div>
                                                        <div className="cursor-pointer" data-toggle="modal" data-target="#recommendModal">
                                                            <i className="icon-super footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary"> Recommend</span>
                                                        </div>
                                                    </div>

                                                    <i className="icon-info-filled text-primary"></i>

                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="py-3">
                                        <div className="media pb-0 text-capitalize">
                                            <div className="media-left">
                                                <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
                                            <div className="media-body">
                                                <h6 className="mb-0 person-message">
                                                    <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">mike holmes </a>
                                                    <span className="f-14 text-dark ml-1">missed a learning app</span>
                                                </h6>
                                                <time className="f-14 text-secondary">5 mins</time>
                                                <p className="text-dark f-14">aptitude text of army training</p>
                                                <div className="activity-footer px-4 py-2 d-flex justify-content-between align-items-center ">
                                                    <div className="d-flex">
                                                        <div className="cursor-pointer mr-4">
                                                            <i className="icon-message footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary">Comment</span>
                                                        </div>
                                                        <div className="cursor-pointer" data-toggle="modal" data-target="#recommendModal">
                                                            <i className="icon-super footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary"> Recommend</span>
                                                        </div>
                                                    </div>

                                                    <i className="icon-info-filled text-primary"></i>

                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="py-3">
                                        <div className="media pb-0 text-capitalize">
                                            <div className="media-left">
                                                <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
                                            <div className="media-body">
                                                <h6 className="mb-0 person-message">
                                                    <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">mike holmes </a>
                                                    <span className="f-14 text-dark ml-1">missed a learning app</span>
                                                </h6>
                                                <time className="f-14 text-secondary">5 mins</time>
                                                <p className="text-dark f-14">aptitude text of army training</p>
                                                <div className="activity-footer px-4 py-2 d-flex justify-content-between align-items-center ">
                                                    <div className="d-flex">
                                                        <div className="cursor-pointer mr-4">
                                                            <i className="icon-message footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary">Comment</span>
                                                        </div>
                                                        <div className="cursor-pointer" data-toggle="modal" data-target="#recommendModal">
                                                            <i className="icon-super footer-icon text-primary"></i>
                                                            <span className="d-none d-lg-inline action-links text-primary"> Recommend</span>
                                                        </div>
                                                    </div>

                                                    <i className="icon-info-filled text-primary"></i>

                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="py-3">
                                    <div className="media pb-0 text-capitalize">
                                        <div className="media-left">
                                            <img className="cursor-pointer rounded-circle mr-3 person-image" src="images/media-img.png" alt=""/></div>
                                        <div className="media-body">
                                            <h6 className="mb-0 person-message">
                                                <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">mike holmes </a>
                                                <span className="f-14 text-dark ml-1">missed a learning app</span>
                                            </h6>
                                            <time className="f-14 text-secondary">5 mins</time>
                                            <p className="text-dark f-14">aptitude text of army training</p>
                                            <div className="activity-footer px-4 py-2 d-flex justify-content-between align-items-center ">
                                                <div className="d-flex">
                                                    <div className="cursor-pointer mr-4">
                                                        <i className="icon-message footer-icon text-primary"></i>
                                                        <span className="d-none d-lg-inline action-links text-primary">Comment</span>
                                                    </div>
                                                    <div className="cursor-pointer" data-toggle="modal" data-target="#recommendModal">
                                                        <i className="icon-super footer-icon text-primary"></i>
                                                        <span className="d-none d-lg-inline action-links text-primary"> Recommend</span>
                                                    </div>
                                                </div>

                                                <i className="icon-info-filled text-primary"></i>

                                            </div>
                                        </div>
                                    </div>

                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex-column tab-data right-column d-none d-md-block">
                        p
                    </div>
                </div>
            </div>


        </main>
    );
}


export default  ShowingAllActivity;