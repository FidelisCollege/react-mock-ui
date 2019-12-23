import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_MENTOR_REQUEST = 'GET_MENTOR_REQUEST';
export const GET_MENTOR_SUCCESS = 'GET_MENTOR_SUCCESS';
export const GET_MENTOR_FAILURE = 'GET_MENTOR_FAILURE';
export const CLEAR_MENTOR_LIST = 'CLEAR_MENTOR_LIST';

export interface MentorActionsInterface {
    getMentorsListAction: Function;
    clearMentorListAction: Function;
}

function getMentorsList(url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_MENTOR_REQUEST,
                GET_MENTOR_SUCCESS,
                GET_MENTOR_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Mentor List Not Found"
        }
    }
}

function clearMentorList() {
    return {
        type: CLEAR_MENTOR_LIST
    }
}

export function getMentorsListAction(userId: number): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getMentorsList(api.getDataApiBaseUrl() + '/mentor/user/' + userId));
    }
}

export function clearMentorListAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearMentorList());
    }
}