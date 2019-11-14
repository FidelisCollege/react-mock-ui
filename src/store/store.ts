import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import api from '../middlewares/api';
import { enableBatching } from 'redux-batched-actions';

export interface ApiCallInterface {
    loading: boolean;
    data: any;
    error: boolean;
    total?: number;
}

export interface StateInterface {
    communityAbout : ApiCallInterface
}

export default function configureStore(initialState = {}) {
    return applyMiddleware(thunk, api)(createStore)(enableBatching(rootReducer), initialState);
}