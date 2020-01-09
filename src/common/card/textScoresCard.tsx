import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd, IconScore} from "../../common";
import SwitchButton from "../forms/switchButtons";



const TextScoresCard = () => {

    return (
        <Card className="border-0 card-shadow right-section-card flex-row align-items-center mb-3">
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-grow-1">
                    <div className="d-flex">
                        <IconScore className="mr-2 text-dark"/>
                        <p className="f-14 text-dark mb-0 text-capitalize">Test Scores</p>
                    </div>
                    <SwitchButton/>
                </div>
                <a href="" className="text-primary f-13 text-capitalize d-flex align-items-baseline line-height-1 mt-2">
                    <i className="icon-add text-primary font-weight-bold mr-1 add-doc"/>add
                </a>
            </div>
        </Card>


    );
}

export default TextScoresCard;
