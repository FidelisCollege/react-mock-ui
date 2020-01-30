import * as React from 'react';
import { Tooltip } from 'reactstrap';
import {useState} from "react";

const AppTooltip = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="AppTooltip" toggle={toggle}>
                Hello world! Hello world! Hello world!
            </Tooltip>
        </div>
    );
}

export default AppTooltip;