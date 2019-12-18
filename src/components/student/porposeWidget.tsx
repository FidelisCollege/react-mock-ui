import * as React from 'react';
import LeftNavComponent from "../../common/components/left-nav";
import PurposeWidgetDetail from "./purposeWidgetDetail";



const PurposeWidget = () => {
    return (
        <main className="dashboard-container student-profile">
            <div className="inner-container min-height-0 p-lg-3 d-lg-flex">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                    <div className="left-column d-lg-flex left-column d-none d-md-none d-lg-flex ">
                        <LeftNavComponent/>
                    </div>
                    <div className="student-details tab-data active d-flex flex-column flex-grow-1 px-md-3">
                        <div className="align-items-center justify-content-between d-none d-md-flex d-lg-flex">
                            <h2 className="section-heading">my purpose</h2>
                            <a href="/EditPurposeWidget" className="f-14 text-primary">Close</a>
                        </div>
                        <PurposeWidgetDetail/>
                    </div>

                </div>
            </div>
        </main>

    );
}


export default PurposeWidget;