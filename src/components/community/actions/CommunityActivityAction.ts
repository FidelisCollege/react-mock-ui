import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_COMMUNITY_ACTIVITY_REQUEST = 'GET_COMMUNITY_ACTIVITY_REQUEST';
export const GET_COMMUNITY_ACTIVITY_SUCCESS = 'GET_COMMUNITY_ACTIVITY_SUCCESS';
export const GET_COMMUNITY_ACTIVITY_FAILURE = 'GET_COMMUNITY_ACTIVITY_FAILURE';
export const CLEAR_COMMUNITY_ACTIVITY = 'CLEAR_COMMUNITY_ACTIVITY';

export interface CommunitiesActivityActionsInterface {
    getCommunityActivity: Function;
    clearCommunityActivity: Function;
}

function getCommunityActivityInfo(url: string) {
    console.log(url);
    return {
        [CALL_API]: {
            types: [
                GET_COMMUNITY_ACTIVITY_REQUEST,
                GET_COMMUNITY_ACTIVITY_SUCCESS,
                GET_COMMUNITY_ACTIVITY_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Community Activity Not Present"
        }
    }
}

function clearCommunityActivityInfo() {
    return {
        type: CLEAR_COMMUNITY_ACTIVITY  
    }
}

export function getCommunityActivity(communityId: number, pageId: number, filterEvent: string): Function {
    return function (dispatch: any, getState: Function) {
        debugger;
        return dispatch(getCommunityActivityInfo(api.getDataApiBaseUrl() + `/activity/community/${communityId}?page=${pageId}&filter=${filterEvent}`));
    }
}

export function clearCommunityActivity(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCommunityActivityInfo());
    }
}
