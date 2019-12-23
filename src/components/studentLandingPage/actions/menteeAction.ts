import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_MENTEE_REQUEST = 'GET_MENTEE_REQUEST';
export const GET_MENTEE_SUCCESS = 'GET_MENTEE_SUCCESS';
export const GET_MENTEE_FAILURE = 'GET_MENTEE_FAILURE';
export const CLEAR_MENTEE_LIST = 'CLEAR_MENTEE_LIST';

export interface MenteesActionsInterface {
    getMenteesListAction: Function;
    clearMenteeListAction: Function;
}

function getMenteesList(url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_MENTEE_REQUEST,
                GET_MENTEE_SUCCESS,
                GET_MENTEE_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Mentee List Not Found"
        }
    }
}

function clearMenteeList() {
    return {
        type: CLEAR_MENTEE_LIST
    }
}

export function getMenteesListAction(userId: number): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getMenteesList(api.getDataApiBaseUrl() + '/mentee/user/' + userId));
    }
}

export function clearMenteeListAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearMenteeList());
    }
}