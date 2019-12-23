import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export interface UserActions {
    getUserAction: Function;
}

function getUser(params: any, url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_USER_REQUEST,
                GET_USER_SUCCESS,
                GET_USER_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "User data Not Found"
        }
    }
}


export function getUserAction(params: any): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getUser(params, api.getDataApiBaseUrl() + '/user/getUserAndAllRoles'));
    }
}
