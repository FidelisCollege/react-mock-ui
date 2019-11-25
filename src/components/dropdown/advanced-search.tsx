import * as React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Modal} from 'reactstrap';
import CreatableMulti from "../mentor/AutoSelectDropdown";
import {IconDown} from "../../common";

export interface AdvancedSearchState {
    dropdownOpen: boolean;
}
export interface AdvancedSearchProps {
    toggleAdvancedSearchModal: Function;
}

class AdvancedSearchDropdown extends React.Component<AdvancedSearchProps,AdvancedSearchState> {
    constructor(props: AdvancedSearchProps, state: AdvancedSearchState) {
        super(props, state);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false

        };
     }


    toggle() {
        const {dropdownOpen} = this.state;
        this.setState({dropdownOpen: !dropdownOpen});
    }


    render() {
        const {toggleAdvancedSearchModal} = this.props;
        return (

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="">
                    <DropdownToggle  className="text-capitalize bg-white text-primary border-0 shadow-none dropdown-btn">
                        <p className="advance-search-button mb-0">Advanced</p>
                        <IconDown className="text-primary text-center advance-search-icon px-2 d-md-none"></IconDown>
                    </DropdownToggle>
                        <DropdownMenu  className="dropdown-menu border-0 rounded dropdown-menu-advance-search py-2 mt-3 dropdown-menu-md-top px-3">
                            <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center px-0" toggle={false}>
                                <Col   sm="3" className="text-truncate advance-search-fields p-0">
                                    <div className="advance-search-name text-capitalize text-dark">function</div>
                                </Col>
                                <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0" onClick={() => toggleAdvancedSearchModal(1)}>
                                   <CreatableMulti />
                                </Col>
                            </DropdownItem>
                            <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center px-0" toggle={false}>
                                <Col  sm="3" className="text-truncate advance-search-fields p-0">
                                    <div className="advance-search-name text-capitalize text-dark">industry</div>
                                </Col>
                                <div className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                    <CreatableMulti/>
                                </div>
                            </DropdownItem>
                            <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center px-0" toggle={false}>
                                <Col  sm="3" className="text-truncate advance-search-fields p-0">
                                    <div className="advance-search-name text-capitalize text-dark">interest</div>
                                </Col>
                                <div className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                    <CreatableMulti/>
                                </div>
                            </DropdownItem>
                            <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center px-0" toggle={false}>
                                <Col  sm="3" className="text-truncate advance-search-fields p-0">
                                    <div className="advance-search-name text-capitalize text-dark">location</div>
                                </Col>
                                <div className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                    <CreatableMulti/>
                                </div>
                            </DropdownItem>
                            <hr></hr>
                            <div className="d-flex justify-content-between align-items-center pb-3">
                                <a  href="#" className="text-capitalize text-primary f-14">close</a>
                                <div>
                                    <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button py-2">apply</button>
                                    <button type="button" className="btn btn-primary text-capitalize save-search-button py-2"> save & apply</button>
                                </div>

                            </div>
                        </DropdownMenu>
                </Dropdown>





        );
    }

}

export default AdvancedSearchDropdown;
