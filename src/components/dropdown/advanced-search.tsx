import * as React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col} from 'reactstrap';
import CreatableMulti from "../mentor/AutoSelectDropdown";

export interface AdvancedSearchState {
    dropdownOpen: boolean;
}

class AdvancedSearchDropdown extends React.Component<{},AdvancedSearchState> {
    constructor(props: {}, state: AdvancedSearchState) {
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
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="">
                <DropdownToggle  className="text-capitalize bg-white text-primary border-0 shadow-none ">

                Advance
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu border-0 rounded dropdown-menu-advance-search py-2 mt-3 dropdown-menu-md-top">
                    <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center py-3" toggle={false}>
                        <Col  sm="3" className="text-truncate advance-search-fields">
                            <div className="advance-search-name text-capitalize text-dark">function</div>
                        </Col>
                        <div className="d-flex justify-content-between align-items-center search-dropdown p-0">
                           {/*<CreatableMulti/>*/}
                        </div>
                    </DropdownItem>
                    <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center py-3" toggle={false}>
                        <Col  sm="3" className="text-truncate advance-search-fields">
                            <div className="advance-search-name text-capitalize text-dark">industry</div>
                        </Col>
                        <div className="d-flex justify-content-between align-items-center search-dropdown p-0">
                            {/*<CreatableMulti/>*/}
                        </div>
                    </DropdownItem>
                    <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center py-3" toggle={false}>
                        <Col  sm="3" className="text-truncate advance-search-fields">
                            <div className="advance-search-name text-capitalize text-dark">interest</div>
                        </Col>
                        <div className="d-flex justify-content-between align-items-center search-dropdown p-0">
                            {/*<CreatableMulti/>*/}
                        </div>
                    </DropdownItem>
                    <DropdownItem className="d-md-flex drop-down-items justify-content-between align-items-center py-3" toggle={false}>
                        <Col  sm="3" className="text-truncate advance-search-fields">
                            <div className="advance-search-name text-capitalize text-dark">location</div>
                        </Col>
                        <div className="d-flex justify-content-between align-items-center search-dropdown p-0">
                            {/*<CreatableMulti/>*/}
                        </div>
                    </DropdownItem>
                    <div className="d-flex justify-content-between align-items-center py-4">
                        <a  href="#" className="text-capitalize text-primary f-14 pl-2">close</a>
                        <div>
                            <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button">apply</button>
                            <button type="button" className="btn btn-primary text-capitalize save-search-button"> save & apply</button>
                        </div>

                    </div>
                </DropdownMenu>
            </Dropdown>
        );
    }

}

export default AdvancedSearchDropdown;
