import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_COMMUNITY_RELATED_REQUEST = 'GET_COMMUNITY_RELATED_REQUEST';
export const GET_COMMUNITY_RELATED_SUCCESS = 'GET_COMMUNITY_RELATED_SUCCESS';
export const GET_COMMUNITY_RELATED_FAILURE = 'GET_COMMUNITY_RELATED_FAILURE';
export const CLEAR_COMMUNITY_RELATED = 'CLEAR_COMMUNITY_RELATED';

export interface CommunitiesRelatedActionsInterface {
    getCommunityRelated: Function;
    clearCommunityRelated: Function;
}

function getCommunityRelatedInfo(url: string) {
    console.log(url);
    return {
        [CALL_API]: {
            types: [
                GET_COMMUNITY_RELATED_REQUEST,
                GET_COMMUNITY_RELATED_SUCCESS,
                GET_COMMUNITY_RELATED_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Community About Not Given"
        }
    }
}

function clearCommunityRelatedInfo() {
    return {
        type: CLEAR_COMMUNITY_RELATED
    }
}

export function getCommunityRelated(communityId: number): Function {
    return function (dispatch: any, getState: Function) {
        debugger;
        return dispatch(getCommunityRelatedInfo(api.getDataApiBaseUrl() + `/community/${communityId}/related`));
    }
}

export function clearCommunityRelated(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCommunityRelatedInfo());
    }
}
