import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_PURPOSE_REQUEST = 'GET_PURPOSE_REQUEST';
export const GET_PURPOSE_SUCCESS = 'GET_PURPOSE_SUCCESS';
export const GET_PURPOSE_FAILURE = 'GET_PURPOSE_FAILURE';
export const CLEAR_PURPOSE_LIST = 'CLEAR_PURPOSE_LIST';

export interface PurposeActionsInterface {
    getPurposeAction: Function;
    clearPurposeListAction: Function;
}

function getPurpose(url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_PURPOSE_REQUEST,
                GET_PURPOSE_SUCCESS,
                GET_PURPOSE_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Purpose List Not Found"
        }
    }
}

function clearPurposeList() {
    return {
        type: CLEAR_PURPOSE_LIST
    }
}

export function getPurposeAction(userId: number): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getPurpose(api.getDataApiBaseUrl() + '/objective/user/' + userId));
    }
}

export function clearPurposeListAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearPurposeList());
    }
}
