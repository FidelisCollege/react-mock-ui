import { GET_COMMUNITY_FAILURE, GET_COMMUNITY_REQUEST, GET_COMMUNITY_SUCCESS, CLEAR_COMMUNITY_LIST } from '../actions/communityAction';
import { Action } from '../../../common/interfaces';

export function CommunitiesReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_COMMUNITY_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_COMMUNITY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_COMMUNITY_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_COMMUNITY_LIST:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}
