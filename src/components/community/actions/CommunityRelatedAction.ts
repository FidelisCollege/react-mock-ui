import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_COMMUNITY_ABOUT_REQUEST = 'GET_COMMUNITY_ABOUT_REQUEST';
export const GET_COMMUNITY_ABOUT_SUCCESS = 'GET_COMMUNITY_ABOUT_SUCCESS';
export const GET_COMMUNITY_ABOUT_FAILURE = 'GET_COMMUNITY_ABOUT_FAILURE';
export const CLEAR_COMMUNITY_ABOUT = 'CLEAR_COMMUNITY_ABOUT';

export interface CommunitiesActionsInterface {
    getCommunityAbout: Function;
    clearCommunityAbout: Function;
}

function getCommunityAboutInfo(url: string) {
    console.log(url);
    return {
        [CALL_API]: {
            types: [
                GET_COMMUNITY_ABOUT_REQUEST,
                GET_COMMUNITY_ABOUT_SUCCESS,
                GET_COMMUNITY_ABOUT_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Community About Not Given"
        }
    }
}

function clearCommunityAboutInfo() {
    return {
        type: CLEAR_COMMUNITY_ABOUT
    }
}

export function getCommunityAbout(communityId: number): Function {
    return function (dispatch: any, getState: Function) {
        debugger;
        return dispatch(getCommunityAboutInfo(api.getDataApiBaseUrl() + `/community/${communityId}/about`));
    }
}

export function clearCommunityAbout(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCommunityAboutInfo());
    }
}
