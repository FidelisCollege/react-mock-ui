import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd} from "../../common";
import SwitchButton from "../forms/switchButtons";



const AwardsCard = () => {

    return (
        <Card className="border-0 card-shadow right-section-card flex-row align-items-center mb-3">
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-grow-1 gray-border-bottom pb-3">
                    <p className="f-14 text-dark mb-0 ml-1 text-capitalize">Awards / Accomplishments</p>
                    <SwitchButton/>
                </div>
                <a href="" className="text-primary f-13 text-capitalize mt-2"><IconAdd className="text-primary mb-1"/>add</a>
            </div>
        </Card>


    );
}

export default AwardsCard;
