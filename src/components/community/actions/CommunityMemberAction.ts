import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_COMMUNITY_MEMBERS_REQUEST = 'GET_COMMUNITY_MEMBERS_REQUEST';
export const GET_COMMUNITY_MEMBERS_SUCCESS = 'GET_COMMUNITY_MEMBERS_SUCCESS';
export const GET_COMMUNITY_MEMBERS_FAILURE = 'GET_COMMUNITY_MEMBERS_FAILURE';
export const CLEAR_COMMUNITY_MEMBERS = 'CLEAR_COMMUNITY_MEMBERS';

export interface CommunitiesMembersActionsInterface {
    getCommunityMembers: Function;
    clearCommunityMembers: Function;
}

function getCommunityMembersInfo(url: string) {
    console.log(url);
    return {
        [CALL_API]: {
            types: [
                GET_COMMUNITY_MEMBERS_REQUEST,
                GET_COMMUNITY_MEMBERS_SUCCESS,
                GET_COMMUNITY_MEMBERS_FAILURE   
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Community About Not Given"
        }
    }
}

function clearCommunityMembersInfo() {
    return {
        type: CLEAR_COMMUNITY_MEMBERS
    }
}

export function getCommunityMembers(communityId: number, pageId: number, name: string): Function {
    return function (dispatch: any, getState: Function) {
        debugger;
        return dispatch(getCommunityMembersInfo(api.getDataApiBaseUrl() + `/community/${communityId}/members/${pageId}/search?name=${name}`));
    }
}

export function clearCommunityMembers(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCommunityMembersInfo());
    }
}
// https://dev2.fideliseducation.com/api/community/1470/members/1/search?name=&_=1573801747580
