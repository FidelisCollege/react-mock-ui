import * as React from 'react';

import { Media } from 'reactstrap';

const CommunityAnnouncements = () => {
    return (
        <div className="card border-0 card-purpose tab-data m-3 m-lg-0 d-none d-lg-block">
            <div className="card-body card-shadow px-3">
                <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0 align-items-center">announcements (04)
                    <div className="border-0 d-block text-right f-13">
                        <a href="#" className="text-primary">view all</a>
                    </div>
                </h3>
                <hr></hr>
                <div className="overflow-auto">
                    <Media className="mb-2">
                        <Media left top href="#">
                            <Media src="images/media-img.png" />
                        </Media>
                        <Media body className="ml-3">
                            <Media paragraph className="f-14 text-dark">
                                Chinmay suggested  Design Research methodology book By N N/g
                            </Media>
                            <time className="f-14 text-secondary text-capitalize">just now</time>

                        </Media>
                    </Media>
                    <Media className="mb-2">
                        <Media left top href="#">
                            <Media src="images/media-img.png" />
                        </Media>
                        <Media body className="ml-3">
                            <Media paragraph className="f-14 text-dark">
                                Chinmay suggested  Design Research methodology book By N N/g
                            </Media>
                            <time className="f-14 text-secondary text-capitalize">just now</time>

                        </Media>
                    </Media>
                    <Media className="mb-2">
                        <Media left top href="#">
                            <Media src="images/media-img.png" />
                        </Media>
                        <Media body className="ml-3">
                            <Media paragraph className="f-14 text-dark">
                                Chinmay suggested  Design Research methodology book By N N/g
                            </Media>
                            <time className="f-14 text-secondary text-capitalize">just now</time>

                        </Media>
                    </Media>
                    <Media className="mb-2">
                        <Media left top href="#">
                            <Media src="images/media-img.png" />
                        </Media>
                        <Media body className="ml-3">
                            <Media paragraph className="f-14 text-dark">
                                Chinmay suggested  Design Research methodology book By N N/g
                            </Media>
                            <time className="f-14 text-secondary text-capitalize">just now</time>

                        </Media>
                    </Media>
                </div>

            </div>
        </div>





    );
}


export default  CommunityAnnouncements;