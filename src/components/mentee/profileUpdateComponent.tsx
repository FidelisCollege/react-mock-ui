import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ProgressBarComponent from "./progressBarComponent";

const ProfileUpdate = () => {
    return (
        <div>
            <h3 className="card-title text-light d-flex justify-content-between text-capitalize border-0">10 % to Complete</h3>
            <ProgressBarComponent progress=""/>
            <div className="profile-button my-3 f-14 text-capitalize py-2 text-center">
                <a href="#" className=" text-primary"> complete your profile</a>
            </div>
            <hr></hr>
            <Nav vertical className="f-14">
                <NavItem>
                    <NavLink href="#">Add Interest</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Update Professional Experience</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Manage Preferences</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Review Training</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}


export default  ProfileUpdate;