import * as React from 'react';
import { connect } from 'react-redux';
import {
    getMentorsListAction,
    clearMentorListAction,
    MentorActionsInterface,
    getMenteesListAction,
    clearMenteeListAction,
    MenteesActionsInterface,
    getCommunitiesListAction,
    clearCommunityListAction,
    CommunitiesActionsInterface,
    getCurrentGoalsListAction,
    getFutureGoalsListAction,
    getHistoryGoalsListAction,
    clearCurrentGoalListAction,
    clearFutureGoalListAction,
    clearHistoryGoalListAction,
    GoalsActionsInterface,
    getPurposeAction,
    clearPurposeListAction,
    PurposeActionsInterface
} from '../actions';
import { StateInterface, ApiCallInterface } from '../../../store';
import TeamComponent from '../components/teamComponent';
import GoalComponent from '../components/goalComponent';
import StudentPRQComponent from '../components/studentPRQComponent';
import { getTeamProps, getModeledHistoryGoals, getModeledFutureGoals, getModeledCurrentGoals } from '../models/studentModel';
import { withRouter } from 'react-router-dom';
import * as qs from 'query-string';
import { GoalTabs, getGoalsTabFromTabName, StudentLandingMainTabs } from '../helper/helper';

export interface StudentLandingProps extends MentorActionsInterface, CommunitiesActionsInterface, MenteesActionsInterface, GoalsActionsInterface, PurposeActionsInterface {
    mentorList: ApiCallInterface;
    menteeList: ApiCallInterface;
    communityList: ApiCallInterface;
    currentGoals: ApiCallInterface;
    futureGoals: ApiCallInterface;
    historyGoals: ApiCallInterface;
    purpose: ApiCallInterface;
    history: any;
}

export interface StudentLandingState {
    activeGoalsTab: GoalTabs;
    activeMainTab: StudentLandingMainTabs;
}

class StudentLandingContainer extends React.Component<StudentLandingProps, StudentLandingState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            activeGoalsTab: GoalTabs.CURRENT,
            activeMainTab: StudentLandingMainTabs.GOALS,
        }
    }

    componentDidMount() {
        const tab = getGoalsTabFromTabName(qs.parse(window.location.search).tab as string);
        this.setState({ activeGoalsTab: tab });

        const user = localStorage.user && JSON.parse(localStorage.user);
        user && this.props.getMentorsListAction(user.id);
        user && this.props.getMenteesListAction(user.id);
        user && this.props.getCommunitiesListAction(user.id);
        user && this.props.getPurposeAction(user.id);

        (tab !== GoalTabs.CURRENT) && this.getGoals(GoalTabs.CURRENT); // for recommendation tab data
        this.getGoals(tab || GoalTabs.CURRENT); // for goals data
    }

    componentWillUnmount() {
        const { clearCommunityListAction, clearCurrentGoalListAction, clearFutureGoalListAction, clearHistoryGoalListAction, clearMenteeListAction, clearPurposeListAction, clearMentorListAction } = this.props;

        clearCommunityListAction();
        clearCurrentGoalListAction();
        clearFutureGoalListAction();
        clearHistoryGoalListAction();
        clearMenteeListAction();
        clearMentorListAction();
        clearPurposeListAction();
    }

    getGoalTabData = () => {
        const { activeGoalsTab } = this.state;
        const { currentGoals, futureGoals, historyGoals } = this.props;

        switch (activeGoalsTab) {
            case GoalTabs.HISTORY:
                return {
                    goals: historyGoals.data ? getModeledHistoryGoals(historyGoals.data) : [],
                    loading: historyGoals.loading,
                };
            case GoalTabs.FUTURE:
                return {
                    goals: futureGoals.data ? getModeledFutureGoals(futureGoals.data.templateList) : [],
                    loading: futureGoals.loading,
                };
            default:
                return {
                    goals: currentGoals.data ? getModeledCurrentGoals(currentGoals.data.added) : [],
                    loading: currentGoals.loading,
                };
        }
    }

    getGoals = (activeGoalsTab: GoalTabs) => {
        const user = localStorage.user && JSON.parse(localStorage.user);
        const { currentGoals, futureGoals, historyGoals, getHistoryGoalsListAction, getFutureGoalsListAction, getCurrentGoalsListAction, history } = this.props;

        history.replace({ search: '?tab=' + activeGoalsTab });
        this.setState({ activeGoalsTab });

        switch (activeGoalsTab) {
            case GoalTabs.HISTORY:
                user && !historyGoals.data && getHistoryGoalsListAction(user.id);
                break;
            case GoalTabs.FUTURE:
                user && !futureGoals.data && getFutureGoalsListAction(user.id);
                break;
            default:
                user && !currentGoals.data && getCurrentGoalsListAction(user.id);
                break;
        }
    }

    onSelectMainTab = (mainTabName: StudentLandingMainTabs) => {
        this.setState({ activeMainTab: mainTabName });
    }

    render() {
        const { mentorList, menteeList, communityList, purpose, currentGoals } = this.props;
        const { activeGoalsTab, activeMainTab } = this.state;
        const coach = localStorage.getItem('coach') && localStorage.getItem('coach') !== 'undefined' && JSON.parse(localStorage.getItem('coach'));

        return (
            <main className="dashboard-container student-profile">
                <div className="px-2 border-bottom d-lg-none">
                    <div className="nav nav-tabs tab-icon-list-view custom-tabs py-2" id="nav-tab" role="tablist">
                        <a className={"nav-item nav-link" + (activeMainTab === StudentLandingMainTabs.GOALS ? " active" : "")} onClick={() => this.onSelectMainTab(StudentLandingMainTabs.GOALS)} id="nav-goal-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-goal" aria-selected="true">
                            <span className="title">{StudentLandingMainTabs.GOALS}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === StudentLandingMainTabs.TEAM ? " active" : "")} onClick={() => this.onSelectMainTab(StudentLandingMainTabs.TEAM)} id="nav-team-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-team" aria-selected="false">
                            <span className="title">{StudentLandingMainTabs.TEAM}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === StudentLandingMainTabs.PURPOSE ? " active" : "")} onClick={() => this.onSelectMainTab(StudentLandingMainTabs.PURPOSE)} id="nav-purpose-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-purpose" aria-selected="false">
                            <span className="title">{StudentLandingMainTabs.PURPOSE}</span>
                        </a>
                        <a className={"nav-item nav-link" + (activeMainTab === StudentLandingMainTabs.RECOMMENDATIONS ? " active" : "")} onClick={() => this.onSelectMainTab(StudentLandingMainTabs.RECOMMENDATIONS)} id="nav-recommend-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-recommend" aria-selected="false">
                            <span className="title">{StudentLandingMainTabs.RECOMMENDATIONS}</span>
                        </a>
                    </div>
                </div>
                <div className="inner-container min-height-0 p-lg-3">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0">
                        {/*<div className={`list-team tab-data ${activeMainTab === StudentLandingMainTabs.TEAM ? " active" : ""} left-column`} id="nav-team">*/}
                            {/*{*/}
                                {/*(mentorList && mentorList.data) &&*/}
                                {/*(menteeList && menteeList.data) &&*/}
                                {/*(communityList && communityList.data) &&*/}
                                {/*<TeamComponent teamListData={getTeamProps(this.props)} coach={coach} />*/}
                            {/*}*/}
                        {/*</div>*/}
                        <div className={`student-details tab-data ${activeMainTab === StudentLandingMainTabs.GOALS ? " active" : ""} px-lg-3`} id="nav-goal">
                            <GoalComponent activeTab={activeGoalsTab} {...this.getGoalTabData()} getGoals={this.getGoals} />
                        </div>
                        {/*<div className={`flex-column main-content tab-data right-column${activeMainTab === StudentLandingMainTabs.PURPOSE || activeMainTab === StudentLandingMainTabs.RECOMMENDATIONS ? " active" : ""}`}>*/}
                            {/*<StudentPRQComponent purpose={purpose} currentGoals={currentGoals} activeMainTab={activeMainTab} />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state: StateInterface) => ({
    mentorList: state.mentors,
    menteeList: state.mentees,
    communityList: state.communities,
    currentGoals: state.currentGoals,
    futureGoals: state.futureGoals,
    historyGoals: state.historyGoals,
    purpose: state.purpose
});

const mapDispatchToProps = {
    getMentorsListAction,
    clearMentorListAction,
    getMenteesListAction,
    clearMenteeListAction,
    getCommunitiesListAction,
    clearCommunityListAction,
    getCurrentGoalsListAction,
    getFutureGoalsListAction,
    getHistoryGoalsListAction,
    clearCurrentGoalListAction,
    clearFutureGoalListAction,
    clearHistoryGoalListAction,
    getPurposeAction,
    clearPurposeListAction,
};

export default withRouter(connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps,
)(StudentLandingContainer));
