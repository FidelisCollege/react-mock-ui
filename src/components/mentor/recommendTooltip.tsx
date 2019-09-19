import * as React from 'react';
import { Tooltip } from 'reactstrap';


const RecommendMentorTooltip = () => {
    const [tooltipOpen, setTooltipOpen] = React.useState(false);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }

    return (
        <div>
            <div  id="DisabledAutoHideExample" className=" icons-recommend">
                <i className="icon-info text-primary ml-2 icon-recommend f-20 py-2" ></i>
                <i className="icon-info-filled text-primary ml-2 f-20  py-2"></i>
            </div>
            <Tooltip placement="bottom-start" isOpen={tooltipOpen} autohide={true} target="DisabledAutoHideExample" toggle={toggle} className="f-12 font-weight-normal">
                Based on your interest, following mentors are recommended
                to boost your learnings. You can send the mentor request directly,
                and view the complete information by clicking on the
                profile image / name.
            </Tooltip>
        </div>
    );
}


export default  RecommendMentorTooltip;