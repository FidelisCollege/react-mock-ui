import * as React from 'react';
import {IconAddImage, IconCamera} from "../icons";
import {Button} from "reactstrap";






const RecommendCardComponent = () => {

    return (
        <div className="recommend-card border-bottom">
            <a className="f-12 text-white text-capitalize">next recommendation</a>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-capitalize f-16 text-white mb-0">happy first recommendations</h3>
                <div className="recommend-btn-wrapper">
                    <a href=""  className="text-capitalize f-14 text-white mr-3" >do it later</a>
                    <button className="btn text-capitalize f-14 recommend-btn" type="button">Recommend Now</button>
                </div>
            </div>
        </div>
    );
}
export default RecommendCardComponent;