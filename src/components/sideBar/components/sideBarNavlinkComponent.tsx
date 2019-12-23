import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface SideBarNavlinkProps {
    routeUrl: string;
    iconClassName: string;
    linkTitle: string;
    className: string;
    component?: any;
}

const SideBarNavlinkComponent = (props: SideBarNavlinkProps) => {
    return (
        <NavLink to={props.routeUrl} exact activeClassName="is-active-sidebar-link" className="left-nav-item">
            <i className={props.iconClassName} />
            <span className="left-nav-text">{props.linkTitle}</span>
        </NavLink>
    )
};

export default SideBarNavlinkComponent;
