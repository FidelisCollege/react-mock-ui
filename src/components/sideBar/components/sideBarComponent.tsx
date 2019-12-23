import * as React from 'react';

import SideBarNavlinkComponent, { SideBarNavlinkProps } from './sideBarNavlinkComponent';
import { sideBarLinksData } from '../helper/sideBarLinksData';
import { withRouter, RouteComponentProps } from 'react-router';
import { RouteUrls } from '../../routes/routesConfig';

export interface SideBarProps extends RouteComponentProps {
    isOpenedSidebar: boolean;
    toggleSidebar: Function;
    closeSideBar: Function;
}

class SideBarComponent extends React.Component<SideBarProps, any> {
    getSideBarLinks = (groupList: SideBarNavlinkProps[], groupIndex: number) => {
        const { closeSideBar } = this.props;

        return groupList.map((sideBarItem: SideBarNavlinkProps, index: number) => {
            return (
                <li className={sideBarItem.className} key={groupIndex.toString() + index} onClick={() => closeSideBar()}>
                    {sideBarItem.component ? <sideBarItem.component {...sideBarItem} /> : <SideBarNavlinkComponent key={sideBarItem.linkTitle} {...sideBarItem} />}
                </li>
            )
        })
    }

    render() {
        const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
        const { isOpenedSidebar, toggleSidebar, location } = this.props;

        // if (location.pathname === RouteUrls.ONBOARDINGMENTOR) return null;

        return (
            <aside id="leftNav">
                <nav className={"left-nav-wrapper" + (isOpenedSidebar ? " open" : "")}>
                    <ul className="list-unstyled d-block d-lg-none">
                        <li className="left-nav py-3 border-bottom">
                            <a className="left-nav-item user-profile">
                                <img
                                    src={user && user.avatar && user.avatar.picSmall}
                                    alt=""
                                    className="user-profile-img rounded-circle"
                                />
                                <span className="left-nav-text">{user && user.fullName}</span>
                            </a>
                        </li>
                    </ul>
                    <div className="main-menu d-flex flex-column justify-content-lg-between">
                        {sideBarLinksData.map((element, index) => {
                            return (
                                <ul key={index} className="list-unstyled mb-0">
                                    {this.getSideBarLinks(element, index)}
                                </ul>
                            )
                        })}
                    </div>
                </nav>
                <div className="modal-backdrop" id="leftNavBackdrop" onClick={() => toggleSidebar()} />
            </aside>
        );
    }
}

export default withRouter(SideBarComponent);
