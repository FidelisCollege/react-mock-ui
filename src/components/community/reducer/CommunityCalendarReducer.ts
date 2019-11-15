import { GET_COMMUNITY_CALENDAR_FAILURE, GET_COMMUNITY_CALENDAR_REQUEST, GET_COMMUNITY_CALENDAR_SUCCESS, CLEAR_COMMUNITY_CALENDAR } from '../actions/CommunityCalendarAction';
import { Action } from '../../../common/interfaces';

export function CommunitiesCalendarReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_COMMUNITY_CALENDAR_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_COMMUNITY_CALENDAR_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_COMMUNITY_CALENDAR_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_COMMUNITY_CALENDAR:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

