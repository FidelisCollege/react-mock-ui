import * as React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col} from 'reactstrap';
import OnboardBadgeComponent from "../onBoarding/container/onboardBadgeComponent";
import AdvanceSearchBadgeComponent from "../mentor/AdvanceSearchBadges";


export default class AdvancedSearchDropdown extends React.Component<{},any> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="">
                <DropdownToggle  className="text-capitalize bg-white text-primary border-0 shadow-none ">

                Advance
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu border-0 rounded dropdown-menu-advance-search py-2">
                    <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                        <Col  sm="3" className="text-truncate advance-search-fields">
                            <div className="advance-search-name text-capitalize text-secondary">function</div>
                        </Col>
                        <div className="d-flex justify-content-between align-items-center search-dropdown">
                            <Col sm="20">
                                <Row className="">
                                    <Col sm="8">
                                        <AdvanceSearchBadgeComponent/>
                                    </Col>
                                    <Col sm="8">
                                        <AdvanceSearchBadgeComponent/>
                                    </Col>
                                    <Col sm="8">
                                        <AdvanceSearchBadgeComponent/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="2">
                                <i className="icon-caret-down text-primary f-10 font-weight-bolder" ></i>
                            </Col>
                        </div>
                    </DropdownItem>




                </DropdownMenu>
            </Dropdown>
        );
    }

}
