import { combineReducers } from 'redux';
import { StateInterface } from './store';
import { getUserReducer } from '../components/app/reducers';
import {
    CommunitiesReducer,
    MenteesReducer,
    MentorsReducer,
    CurrentGoalsReducer,
    FutureGoalsReducer,
    HistoryGoalsReducer,
    PurposeReducer
} from '../components/studentLandingPage/reducers';
// import { getUserReducer } from '../components/app/reducers';
export default combineReducers<StateInterface>({
    communities: CommunitiesReducer,
    mentees: MenteesReducer,
    mentors: MentorsReducer,
    user: getUserReducer,
    currentGoals: CurrentGoalsReducer,
    futureGoals: FutureGoalsReducer,
    historyGoals: HistoryGoalsReducer,
    purpose: PurposeReducer
});