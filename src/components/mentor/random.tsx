import * as React from 'react';


export interface RandomProps {
    isOpen: boolean;
}

const RandomComponent = (props: RandomProps) => {
    const {isOpen} = props;

    return (
        <div className="inner-container min-height-0 p-lg-3">
            <div>pp</div>
        </div>
    );
}

export default  RandomComponent;