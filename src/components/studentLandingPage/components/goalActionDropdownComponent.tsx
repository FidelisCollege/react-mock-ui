import * as React from 'react';

const GoalActionDropdownComponent = () => {
    return (
        <div className="dropdown">
            <i className="icon-more-horiz cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
            <div className="dropdown-menu border-0 rounded dropdown-menu-right dropdown-menu-md-left py-2">
                <a className="dropdown-item" href="#">Edit date</a>
                <a className="dropdown-item" href="#">Remove goal</a>
                <a className="dropdown-item" href="#">Add to future goals</a>
            </div>
        </div>
    );
}

export default GoalActionDropdownComponent;