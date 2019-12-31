import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd} from "../../common";
import SwitchButton from "../forms/switchButtons";



const MilitaryExperienceCard = () => {

    return (
        <Card className="border-0 card-shadow right-section-card flex-row align-items-center mb-3">
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-grow-1 gray-border-bottom pb-3">
                    <p className="f-14 text-dark mb-0 ml-1 text-capitalize">military Completion</p>
                    <SwitchButton/>
                </div>
                <div>
                    <div className="p-3 individual-experience-card my-3">
                        <label className="individual-card-heading">Second Lieutenant</label>
                        <div className="gray-888 f-14">CISCO Limited</div>
                        <div className="gray-888 f-14">June, 2018 - Present</div>
                    </div>
                    <div className="p-3 individual-experience-card my-3">
                        <label className="individual-card-heading">Software Engineer II</label>
                        <div className="gray-888 f-14">US Airforce</div>
                        <div className="gray-888 f-14">June, 2018 - Present</div>
                        <p className="f-14 gray-888">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to makea type specimen book.</p>
                    </div>
                    <a href="" className="text-primary f-13 text-capitalize mt-2"><IconAdd className="text-primary mb-2"/>add</a>
                </div>
            </div>
        </Card>


    );
}

export default MilitaryExperienceCard;
