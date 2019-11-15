import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_COMMUNITY_RESOURCE_REQUEST = 'GET_COMMUNITY_RESOURCE_REQUEST';
export const GET_COMMUNITY_RESOURCE_SUCCESS = 'GET_COMMUNITY_RESOURCE_SUCCESS';
export const GET_COMMUNITY_RESOURCE_FAILURE = 'GET_COMMUNITY_RESOURCE_FAILURE';
export const CLEAR_COMMUNITY_RESOURCE = 'CLEAR_COMMUNITY_RESOURCE';

export interface CommunitiesResourceActionsInterface {
    getCommunityResource: Function;
    clearCommunityResource: Function;
}

function getCommunityResourceInfo(url: string) {
    console.log(url);
    return {
        [CALL_API]: {
            types: [
                GET_COMMUNITY_RESOURCE_REQUEST,
                GET_COMMUNITY_RESOURCE_SUCCESS,
                GET_COMMUNITY_RESOURCE_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Community About Not Given"
        }
    }
}

function clearCommunityResourceInfo() {
    return {
        type: CLEAR_COMMUNITY_RESOURCE
    }
}

export function getCommunityResource(communityId: number): Function {
    return function (dispatch: any, getState: Function) {
        debugger;
        return dispatch(getCommunityResourceInfo(api.getDataApiBaseUrl() + `/community/${communityId}/apps/216909`));
    }
}

export function clearCommunityResource(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCommunityResourceInfo());
    }
}
// https://dev2.fideliseducation.com/api/community/1470/apps/216909