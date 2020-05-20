import * as React from 'react';
import {IconAdd} from "../icons";





const AddNewAdminComponent = () => {
    const [addNew, openAddNew]  = React.useState(false);
    if(!addNew) {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary add-admin-btn mt-3" onClick={() => openAddNew(true)}>
                    <IconAdd className="p-1" height="20px"/>
                    <span>Add New Admin</span>
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <div className="add-new-button d-flex mt-3 align-items-center">
                    <i className="icon-close mr-2" onClick={() => openAddNew(false)}></i>
                    <input className="form-control" type="text" placeholder="Enter Name "/>
                    <button type="button" className=" btn btn-primary text-capitalize py-2 ml-2">add</button>
                </div>
            </div>
        );
    }
}


export default  AddNewAdminComponent;