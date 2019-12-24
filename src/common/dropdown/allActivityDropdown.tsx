import * as React from 'react';


const AllActivityDropdown = (props) => {
    return (

        <div className="input-group">
            <select className="custom-select py-2 text-capitalize f-14" id="inputGroupSelect04">
                <option className="text-capitalize">all activities</option>
                <option value="1">One</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>

    );
}
export default  AllActivityDropdown