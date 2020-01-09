import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd, IconProfessionalExperience} from "../../common";
import SwitchButton from "../forms/switchButtons";
import IndividualExperienceCard from "./individual-experience-card";
import AddNewExperienceModal from "../modal/addNewExperienceModal";



const ProfileExperienceCard = () => {

    return (
        <Card className="border-0 card-shadow right-section-card flex-row align-items-center  mb-3">
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-grow-1 gray-border-bottom pb-3">
                    <div className="d-flex align-items-center">
                        <IconProfessionalExperience className="mr-2 text-dark"/>
                        <p className="f-14 text-dark mb-0 ">Profile Completion</p>
                    </div>
                    <SwitchButton/>
                </div>
                <div>
                    <IndividualExperienceCard/>
                    <IndividualExperienceCard/>
                    <AddNewExperienceModal/>
                </div>
            </div>
        </Card>


    );
}

export default ProfileExperienceCard;
