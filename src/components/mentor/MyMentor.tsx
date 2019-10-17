import * as React from 'react';
import SavedSearchDropdown from "../dropdown/savedSearch";
import AdvancedSearchDropdown from "../dropdown/advanced-search";
import {Row, Col} from "reactstrap";
import RequestMentorCard from "./requestMentorCard";
import MentorRightSection from "./mentorRightSection";
import {  Modal } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import {RouterProps} from "react-router";
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
const MentorTab =(props: MentortabProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenAdvancedSearch, setIsOpenAdvancedSearch] = React.useState(false);
    const [isOpenMultiSelectSearch, setIsOpenMultiSelectSearch] = React.useState(false);

    const toggleEditSearchModal = () => {
        setIsOpen(!isOpen);
    }
    const toggleAdvancedSearchModal = () => {
        setIsOpenAdvancedSearch(!isOpenAdvancedSearch);
    }
    const toggleAdvancedMultiSelectSearchModal = () => {
        setIsOpenMultiSelectSearch(!isOpenMultiSelectSearch);
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
            <div className="inner-container min-height-0 d-md-block p-lg-3">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 justify-content-between h-100">
                    <div className="list-team tab-data left-column bg-primary"></div>

                    <div className="px-3 w-100 d-flex flex-column">
                        <h2 className="text-capitalize text-primary pt-3">
                            <i className="icon-caret-left text-primary f-12 mr-2"></i>my mentor
                        </h2>
                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div className="search-input-group advance-search-input d-flex align-items-center bg-white form-control" id="searchBox">
                                <input className="form-control  border-top-0 border-left-0 border-bottom-0 border-right rounded-0 py-0" type="text" placeholder="Search for mentors" />
                                <AdvancedSearchDropdown toggleAdvancedSearchModal={toggleAdvancedSearchModal}/>
                            </div>
                            <SavedSearchDropdown toggleEditSearchModal={toggleEditSearchModal}/>
                        </div>
                        <div className=" d-flex border-bottom align-items-center">
                        </div>
                        <div className="overflow-scroll  flex-grow-1">
                            <Row className="pt-3 m-0">
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
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg d-none d-md-block" onClick={() => toggleAdvancedMultiSelectSearchModal()}>save search</button>
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button d-md-none" onClick={() => toggleAdvancedMultiSelectSearchModal()}>save</button>
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
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg" onClick={() => toggleAdvancedMultiSelectSearchModal()} >save search</button>
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
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg" onClick={() => toggleAdvancedMultiSelectSearchModal()}>save search</button>
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
                                            <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button btn-lg"  onClick={() => toggleAdvancedMultiSelectSearchModal()}>close</button>
                                            <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg" onClick={() => toggleAdvancedMultiSelectSearchModal()}>save search</button>
                                        </div>

                                    </div>
                                </TabPane>
                            </TabContent>
                        </Modal>
                        <Modal isOpen={isOpenAdvancedSearch}
                               toggle={toggleAdvancedSearchModal}
                               className="modal-dialog d-flex justify-content-center align-items-center h-100 edit-advance-search" >
                            <div className="bg-white rounded">
                                <div className="border-bottom py-md-4 px-2 px-md-3">
                                    <h2 className="border-bottom text-capitalize text-dark py-3 d-flex justify-content-between choose-function-heading mb-0 align-items-center">choose function
                                        <i className="icon-close f-20 text-secondary d-none d-md-block"></i>
                                        <button className="btn btn-primary text-capitalize d-md-none d-block">done</button>
                                    </h2>
                                    <div className="bg-white form-control w-50 my-4 d-none d-md-block" id="searchBox">
                                        <input className="form-control rounded-0 py-0 border-0" type="text" placeholder="Search for functions" />
                                    </div>
                                    <div className="d-md-flex d-none align-items-center">
                                        <h3 className="mr-3 text-secondary mb-0">sort by:</h3>
                                        <div className="py-2">
                                            <a href="#" className="p-2 text-capitalize">a</a>
                                            <a href="#" className="p-2 text-capitalize">b</a>
                                            <a href="#" className="p-2 text-capitalize">c</a>
                                            <a href="#" className="p-2 text-capitalize">d</a>
                                            <a href="#" className="p-2 text-capitalize">e</a>
                                            <a href="#" className="p-2 text-capitalize">f</a>
                                            <a href="#" className="p-2 text-capitalize">g</a>
                                            <a href="#" className="p-2 text-capitalize">h</a>
                                            <a href="#" className="p-2 text-capitalize">i</a>
                                            <a href="#" className="p-2 text-capitalize">j</a>
                                            <a href="#" className="p-2 text-capitalize">k</a>
                                            <a href="#" className="p-2 text-capitalize">l</a>
                                            <a href="#" className="p-2 text-capitalize">m</a>
                                            <a href="#" className="p-2 text-capitalize">n</a>
                                            <a href="#" className="p-2 text-capitalize">o</a>
                                            <a href="#" className="p-2 text-capitalize">p</a>
                                            <a href="#" className="p-2 text-capitalize">q</a>
                                            <a href="#" className="p-2 text-capitalize">r</a>
                                            <a href="#" className="p-2 text-capitalize">s</a>
                                            <a href="#" className="p-2 text-capitalize">t</a>
                                            <a href="#" className="p-2 text-capitalize">u</a>
                                            <a href="#" className="p-2 text-capitalize">v</a>
                                            <a href="#" className="p-2 text-capitalize">w</a>
                                            <a href="#" className="p-2 text-capitalize">x</a>
                                            <a href="#" className="p-2 text-capitalize">y</a>
                                            <a href="#" className="p-2 text-capitalize">z</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div>
                                        <Row>
                                            <Col className="" xs="12" sm="4">
                                                <span className="badge badge-choose-function text-primary mr-2">UX/UI Designer
                                                    <i className="icon-close text-primary f-14"></i>
                                                </span>
                                            </Col>
                                            <Col className="" xs="12" sm="4">
                                                <span className="badge badge-choose-function text-primary mr-2">UX/UI Designer
                                                    <i className="icon-close text-primary f-14"></i>
                                                </span>
                                            </Col>


                                        </Row>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox active">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 py-2 text-secondary f-14 text-capitalize functions-list">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Senior Designer</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-md-flex align-items-center py-3 px-4 border-top justify-content-end d-none">
                                    <div>
                                        <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button btn-lg">cancel</button>
                                        <button type="button" className="btn btn-primary text-capitalize save-search-button btn-lg">proceed</button>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-2 d-md-none">
                                <div className="bg-white form-control" id="searchBox">
                                    <input className="form-control rounded-0 py-0 border-0" type="text" placeholder="Search for functions" />
                                </div>
                            </div>
                        </Modal>
                        <Modal isOpen={isOpenMultiSelectSearch}
                               toggle={toggleAdvancedMultiSelectSearchModal}
                               className="modal-dialog d-flex justify-content-center align-items-center h-100 saved-edit-search">
                            <div>
                                <div className="px-3 py-3">
                                    <h2 className="d-flex justify-content-between pb-2 mb-0 border-bottom text-capitalize">saved search
                                        <i className="icon-close text-secondary"></i>
                                    </h2>
                                    <div className="search-input-group d-flex align-items-center bg-white form-control my-3" id="searchBox">
                                        <input className="form-control rounded-0 py-0 border-0" type="text" placeholder="Search for mentors" />
                                    </div>
                                </div>
                                <div className="p-3 d-flex justify-content-end border-top">
                                    <button type="button" className="btn btn-outline-primary mr-2 text-capitalize save-search-button">cancel</button>
                                    <button type="button" className="btn btn-primary text-capitalize save-search-button p-2">save & apply</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <MentorRightSection/>
                </div>

            </div>
        </>
    );
}


export default  MentorTab;