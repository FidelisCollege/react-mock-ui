import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_COMMUNITY_REQUEST = 'GET_COMMUNITY_REQUEST';
export const GET_COMMUNITY_SUCCESS = 'GET_COMMUNITY_SUCCESS';
export const GET_COMMUNITY_FAILURE = 'GET_COMMUNITY_FAILURE';
export const CLEAR_COMMUNITY_LIST = 'CLEAR_COMMUNITY_LIST';

export interface CommunitiesActionsInterface {
    getCommunitiesListAction: Function;
    clearCommunityListAction: Function;
}

function getCommunitiesList(url: string) {
    return {
        [CALL_API]: {
            types: [
                GET_COMMUNITY_REQUEST,
                GET_COMMUNITY_SUCCESS,
                GET_COMMUNITY_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Community List Not Found"
        }
    }
}

function clearCommunityList() {
    return {
        type: CLEAR_COMMUNITY_LIST
    }
}

export function getCommunitiesListAction(userId: number): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getCommunitiesList(api.getDataApiBaseUrl() + '/community/user/associated-communities?userId=' + userId));
    }
}

export function clearCommunityListAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCommunityList());
    }
}
