import * as React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';


export default class SavedSearchDropdown extends React.Component<{},any> {
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
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mr-3">
                <DropdownToggle caret className="btn-outline-primary btn-dropdown text-capitalize shadow-none">
                    saved search
                </DropdownToggle>
                <DropdownMenu top className="dropdown-menu border-0 rounded  py-2 ">
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col sm="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">UX/UI mentors</div>
                            </Col>
                            <Col sm="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4"></i>
                                    <i className="icon-trash"></i>
                                </div>
                            </Col>
                        </DropdownItem>
                    </Row>
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col  sm="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">Web mentors</div>
                            </Col>
                            <Col sm="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4"></i>
                                    <i className="icon-trash"></i>
                                </div>
                            </Col>
                        </DropdownItem>
                    </Row>
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col  sm="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">Frontend</div>
                            </Col>
                            <Col sm="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4"></i>
                                    <i className="icon-trash"></i>
                                </div>
                            </Col>
                        </DropdownItem>
                    </Row>
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col  sm="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">Mentors in Milan</div>
                            </Col>
                            <Col sm="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4"></i>
                                    <i className="icon-trash"></i>
                                </div>
                            </Col>
                        </DropdownItem>
                    </Row>



                </DropdownMenu>
            </Dropdown>
        );
    }

}
