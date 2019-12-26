import * as React from 'react';
import {ModalFooter} from "reactstrap";







const PostEventsTabContent = () => {

    return (
        <div className="py-2 px-3">
            <div className="event-image-wrapper">
                <img src="images/media-img.png" className="event-image card-img img-fluid"/>
            </div>
            <hr className="my-2"/>
            <div className="position-relative">
                <div className="pt-0 admin-feild-heading mb-4">
                    <h5 className=" admin-label text-capitalize">event heading</h5>
                    <input className="form-control" type="text" placeholder="awesome event"/>
                </div>
                <div className="pt-0 admin-feild-heading mb-4">
                    <h5 className=" admin-label text-capitalize">event location</h5>
                    <input className="form-control" type="text" placeholder="awesome place"/>
                    <div className="custom-control custom-checkbox mt-2">
                        <input className="custom-control-input" id="customCheckCustom" type="checkbox" value=""/>
                        <label className="custom-control-label text-capitalize" htmlFor="customCheckCustom">all day event</label>
                    </div>
                </div>

                <div className="d-flex mb-4">
                    <div className="pt-0 admin-feild-heading">
                        <h5 className=" admin-label text-capitalize">start date</h5>
                        <input className="form-control event-start-date" type="text" placeholder="awesome place"/>
                    </div>
                    <div className="pt-0 admin-feild-heading ml-3">
                        <h5 className="admin-label text-capitalize">end date</h5>
                        <input className="form-control text-capitalize event-start-date" type="text" placeholder="awesome place"/>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="pt-0 admin-feild-heading">
                        <h5 className=" admin-label text-capitalize">end date</h5>
                        <input className="form-control" type="text" placeholder="awesome place"/>
                    </div>
                    <div className="pt-0 admin-feild-heading ml-3">
                        <h5 className="admin-label text-capitalize">start date</h5>
                        <input className="form-control text-capitalize" type="text" placeholder="awesome place"/>
                    </div>
                </div>
                <div className="pt-0 admin-feild-heading mb-4 pb-5">
                    <h5 className=" admin-label text-capitalize">description</h5>
                    <input className="form-control event-description" type="text" placeholder="A very long name"/>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center event-modal-footer">
                <a href="" className="text-primary text-capitalize">add attachments</a>
                <button type="button" className=" btn btn-outline-primary active f-14 px-4 py-2 text-capitalize">create event</button>
            </div>
        </div>
    );
}
export default PostEventsTabContent;