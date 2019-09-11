import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

// export interface NavBarProps extends RouteComponentProps { }

class NavBarComponent extends React.Component<RouteComponentProps, any> {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand bg-white">
                    <span className="d-lg-none header-icon-menu mr-3 cursor-pointer" id="menu">
                        <i className="icon-menu" />
                    </span>
                    <Link to="/" className="navbar-brand p-0">
                        <img src={require('../../../assets/images/logo.png')} alt="" />
                    </Link>
                    <div className="d-flex align-items-center justify-content-end justify-content-sm-between flex-grow-1">
                        <div className="d-flex align-items-center" />
                        <div className="d-flex align-items-center">
                            <div className="search-input-group mr-3" id="searchBox">
                                <input className="form-control" type="text" placeholder="Search" />
                            </div>
                            <a className="mr-4 header-icon-search" href="#" id="searchIcon">
                                <i className="icon-search" />
                            </a>
                            <a href="#" data-toggle="modal">
                                <i className="icon-list header-icon-list" />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(NavBarComponent);
