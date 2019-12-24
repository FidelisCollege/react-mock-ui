import * as React from 'react';
import AllActivityDropdown from "../../common/dropdown/allActivityDropdown";
import SearchInput from "../../common/forms/searchInput";
import {IconAdd} from "../../common";
import EditActivityPurposeCard from "../../common/card/editPurposeCard";




const ActivityStreamComponent = () => {
    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <div className="d-flex">
                    <AllActivityDropdown/>
                    <SearchInput/>
                </div>
                <button className="btn btn-primary text-capitalize f-14" type="button">
                    <IconAdd/>add
                </button>
            </div>
            <div className="py-3 overflow-auto">
                <EditActivityPurposeCard/>
            </div>
        </>


    );
}


export default  ActivityStreamComponent;