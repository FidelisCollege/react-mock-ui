import * as React from 'react';
import {IconAdd} from "../icons";





const AddNewAdminComponent = () => {
    return (

        <div>
            <button type="button" className="btn btn-outline-primary add-admin-btn mt-2">
                <IconAdd className="p-1" height="20px"/>
                <span>Add New Admin</span>
            </button>
            <div className="add-new-button">
                <i className="icon-close"></i>
                <input className="form-control" type="text" placeholder="enter number "/>
            </div>
        </div>



    );
}


export default  AddNewAdminComponent;