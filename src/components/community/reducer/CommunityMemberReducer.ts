import { GET_COMMUNITY_MEMBERS_FAILURE, GET_COMMUNITY_MEMBERS_REQUEST, GET_COMMUNITY_MEMBERS_SUCCESS, CLEAR_COMMUNITY_MEMBERS } from '../actions/CommunityMemberAction';
import { Action } from '../../../common/interfaces';

export function CommunitiesMemberReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_COMMUNITY_MEMBERS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_COMMUNITY_MEMBERS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_COMMUNITY_MEMBERS_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_COMMUNITY_MEMBERS:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

