import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {useState} from "react";
import {Modal} from "reactstrap";


const ChooseFunctionModal = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenAdvancedSearch, setIsOpenAdvancedSearch] = React.useState(false);
    const toggleAdvancedSearchModal = () => {
        setIsOpenAdvancedSearch(!isOpenAdvancedSearch);
    }

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Modal isOpen={isOpenAdvancedSearch}
               toggle={toggleAdvancedSearchModal}
               className="modal-dialog d-flex justify-content-center align-items-center h-100 edit-advance-search" >
            <div className="bg-white rounded">
                <div className="border-bottom p-lg-3 px-2">
                    <h2 className="border-bottom text-capitalize text-dark py-3 d-flex justify-content-between choose-function-heading mb-0 align-items-center">choose function
                        <i className="icon-close f-20 text-secondary d-none d-md-block"></i>
                        <button className="btn btn-primary text-capitalize d-md-none d-block">done</button>
                    </h2>
                    <div className="bg-white form-control w-50 my-3 d-none d-md-block" id="searchBox">
                        <input className="form-control rounded-0 py-0 border-0" type="text" placeholder="Search for functions" />
                    </div>
                    <div className="d-md-flex d-none align-items-center">
                        <h3 className="mr-3 text-secondary mb-0">sort by:</h3>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    a
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    b
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    c
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >
                                    d
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '5' })}
                                    onClick={() => { toggle('5'); }}
                                >
                                    e
                                </NavLink>
                            </NavItem>

                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <h4>Tab 1 Contents</h4>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                    </Col>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        </Modal>

    );
}

export default ChooseFunctionModal;