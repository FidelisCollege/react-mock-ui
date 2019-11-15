import { combineReducers } from 'redux';
import { StateInterface } from './store';
import {CommunitiesAboutReducer, 
        CommunitiesActivityReducer, 
        CommunitiesCalendarReducer, 
        CommunitiesMemberReducer, 
        CommunitiesRelatedReducer, 
        CommunitiesResourcesReducer} from '../components/community/reducer';

export default combineReducers<StateInterface>({
    communityAbout : CommunitiesAboutReducer,
    communityActivity : CommunitiesActivityReducer,
    communityCalendar : CommunitiesCalendarReducer,
    communityMember : CommunitiesMemberReducer,
    communityRelated : CommunitiesRelatedReducer,
    communityResources : CommunitiesResourcesReducer


});
