import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';





const LeftNavComponent = () => {
    return (
        <div className="list-team tab-data  left-column" id="nav-team">
            <div className="card card-shadow team-card">
                <div className="card-body team-card-body min-height-0">
                    <div className="list-team-header person">
                        <img className="mr-2 rounded-circle border person-img"
                             src="https://d14yfdwx2sby9t.cloudfront.net/upload/image/user/8bd714d1-3bc0-4723-8e1e-f5d7d860a3aa.jpg" alt=""/>
                        <div className="person-info text-capitalize">
                            <div className="person-name text-dark">Smoke advisor</div>
                            <div className="person-subinfo text-secondary">primary coach</div>
                        </div></div>
                    <div className="main-content overflow-scroll flex-column px-3">
                        <section>
                            <div className="list-team-item-head">
                                <span className="text-primary title text-capitalize">Mentors</span>
                                <a href="#">
                                    <i className="icon-setting-manage list-setting-icon"></i>
                                </a>
                            </div>
                            <ul className="list-unstyled">
                                <li className="list-team-member person"><a href="#"><img
                                    className="rounded-circle person-img mr-2 border" src="images/avatar28.png" alt=""/></a>
                                    <div className="person-info"><span className="person-name">Sonika Mentor7</span>
                                    </div>
                                </li>
                                <div className="text-right f-14">
                                    <a className="text-primary text-capitalize" href="#">view all</a></div>
                            </ul>
                        </section>
                        <section>
                            <div className="list-team-item-head">
                                <span className="text-primary title text-capitalize">Mentees</span>
                                <a href="#">
                                    <i className="icon-setting-manage list-setting-icon"></i></a>
                            </div>
                            <ul className="list-unstyled">
                                <li className="list-team-member person">
                                    <a href="#">
                                        <img className="rounded-circle person-img mr-2 border" src="images/avatar28.png" alt=""/>
                                    </a>
                                    <div className="person-info">
                                        <span className="person-name">Second Secondary Coach</span>
                                    </div>
                                </li>
                                <li className="list-team-member person">
                                    <a href="#">
                                        <img className="rounded-circle person-img mr-2 border" src="images/avatar28.png" alt=""/>
                                    </a>
                                    <div className="person-info">
                                        <span className="person-name">Sonika Mentor7</span>
                                    </div>
                                </li>
                                <li className="list-team-member person">
                                    <a href="#">
                                        <img className="rounded-circle person-img mr-2 border" src="https://d1vh3nqderra9g.cloudfront.net/upload/image/user/1d310cef-a76e-45af-82a5-0ee3a0a99ae3" alt=""/>
                                    </a>
                                    <div className="person-info">
                                        <span className="person-name">Name5004 Rajan</span>
                                    </div>
                                </li>
                                <li className="list-team-member person">
                                    <a href="#">
                                        <img className="rounded-circle person-img mr-2 border" src="https://d1vh3nqderra9g.cloudfront.net/upload/image/user/d662fe39-e8e3-4f08-a82e-b042e8d528e7.jpeg" alt=""/>
                                    </a>
                                    <div className="person-info">
                                        <span className="person-name">Smoke Admin1</span>
                                    </div>
                                </li>
                                <div className="text-right f-14">
                                    <a className="text-primary text-capitalize" href="#">view all</a>
                                </div>
                            </ul>
                        </section>
                        <section>
                            <div className="list-team-item-head">
                                <span className="text-primary title text-capitalize">Communities</span>
                                <a href="#">
                                    <i className="icon-setting-manage list-setting-icon"></i>
                                </a>
                            </div>
                            <ul className="list-unstyled">
                                <li className="list-team-member person">
                                    <a href="#">
                                        <img className="rounded-circle person-img mr-2 border" src="https://d1vh3nqderra9g.cloudfront.net/upload/image/community/d843d126-d6c1-4f08-abc3-ab9ef7da961flargedownload.jpeg" alt=""/></a>
                                    <div className="person-info">
                                        <span className="person-name">Smoke Test</span>
                                    </div>
                                </li>
                                <li className="list-team-member person"><a href="#"><img
                                    className="rounded-circle person-img mr-2 border"
                                    src="images/app_community_default.png" alt=""/></a>
                                    <div className="person-info"><span
                                        className="person-name">Smoke Training Group</span></div>
                                </li>
                                <li className="list-team-member person"><a href="#"><img
                                    className="rounded-circle person-img mr-2 border"
                                    src="images/app_community_default.png" alt=""/></a>
                                    <div className="person-info"><span className="person-name">New Training Group</span>
                                    </div>
                                </li>
                                <li className="list-team-member person"><a href="#"><img
                                    className="rounded-circle person-img mr-2 border"
                                    src="https://d1vh3nqderra9g.cloudfront.net/upload/image/community/d843d126-d6c1-4f08-abc3-ab9ef7da961flargedownload.jpeg"
                                    alt=""/></a>
                                    <div className="person-info"><span
                                        className="person-name">Sub COm-smoke12 edited</span></div>
                                </li>
                                <li className="list-team-member person"><a href="#"><img
                                    className="rounded-circle person-img mr-2 border"
                                    src="https://d1vh3nqderra9g.cloudfront.net/upload/image/community/2a6e0e5a-d79e-4723-9e61-f23a5a0bc17elargeimages (1).jpg"
                                    alt=""/></a>
                                    <div className="person-info"><span className="person-name">TestSubCommunity</span>
                                    </div>
                                </li>
                                <li className="list-team-member person"><a href="#"><img
                                    className="rounded-circle person-img mr-2 border"
                                    src="https://d1vh3nqderra9g.cloudfront.net/upload/image/community/d843d126-d6c1-4f08-abc3-ab9ef7da961flargedownload.jpeg"
                                    alt=""/></a>
                                    <div className="person-info"><span className="person-name">Commuity type</span><span
                                        className="badge ml-3 text-white">1</span></div>
                                </li>
                                <div className="text-right f-14"><a className="text-primary text-capitalize" href="#">view
                                    all</a></div>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LeftNavComponent;