import * as React from 'react';

export interface ProgressBarPropsInterface {
    progress: string;
}

const ProgressBarComponent = (props: ProgressBarPropsInterface) => {
    const { progress } = props;

    return (
        <div className="progress flex-grow-1 shadow-none progressbar-current">
            <div className="progress-bar" role="progressbar" style={{ width: progress }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
        </div>
    );
}

export default ProgressBarComponent;