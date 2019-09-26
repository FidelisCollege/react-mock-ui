import * as React from 'react';


const DefaultDropdown = () => {
    return (
        <div className="dropdown mr-3 d-block">
            <button className="btn btn-outline-primary btn-dropdown" id="dropdownMenuButton" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sherpa
            </button>
            <div className="dropdown-menu border-0 rounded dropdown-menu-right dropdown-menu-md-left py-2">
                <a className="dropdown-item" href="#">Admission</a>
                <a className="dropdown-item" href="#">Academic advising</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Moderator sherpa</a>
                <a className="dropdown-item" href="#">Grader sherpa</a>
                <a className="dropdown-item" href="#">instructor sherpa</a>
            </div>
        </div>
        


    );
}
export default  DefaultDropdown;