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



                        <div className={`student-details tab-data ${activeMainTab === StudentLandingMainTabs.GOALS ? " active" : ""}`} id="nav-goal">
                            <GoalComponent activeTab={activeGoalsTab} {...this.getGoalTabData()} getGoals={this.getGoals} />
                        </div>



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
