import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface CommunityProps {
    routeUrl: string;
    iconClassName: string;
    linkTitle: string;
}

const CommunityComponent = (props: CommunityProps) => {
    return (
        <>
            <NavLink to={props.routeUrl} activeClassName="is-active-sidebar-link" className="left-nav-item">
                <i className={props.iconClassName} />
                <span className="left-nav-text">{props.linkTitle}</span>
            </NavLink>

            {/* required for popup */}
            <div id="popover-content-community" className="d-none">
                <ul className="list-popover p-0 m-0">
                    <li>
                        <a href="#" className="list-popover-item">
                            Mentors
                            <i className="icon-settings list-popover-icon ml-3"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="list-popover-item">
                            Mentees
                            <i className="icon-settings list-popover-icon ml-3"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="list-popover-item">
                            Communities
                            <i className="icon-settings list-popover-icon ml-3"></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* required for mobile view */}
            <ul className="list-unstyled d-lg-none ml-5 border-bottom-0 community-submenu">
                <li className="left-nav">
                    <a href="#" className="left-nav-item">
                        <i className="icon-bar-chart"></i>
                        <span className="left-nav-text">Mentors</span>
                    </a>
                </li>
                <li className="left-nav">
                    <a href="#" className="left-nav-item">
                        <i className="icon-bar-chart"></i>
                        <span className="left-nav-text">Mentees</span>
                    </a>
                </li>
                <li className="left-nav">
                    <a href="#" className="left-nav-item">
                        <i className="icon-bar-chart"></i>
                        <span className="left-nav-text">Communities</span>
                    </a>
                </li>
            </ul>
        </>
    )
};

export default CommunityComponent;
