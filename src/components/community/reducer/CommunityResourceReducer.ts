import { GET_COMMUNITY_ABOUT_FAILURE, GET_COMMUNITY_ABOUT_REQUEST, GET_COMMUNITY_ABOUT_SUCCESS, CLEAR_COMMUNITY_ABOUT } from '../actions/CommunityAboutAction';
import { Action } from '../../../common/interfaces';

export function CommunitiesAboutReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_COMMUNITY_ABOUT_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_COMMUNITY_ABOUT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_COMMUNITY_ABOUT_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_COMMUNITY_ABOUT:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

