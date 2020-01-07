import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd} from "../../common";
import SwitchButton from "../forms/switchButtons";
import IndividualExperienceCard from "./individual-experience-card";



const ProfileExperienceCard = () => {

    return (
        <Card className="border-0 card-shadow right-section-card flex-row align-items-center  mb-3">
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-grow-1 gray-border-bottom pb-3">
                    <p className="f-14 text-dark mb-0 ">Profile Completion</p>
                    <SwitchButton/>
                </div>
                <div>
                    <IndividualExperienceCard/>
                    <IndividualExperienceCard/>

                    <a href="" className="text-primary f-13 text-capitalize d-flex align-items-baseline line-height-1">
                        <i className="icon-add text-primary font-weight-bold mr-1 add-doc"/>add
                    </a>
                </div>
            </div>
        </Card>


    );
}

export default ProfileExperienceCard;
