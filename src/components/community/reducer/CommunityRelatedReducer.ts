import { GET_COMMUNITY_RELATED_FAILURE, GET_COMMUNITY_RELATED_REQUEST, GET_COMMUNITY_RELATED_SUCCESS, CLEAR_COMMUNITY_RELATED } from '../actions/CommunityRelatedAction';
import { Action } from '../../../common/interfaces';

export function CommunitiesRelatedReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_COMMUNITY_RELATED_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_COMMUNITY_RELATED_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_COMMUNITY_RELATED_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_COMMUNITY_RELATED:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

