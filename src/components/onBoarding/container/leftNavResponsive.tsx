import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {OnBoardingTabs} from "../Models/onBoardingModel";

export interface OnboardNavResponsiveProps {
    onTabClick: Function;
    activeTab: OnBoardingTabs;
}

const OnboardNavResponsive = (props: OnboardNavResponsiveProps) => {
    const {onTabClick, activeTab} = props;

    return (
        <div className="left-navs d-flex d-md-none left-nav-responsive">
            <Nav vertical className="navs-list bg-white flex-grow-1">
                <NavItem className="navs-list-items text-capitalize" onClick={() => onTabClick(OnBoardingTabs.WELCOME)}>
                    <NavLink href="#" className={"nav-link completed" + (activeTab === OnBoardingTabs.WELCOME ? " active" : "")}>{OnBoardingTabs.WELCOME}
                        <i className="icon-checkmark nav-list-icons f-14"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navs-list-items text-capitalize" onClick={() => onTabClick(OnBoardingTabs.PROFILE)}>
                    <NavLink href="#" className={"nav-link" + (activeTab === OnBoardingTabs.PROFILE ? " active" : "")}>{OnBoardingTabs.PROFILE}
                        <i className="icon-checkmark nav-list-icons f-14"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navs-list-items text-capitalize" onClick={() => onTabClick(OnBoardingTabs.INTEREST)}>
                    <NavLink href="#" className={"nav-link" + (activeTab === OnBoardingTabs.INTEREST? " active" : "")}>{OnBoardingTabs.INTEREST}
                        <i className="icon-checkmark nav-list-icons f-14"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navs-list-items text-capitalize" onClick={() => onTabClick(OnBoardingTabs.PROFESSIONAL)}>
                    <NavLink  href="#" className={"nav-link" + (activeTab === OnBoardingTabs.PROFESSIONAL? " active" : "")}>{OnBoardingTabs.PROFESSIONAL}
                        <i className="icon-checkmark nav-list-icons f-14"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navs-list-items text-capitalize" onClick={() => onTabClick(OnBoardingTabs.LOCATION)}>
                    <NavLink href="#" className={"nav-link" + (activeTab === OnBoardingTabs.LOCATION ? " active" : "")}>{OnBoardingTabs.LOCATION}
                        <i className="icon-checkmark nav-list-icons f-14"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navs-list-items text-capitalize" onClick={() => onTabClick(OnBoardingTabs.LEARNING_APP)}>
                    <NavLink  href="#" className={"nav-link" + (activeTab === OnBoardingTabs.LEARNING_APP ? " active" : "")}>{OnBoardingTabs.LEARNING_APP}
                        <i className="icon-checkmark nav-list-icons f-14"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navs-list-items text-capitalize" onClick={() => onTabClick(OnBoardingTabs.PREFERENCES)}>
                    <NavLink href="#" className={"nav-link" + (activeTab === OnBoardingTabs.PREFERENCES ? " active" : "")}>{OnBoardingTabs.PREFERENCES}
                        <i className="icon-checkmark nav-list-icons f-14"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navs-list-items text-capitalize">
                    <NavLink href="#" className="nav-link">
                        let's get started
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default OnboardNavResponsive;