import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';

export const GET_COMMUNITY_CALENDAR_REQUEST = 'GET_COMMUNITY_CALENDAR_REQUEST';
export const GET_COMMUNITY_CALENDAR_SUCCESS = 'GET_COMMUNITY_CALENDAR_SUCCESS';
export const GET_COMMUNITY_CALENDAR_FAILURE = 'GET_COMMUNITY_CALENDAR_FAILURE';
export const CLEAR_COMMUNITY_CALENDAR = 'CLEAR_COMMUNITY_CALENDAR';

export interface CommunitiesCalendarActionsInterface {
    getCommunityCalendar: Function;
    clearCommunityCalendar: Function;
}

function getCommunityCalendarInfo(url: string) {
    console.log(url);
    return {
        [CALL_API]: {
            types: [
                GET_COMMUNITY_CALENDAR_REQUEST,
                GET_COMMUNITY_CALENDAR_SUCCESS,
                GET_COMMUNITY_CALENDAR_FAILURE
            ],
            url: url,
            method: 'GET'
        },
        actionData: {
            errorMessage: "Community Calendar Not Present"
        }
    }
}

function clearCommunityCalendarInfo() {
    return {
        type: CLEAR_COMMUNITY_CALENDAR
    }
}

export function getCommunityCalendar(communityId: number): Function {
    return function (dispatch: any, getState: Function) {
        debugger;
        return dispatch(getCommunityCalendarInfo(api.getDataApiBaseUrl() + `/community/${communityId}/about`));
    }
}

export function clearCommunityCalendar(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCommunityCalendarInfo());
    }
}


// https://dev2.fideliseducation.com/api/agenda?page=0&filterCommunityEvents=true
