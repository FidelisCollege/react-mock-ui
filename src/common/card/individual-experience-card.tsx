import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd} from "../../common";
import SwitchButton from "../forms/switchButtons";



const IndividualExperienceCard = () => {

    return (

        <div className="p-3 individual-experience-card my-3">
            <label className="individual-card-heading">Software Engineer II</label>
            <div className="gray-888 f-14">CISCO Limited</div>
            <div className="gray-888 f-14">June, 2018 - Present</div>
        </div>
    );
}

export default IndividualExperienceCard;
