import * as React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row} from 'reactstrap';
import AdvancedSearchDropdown from "./advanced-search";

export interface AdvancedSearchFunctionalState {
    dropdownOpen: boolean;
}

class AdvancedSearchFunctionalDropdown extends React.Component<{},AdvancedSearchFunctionalState> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({dropdownOpen: !this.state.dropdownOpen});
    }

    render() {
        return (
            <select className="custom-select py-2 function-select-dropdown d-md-none">
                <option selected>UX/UI mentors</option>
                <option value="1">Web mentors</option>
                <option value="2">Frontend</option>
                <option value="3">Mentors in Milan</option>
            </select>

        );
    }
}
export default AdvancedSearchFunctionalDropdown;