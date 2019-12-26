import * as React from 'react';
import {Col, FormGroup, Input, Label, Row} from "reactstrap";
import {IconAdd} from "../../common";
import AddNewAdminComponent from "../../common/forms/addNewAdmin";



const CommunityAdminTab = () => {
    var checked;
    return (
        <>
            <Row className="flex-column no-gutters">
                <Col md="12" className="pt-0 admin-feild-heading">
                    <h5 className=" admin-label">Name of community</h5>
                    <input className="form-control" type="text" placeholder="community name" />
                </Col>
                <Col md="12" className="admin-feild-heading">
                    <h5 className="admin-label">Type of community</h5>
                    <select className="form-control">
                        <option>School-college-university-learning ops</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </Col>
                <Col md="12" className="admin-feild-heading">
                    <h5 className="admin-label">Email address</h5>
                    <input className="form-control" type="text" placeholder="Enter email" />
                </Col>
                <Col md="12" className="admin-feild-heading">
                    <h5 className="admin-label">Phone number</h5>
                    <input className="form-control" type="text" placeholder="enter number " />
                </Col>
                <Col md="12" className="admin-feild-heading">
                    <h5 className="admin-label">Admins:</h5>
                    <a href="#" className="d-flex align-items-center">
                        <img className="cursor-pointer admins-image mr-2" src="images/media-img.png" alt=""/>
                        <h6 className="text-capitalize mb-0">smoke admin</h6>
                    </a>
                    <AddNewAdminComponent/>
                </Col>
                <Col md="12" className="admin-feild-heading">
                    <h5 className="admin-label">community state</h5>
                    <Row className="no-gutters">
                        <Col md="8" className="radio m-0">
                            <input id="radio-1" name="radio" type="radio" checked={checked} className="mr-2"/>
                            <label className="radio-label d-flex align-items-end text-capitalize" htmlFor="radio-1 ">published</label>
                        </Col>
                        <Col md="9" className="radio m-0">
                            <input id="radio-1" name="radio" type="radio" checked={checked} className="mr-2"/>
                            <label className="radio-label d-flex align-items-end text-capitalize" htmlFor="radio-1">unpublished</label>
                        </Col>
                    </Row>

                </Col>
                <Col md="12" className="admin-feild-heading">
                    <h5 className="admin-label">Enable partnership</h5>
                    <Row className="no-gutters">
                        <Col md="6" className="radio m-0">
                            <input id="radio-1" name="radio" type="radio" checked={checked} className="mr-2"/>
                            <label className="radio-label d-flex align-items-end text-capitalize" htmlFor="radio-1 ">yes</label>
                        </Col>
                        <Col md="6" className="radio m-0">
                            <input id="radio-1" name="radio" type="radio" checked={checked} className="mr-2"/>
                            <label className="radio-label d-flex align-items-end text-capitalize" htmlFor="radio-1">no</label>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <hr/>
            <footer className="d-flex justify-content-between align-items-center footer-modal-buttons">
                <a href="#" className="text-danger text-capitalize footer-modal-buttons">remove community</a>
                <button type="button" className="btn btn-primary text-capitalize footer-modal-buttons btn-lg">save changes</button>
            </footer>
        </>
    );
}

export default  CommunityAdminTab;
