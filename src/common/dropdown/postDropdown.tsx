import * as React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {useState} from "react";
import {IconMoreVertical} from "../icons";


const PostDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="bg-transparent border-0 shadow-none p-0">
                <IconMoreVertical className="text-secondary"/>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Hide</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
}
export default PostDropdown;