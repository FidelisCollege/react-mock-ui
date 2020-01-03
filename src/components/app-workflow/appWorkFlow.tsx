import * as React from 'react';
import AppLeftNav from "./app-left-nav";
import AppRightNav from "./appRightNav";





const AppWorkFlow = () => {
    return (
        <div className="main-wrapper flex-grow-1 d-flex p-0 overflow-auto">
            <div className="main-inner-wrapper flex-grow-1 d-flex p-0 overflow-auto">
                <AppLeftNav/>
                <AppRightNav/>
            </div>
        </div>

    );
}

export default  AppWorkFlow;
