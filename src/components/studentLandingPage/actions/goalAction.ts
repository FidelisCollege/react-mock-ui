import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_CURRENT_GOAL_REQUEST = 'GET_CURRENT_GOAL_REQUEST';
export const GET_CURRENT_GOAL_SUCCESS = 'GET_CURRENT_GOAL_SUCCESS';
export const GET_CURRENT_GOAL_FAILURE = 'GET_CURRENT_GOAL_FAILURE';
export const GET_FUTURE_GOAL_REQUEST = 'GET_FUTURE_GOAL_REQUEST';
export const GET_FUTURE_GOAL_SUCCESS = 'GET_FUTURE_GOAL_SUCCESS';
export const GET_FUTURE_GOAL_FAILURE = 'GET_FUTURE_GOAL_FAILURE';
export const GET_HISTORY_GOAL_REQUEST = 'GET_HISTORY_GOAL_REQUEST';
export const GET_HISTORY_GOAL_SUCCESS = 'GET_HISTORY_GOAL_SUCCESS';
export const GET_HISTORY_GOAL_FAILURE = 'GET_HISTORY_GOAL_FAILURE';
export const CLEAR_CURRENT_GOAL_LIST = 'CLEAR_CURRENT_GOAL_LIST';
export const CLEAR_FUTURE_GOAL_LIST = 'CLEAR_FUTURE_GOAL_LIST';
export const CLEAR_HISTORY_GOAL_LIST = 'CLEAR_HISTORY_GOAL_LIST';

export interface GoalsActionsInterface {
    getCurrentGoalsListAction: Function;
    getFutureGoalsListAction: Function;
    getHistoryGoalsListAction: Function;
    clearCurrentGoalListAction: Function;
    clearFutureGoalListAction: Function;
    clearHistoryGoalListAction: Function;
}

function getCurrentGoalsList(url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_CURRENT_GOAL_REQUEST,
                GET_CURRENT_GOAL_SUCCESS,
                GET_CURRENT_GOAL_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Current Goal List Not Found"
        }
    }
}

function getFutureGoalsList(url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_FUTURE_GOAL_REQUEST,
                GET_FUTURE_GOAL_SUCCESS,
                GET_FUTURE_GOAL_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Future Goal List Not Found"
        }
    }
}

function getHistoryGoalsList(url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_HISTORY_GOAL_REQUEST,
                GET_HISTORY_GOAL_SUCCESS,
                GET_HISTORY_GOAL_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "History Goal List Not Found"
        }
    }
}

function clearCurrentGoalList() {
    return {
        type: CLEAR_CURRENT_GOAL_LIST
    }
}

function clearFutureGoalList() {
    return {
        type: CLEAR_FUTURE_GOAL_LIST
    }
}

function clearHistoryGoalList() {
    return {
        type: CLEAR_HISTORY_GOAL_LIST
    }
}

export function getCurrentGoalsListAction(userId: number): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getCurrentGoalsList(api.getDataApiBaseUrl() + '/user/' + userId + '/goalsAndMilestones/false'));
    }
}

export function getFutureGoalsListAction(userId: number): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getFutureGoalsList(api.getDataApiBaseUrl() + '/wishlist/user/' + userId));
    }
}

export function getHistoryGoalsListAction(userId: number): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getHistoryGoalsList(api.getDataApiBaseUrl() + '/user/' + userId + '/goal-history'));
    }
}

export function clearCurrentGoalListAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCurrentGoalList());
    }
}

export function clearFutureGoalListAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearFutureGoalList());
    }
}

export function clearHistoryGoalListAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearHistoryGoalList());
    }
}
