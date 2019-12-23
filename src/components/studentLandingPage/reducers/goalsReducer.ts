import {
    GET_CURRENT_GOAL_FAILURE,
    GET_CURRENT_GOAL_REQUEST,
    GET_CURRENT_GOAL_SUCCESS,
    GET_FUTURE_GOAL_FAILURE,
    GET_FUTURE_GOAL_REQUEST,
    GET_FUTURE_GOAL_SUCCESS,
    GET_HISTORY_GOAL_FAILURE,
    GET_HISTORY_GOAL_REQUEST,
    GET_HISTORY_GOAL_SUCCESS,
    CLEAR_CURRENT_GOAL_LIST,
    CLEAR_FUTURE_GOAL_LIST,
    CLEAR_HISTORY_GOAL_LIST,
} from '../actions/goalAction';
import { Action } from '../../../common/interfaces';

export function CurrentGoalsReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_CURRENT_GOAL_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_CURRENT_GOAL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_CURRENT_GOAL_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_CURRENT_GOAL_LIST:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

export function FutureGoalsReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_FUTURE_GOAL_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_FUTURE_GOAL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_FUTURE_GOAL_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_FUTURE_GOAL_LIST:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

export function HistoryGoalsReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_HISTORY_GOAL_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_HISTORY_GOAL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_HISTORY_GOAL_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_HISTORY_GOAL_LIST:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}