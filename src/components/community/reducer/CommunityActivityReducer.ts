import { GET_COMMUNITY_ACTIVITY_FAILURE, GET_COMMUNITY_ACTIVITY_REQUEST, GET_COMMUNITY_ACTIVITY_SUCCESS, CLEAR_COMMUNITY_ACTIVITY } from '../actions/CommunityActivityAction';
import { Action } from '../../../common/interfaces';

export function CommunitiesActivityReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_COMMUNITY_ACTIVITY_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_COMMUNITY_ACTIVITY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_COMMUNITY_ACTIVITY_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_COMMUNITY_ACTIVITY:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

