import * as React from 'react';
import PurposeComponent from './purposeComponent';
import RecommendationComponent from './recommendationComponent';
import QuickLinksComponent from './quickLinksComponent';
import { ApiCallInterface } from '../../../store';
import { StudentLandingMainTabs } from '../helper/helper';

export interface StudentPRQInterface {
    purpose: ApiCallInterface;
    currentGoals: ApiCallInterface;
    activeMainTab: StudentLandingMainTabs;
}

const StudentPRQComponent = (props: StudentPRQInterface) => {
    const activeClass = "flex-column main-content tab-data active right-column";
    const inactiveClass = "flex-column main-content tab-data right-column";
    return (
        <React.Fragment>
            <div>
                <div className={props.activeMainTab === StudentLandingMainTabs.PURPOSE ? activeClass : inactiveClass}>
                    <PurposeComponent purpose={props.purpose} />
                </div>
                <div className={props.activeMainTab === StudentLandingMainTabs.RECOMMENDATIONS ? activeClass : inactiveClass}>
                    <RecommendationComponent currentGoals={props.currentGoals} />
                </div>
                <div className="flex-column main-content tab-data right-column d-none d-md-block">
                    <QuickLinksComponent />
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentPRQComponent;
