import * as React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {useState} from "react";
import {IconDownCaret} from "../icons";

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="app-collapse">
                <div>Introiduction to Autocomplete Milestone test</div>
                <Button color="transparent" className="p-0" onClick={toggle}><IconDownCaret/></Button>

            </div>
            <Collapse isOpen={isOpen} className="app-collapse-content">
                <Card className="app-collapse-card">
                    <CardBody>
                        <ul className="px-4">
                            <li className="text-primary"><span className="f-14 text-dark">lesson 1</span></li>
                            <li className="text-primary"><span className="f-14 text-dark">lesson 1</span></li>
                            <li className="text-primary"><span className="f-14 text-dark">lesson 1</span></li>
                            <li className="text-primary"><span className="f-14 text-dark">lesson 1</span></li>
                            <li className="text-primary"><span className="f-14 text-dark">lesson 1</span></li>
                            <li className="text-primary"><span className="f-14 text-dark">lesson 1</span></li>
                        </ul>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default Example;