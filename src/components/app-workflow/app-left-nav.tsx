import * as React from 'react';

const AppLeftNav = () => {
    return (
        <div className="main-left-wrapper flex-grow-1">
            <div className="left-wrapper-header">
                <h4 className="mb-1 f-16 text-dark">App to be taken</h4>
                <p className="m-0 f-13 text-light">David Simmons, San Jose State University</p>
            </div>
            <div  className="px-3">
                <div className="app-content-wrapper">
                    <h4 className="mb-1 f-16 text-dark text-capitalize">about the app</h4>
                    <p className="about-app-content f-14">
                        If you ask Chuck Norris what time it is, he always says, "Two seconds 'till..
                        <span><a href="" className="text-capitalize text-primary">show more</a></span>
                    </p>
                    <a className="#">
                       <h4 className="f-16 text-dark">$ 20.00</h4>
                    </a>
                    <button type="button" className=" btn btn-primary text-capitalize py-2">add to learning path </button>
                    <div className="d-flex text-light f-14 text-capitalize py-4 border-bottom">
                        <div className="d-flex">
                            <label>duration :</label>
                            <a>1h 30m</a>
                        </div>
                        <div className="px-1">|</div>
                        <div>
                            <label>level :</label>
                            <a>Intermediate rating</a>
                        </div>
                    </div>
                    <div className="py-4 border-bottom">
                        <label>Target Date</label>
                        <div className="d-flex">
                            <input className="form-control text-capitalize text-primary set-date-input" type="text" placeholder="set date"/>
                            <button type="button" className=" btn btn-outline-info text-capitalize ml-3">set</button>
                        </div>
                    </div>
                    <div className="app-content-wrapper">
                        <h4 className="mb-1 f-16 text-dark text-capitalize">about the author</h4>
                        <div className="d-flex py-3">
                            <img className="mr-2 community-card-image" src="https://d14yfdwx2sby9t.cloudfront.net/upload/image/user/8bd714d1-3bc0-4723-8e1e-f5d7d860a3aa.jpg" alt=""/>
                            <div className="person-info text-capitalize">
                                <div className="">David Simmons</div>
                                <div className="text-secondary">San Jose State University</div>
                            </div>
                        </div>
                        <p className="about-author-content f-14">
                            Well, the way they make shows is, they make one show.
                            That show's called a pilot. Then they show that show to the people who make
                            shows, and on the strength of…
                            <span><a href="" className="text-capitalize text-primary">show more</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default  AppLeftNav;
