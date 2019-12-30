import * as React from 'react';
import AppLeftNav from "./app-left-nav";
import AppRightNav from "./appRightNav";





const AppWorkFlow = () => {
    return (
        <div className="main-wrapper flex-grow-1 d-flex">
            <div className="main-inner-wrapper flex-grow-1 d-flex">
                <AppLeftNav/>
                <AppRightNav/>
            </div>
        </div>

    );
}

export default  AppWorkFlow;
