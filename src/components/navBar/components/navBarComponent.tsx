import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import NavBarprogressbarComponent from "../../mentor/profile-update-progressbar";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useState} from "react";

// export interface NavBarProps extends RouteComponentProps { }
// const ModalExample = (props) => {
//     const {buttonLabel, className} = props;
//     const [modal, setModal] = useState(false);
//
//     const toggle = () => setModal(!modal);

    class NavBarComponent extends React.Component<RouteComponentProps, any> {
        render() {
            return (
                <>
                    <header>
                        <nav className="navbar navbar-expand bg-white position-relative position-md-static">
                            <span className="d-lg-none header-icon-menu mr-3 cursor-pointer" id="menu">
                                <i className="icon-menu"/>
                            </span>
                            <Link to="/" className="navbar-brand p-0">
                                <img src={require('../../../assets/images/logo.png')} alt=""/>
                            </Link>
                            <div
                                className="d-flex align-items-center justify-content-end justify-content-sm-between flex-grow-1">
                                <div className="d-flex align-items-center"/>
                                <NavBarprogressbarComponent/>
                                <div className="d-flex align-items-center">
                                    <div className="search-input-group mr-3" id="searchBox">
                                        <input className="form-control" type="text" placeholder="Search"/>
                                    </div>
                                    <a className="mr-4 header-icon-search" href="#" id="searchIcon">
                                        <i className="icon-search"/>
                                    </a>
                                    {/*<Button color="danger">p</Button>*/}
                                    <a href="#" data-toggle="modal">
                                        <i className="icon-list header-icon-list"/>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </header>
                    {/*<Modal isOpen={modal} toggle={toggle} className={className}>zggz</Modal>*/}
                </>


            );
        }
    }


export default withRouter(NavBarComponent);
