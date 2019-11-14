import { combineReducers } from 'redux';
import { StateInterface } from './store';
import {CommunitiesAboutReducer} from '../components/community/reducer/CommunityAboutReducer';

export default combineReducers<StateInterface>({
    communityAbout : CommunitiesAboutReducer
});
