import * as React from 'react';
import { Tooltip } from 'reactstrap';
import {useState} from "react";

const CardTooltip = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="CardTooltip" toggle={toggle}>
                Hello world!
            </Tooltip>
        </div>
    );
}

export default CardTooltip;