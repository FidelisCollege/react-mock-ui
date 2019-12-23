import * as React from 'react';
import {IconAddImage, IconCamera} from "../icons";






const AddImageCard = () => {

    return (
        <div className="mentor-card text-center d-flex align-items-center add-mentor-card flex-grow-1 card justify-content-center add-image-card">
            <IconCamera/>
            <a href="" className="text-capitalize f-14 text-secondary">add image</a>
        </div>
    );
}
export default AddImageCard;