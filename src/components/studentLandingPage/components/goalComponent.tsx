import * as React from 'react';
import { GoalListPropsInterface } from './goalListComponent';
import GoalListContainerComponent from './goalListContainerComponent';
import { GoalTabs } from '../helper/helper';

export interface GoalPropsInterface {
    activeTab: string;
    goals: GoalListPropsInterface[];
    loading: boolean;
    getGoals: Function;
}

const GoalComponent = (props: GoalPropsInterface) => {
    const { activeTab, goals, getGoals, loading } = props;
    const user = localStorage.user && JSON.parse(localStorage.user);

    return (
        <>
            <header>
                <h2 className="student-name d-none d-lg-flex justify-content-between">
                    {user && user.fullName}'s Goal
                    <button className="btn btn-outline-primary text-capitalize">add goals</button>
                </h2>
                <div className="d-flex justify-content-between align-items-center mt-lg-3">
                    <div className="nav nav-pills p-2 p-lg-0 cursor-pointer" id="nav-button-tab" role="tablist">
                        <a className={"nav-item nav-link nav-tab" + (activeTab === GoalTabs.CURRENT ? " active" : "")}
                            id="nav-current-tab"
                            data-toggle="pill"
                            onClick={() => { getGoals(GoalTabs.CURRENT) }}
                            role="tab"
                            aria-controls="nav-current"
                            aria-selected="true"
                        >{GoalTabs.CURRENT}</a>
                        <a className={"nav-item nav-link nav-tab" + (activeTab === GoalTabs.FUTURE ? " active" : "")}
                            id="nav-future-tab"
                            data-toggle="pill"
                            onClick={() => { getGoals(GoalTabs.FUTURE) }}
                            role="tab"
                            aria-controls="nav-future"
                            aria-selected="false"
                        >{GoalTabs.FUTURE}</a>
                        <a className={"nav-item nav-link nav-tab" + (activeTab === GoalTabs.HISTORY ? " active" : "")}
                            id="nav-history-tab"
                            data-toggle="pill"
                            onClick={() => { getGoals(GoalTabs.HISTORY) }}
                            role="tab"
                            aria-controls="nav-history"
                            aria-selected="false"
                        >{GoalTabs.HISTORY}</a>
                    </div>

                    <div className="nav-tab d-none d-lg-block">
                        <a className="d-inline-block" id="list-view" href="#">
                            <i className="icon-list-view list-icon text-primary" />
                        </a>
                        <a className="pl-2 ml-1 d-inline-block" id="calendar-view" href="#">
                            <i className="icon-calender calender-icon border-left pl-3 text-primary" />
                        </a>
                    </div>
                </div>
            </header>
            {goals && (<div className="tab-content pt-lg-3 flex-column main-content" id="nav-button-tabContent">
                <div className="tab-pane fade show active tab-main-content justify-content-between" id="nav-current" role="tabpanel" aria-labelledby="nav-current-tab">
                    <GoalListContainerComponent addEnabled={true} goalListData={goals} loading={loading} />
                </div>
            </div>)}
        </>
    );
}

export default GoalComponent;
