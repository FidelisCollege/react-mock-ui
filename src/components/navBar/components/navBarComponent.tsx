import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import NavBarprogressbarComponent from "../../mentor/profile-update-progressbar";
import {Modal} from "reactstrap";
import {UpdateProfileProgressbar} from "../updateProfilebar"

class NavBarComponent extends React.Component<RouteComponentProps,  any> {
    constructor(props, state) {
        super(props, state);
        this.state = {
            isOpen: false,
        }
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand bg-white position-relative position-md-static">
                        <span className="d-lg-none header-icon-menu mr-3 cursor-pointer" id="menu">
                            <i className="icon-menu"/>
                        </span>
                        <Link to="/" className="navbar-brand p-0">
                            <img src={require('../../../assets/styles/images/logo.png')} alt=""/>
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
                                <a className="mr-4" href="#" onClick={this.toggleModal}>
                                    <UpdateProfileProgressbar />
                                </a>
                                <a href="#" data-toggle="modal">
                                    <i className="icon-list header-icon-list"/>
                                </a>

                            </div>
                        </div>
                    </nav>
                </header>

                <Modal
                    isOpen={this.state.isOpen}
                    toggle={this.toggleModal}
                >
                    <div>
                        this is modal
                    </div>
                </Modal>

            </>


        );
    }
}


export default withRouter(NavBarComponent);
