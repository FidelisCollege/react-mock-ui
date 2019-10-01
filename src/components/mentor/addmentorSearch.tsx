import * as React from 'react';
import SavedSearchDropdown from "../dropdown/savedSearch";
import AdvancedSearchDropdown from "../dropdown/advanced-search";
import {Row, Col, DropdownToggle, DropdownMenu, DropdownItem, Dropdown,} from "reactstrap";
import RequestMentorCard from "./requestMentorCard";
import MentorRightSection from "./mentorRightSection";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import DefaultMentorCard from "./mentorTabComponent";
import {MentorTypes} from "./models/mentorModel";
import {RouteUrls} from "../routes/routesConfig";
import {RouterProps} from "react-router";
import AdvanceSearch from "./advanceSearch";
import CreatableMulti from "./AutoSelectDropdown";
import AdvancedSearchFunctionalDropdown from "../dropdown/AdvanceFuctionaladropdown";

const MentorData = {
    name: "Robert Watson",
    title: "Creative Lead",
    text: "ThinQbator Inc."
}

const RecommendedMentorData = [{
    name: "Robert Watson",
    title: "Creative Lead",
    text: "ThinQbator Inc."
},
    {
        name: "Robert Watson",
        title: "Creative Lead",
        text: "ThinQbator Inc."
    },
    {
        name: "Robert Watson",
        title: "Creative Lead",
        text: "ThinQbator Inc."
    }]

export interface MentortabProps extends RouterProps {

}
const AddMentorSearch =(props: MentortabProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleEditSearchModal = () => {
        setIsOpen(!isOpen);
    }
    const { history } = props;
    const [activeTab, setActiveTab] = React.useState('1');
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }


    return (
        <>
            <div className="inner-container min-height-0">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 justify-content-between">
                    <div className="list-team tab-data left-column bg-primary"></div>

                    <div className="px-3 w-100">
                        <h2 className="text-capitalize text-primary pt-3">
                            <i className="icon-caret-left text-primary f-12 mr-2"></i>my mentor
                        </h2>
                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div className="search-input-group advance-search-input d-flex align-items-center bg-white form-control" id="searchBox">
                                <input className="form-control  border-top-0 border-left-0 border-bottom-0 border-right rounded-0 py-0" type="text" placeholder="Search for mentors" />
                                <AdvancedSearchDropdown/>
                            </div>
                            <SavedSearchDropdown toggleEditSearchModal={toggleEditSearchModal}/>
                        </div>
                        <div className=" d-flex border-bottom align-items-center">
                        </div>
                        <div className="overflow-scroll h-100 pb-5">
                            <Row className="pt-3 pb-5">
                                <Col xs="12" sm="6" className="pb-2">
                                   <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>
                                <Col xs="12" sm="6" className="pb-2">
                                    <RequestMentorCard/>
                                </Col>

                            </Row>
                        </div>

                        {/*<RandomComponent isOpen={isOpen}></RandomComponent>*/}


                        <Modal
                            isOpen={isOpen}
                            toggle={toggleEditSearchModal}
                            className="modal-dialog d-flex justify-content-center align-items-center h-100 flex-row edit-saved-search"

                        >
                            <AdvancedSearchFunctionalDropdown/>
                            <Nav tabs vertical className="d-md-flex flex-column align-content-start align-items-start p-3 card-shadow d-none">
                                <NavItem className="mb-2">
                                    <NavLink
                                        className={"tab-buttons text-capitalize text-dark f-14" + (activeTab === '1' ? ' active ' : '')}
                                        onClick={() => toggle('1')}
                                    >
                                        UX/UI mentors
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        className={"tab-buttons text-capitalize btn  text-dark f-14" + (activeTab === '2' ? ' active ' : '')}
                                        onClick={() => toggle('2')}
                                    >
                                        Web mentors
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        className={"tab-buttons text-capitalize btn  text-dark f-14" + (activeTab === '3' ? ' active ' : '')}
                                        onClick={() => toggle('3')}
                                    >
                                        Frontend
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        className={"tab-buttons text-capitalize btn  text-dark f-14" + (activeTab === '4' ? ' active ' : '')}
                                        onClick={() => toggle('4')}
                                    >
                                        Mentors in Milan
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent className="h-100 overflow-auto flex-grow-1 card-shadow" activeTab={activeTab}>
                                <TabPane tabId="1" className="mt-2 pt-4 card border-0">
                                    <div className="search-input-group mx-3 m" id="searchBox">
                                        <input className="form-control" type="text" placeholder="Search" />
                                    </div>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">function</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">industry</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">interest</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-4 flex-column mt-2 px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">location</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between align-items-center py-md-4 py-3 px-md-4 px-3 border-top border-secondary">
                                        <a  href="#" className="text-capitalize text-danger f-14 pl-2">delete</a>
                                        <div className="d-flex">
                                            <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button btn-lg  d-none d-md-block">close</button>
                                            <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button d-md-none">close</button>
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg d-none d-md-block">save search</button>
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button d-md-none">save</button>
                                        </div>

                                    </div>
                                </TabPane>
                                <TabPane tabId="2" className="mt-4">
                                    <div className="search-input-group w-50 ml-3 m" id="searchBox">
                                        <input className="form-control" type="text" placeholder="Search" />
                                    </div>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">function</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">industry</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">interest</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-4 flex-column mt-2 px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">location</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between align-items-center py-4 px-4 border-top border-secondary">
                                        <a  href="#" className="text-capitalize text-danger f-14 pl-2">delete</a>
                                        <div>
                                            <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button btn-lg">close</button>
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg">save search</button>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3" className="mt-4">
                                    <div className="search-input-group w-50 ml-3 m" id="searchBox">
                                        <input className="form-control" type="text" placeholder="Search" />
                                    </div>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">function</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">industry</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">interest</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-4 flex-column mt-2 px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">location</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between align-items-center py-4 px-4 border-top border-secondary">
                                        <a  href="#" className="text-capitalize text-danger f-14 pl-2">delete</a>
                                        <div>
                                            <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button btn-lg">close</button>
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg">save search</button>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="4" className="mt-4">
                                    <div className="search-input-group w-50 ml-3 m" id="searchBox">
                                        <input className="form-control" type="text" placeholder="Search" />
                                    </div>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">function</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">industry</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 flex-column mt-2  px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">interest</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <Row className="mb-4 flex-column mt-2 px-4">
                                        <Col   sm="3" className="text-truncate advance-search-fields mb-1 pl-0">
                                            <div className="advance-search-name text-capitalize text-dark f-14">location</div>
                                        </Col>
                                        <Col  className="d-flex justify-content-between align-items-center search-dropdown p-0">
                                            <CreatableMulti />
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between align-items-center py-4 px-4 border-top border-secondary">
                                        <a  href="#" className="text-capitalize text-danger f-14 pl-2">delete</a>
                                        <div>
                                            <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button btn-lg">close</button>
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg">save search</button>
                                        </div>

                                    </div>
                                </TabPane>
                            </TabContent>
                        </Modal>
                    </div>
                    <MentorRightSection/>
                </div>

            </div>
        </>
    );
}


export default  AddMentorSearch;