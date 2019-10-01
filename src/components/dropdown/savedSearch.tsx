import * as React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';

export interface SavedSearchProps {
    toggleEditSearchModal: Function;
}

export default class SavedSearchDropdown extends React.Component<SavedSearchProps,any> {
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
        const {toggleEditSearchModal} = this.props;

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mr-md-3">
                <DropdownToggle caret className="btn-outline-primary btn-dropdown text-capitalize shadow-none py-md-1 px-md-3">
                    saved search
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu border-0 rounded py-2  save-search-menu">
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col sm="15" xs="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">UX/UI mentors</div>
                            </Col>
                            <Col sm="9" xs="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4" onClick={() => toggleEditSearchModal(1)}></i>
                                    <i className="icon-trash"></i>
                                </div>
                            </Col>
                        </DropdownItem>
                    </Row>
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col  sm="15" xs="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">Web mentors</div>
                            </Col>
                            <Col sm="9" xs="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4" onClick={() => toggleEditSearchModal(2)}></i>
                                    <i className="icon-trash"></i>
                                </div>
                            </Col>
                        </DropdownItem>
                    </Row>
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col  sm="15" xs="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">Frontend</div>
                            </Col>
                            <Col sm="9" xs="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4" onClick={() => toggleEditSearchModal(3)}></i>
                                    <i className="icon-trash"></i>
                                </div>
                            </Col>
                        </DropdownItem>
                    </Row>
                    <Row>
                        <DropdownItem className="d-flex drop-down-items justify-content-between align-items-center">
                            <Col  sm="15" xs="15" className="text-truncate">
                                <div className="saved-search-name pr-4 border-right">Mentors in Milan</div>
                            </Col>
                            <Col sm="9" xs="9">
                                <div className="saved-search-action  text-secondary">
                                    <i className="icon-edit mr-4" onClick={() => toggleEditSearchModal(4)}></i>
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
