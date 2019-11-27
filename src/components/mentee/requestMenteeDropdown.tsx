import * as React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class OutgoingMentorActions extends React.Component <{},any> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="d-md-none">
                <DropdownToggle className="bg-transparent conversation-message-action-btn shadow-none">
                    <i className="icon-more-horiz"></i>
                </DropdownToggle>
                <DropdownMenu className="border-0 rounded dropdown-menu-right">
                    <DropdownItem>
                        <a href="#" className="text-capitalize">withdraw</a>
                    </DropdownItem>
                    <DropdownItem>
                        <a href="#" className="text-capitalize">resend</a>
                    </DropdownItem>


                </DropdownMenu>
            </ButtonDropdown>
            
        );
    }
}