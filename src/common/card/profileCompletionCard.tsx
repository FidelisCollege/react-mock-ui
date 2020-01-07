import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd} from "../../common";



const ProfileCompletionCard = () => {

    return (
        <Card className="border-0 card-shadow right-section-card flex-md-row flex-column align-items-center mb-3 mt-3 mt-md-0 text-center ">
            <div className="react-progressbar mr-3"></div>
            <div className="d-md-flex justify-content-between flex-grow-1">
                <div className="text-primary text-md-left">
                    <p className="f-14 text-dark mb-0 ml-1">Profile Completion</p>
                    <a className="f-13 text-capitalize"><i className="icon-add text-primary font-weight-bold mr-1 add-doc"/>add experience</a><span className="f-13 text-secondary"> to reach 85%</span>
                </div>
                <a className="f-13 text-primary text-capitalize">re-arrange section</a>
            </div>

        </Card>


    );
}

export default ProfileCompletionCard;
