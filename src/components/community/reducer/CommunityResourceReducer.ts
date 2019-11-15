import { GET_COMMUNITY_RESOURCE_FAILURE, GET_COMMUNITY_RESOURCE_REQUEST, GET_COMMUNITY_RESOURCE_SUCCESS, CLEAR_COMMUNITY_RESOURCE } from '../actions/CommunityResourceAction';
import { Action } from '../../../common/interfaces';

export function CommunitiesResourcesReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_COMMUNITY_RESOURCE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_COMMUNITY_RESOURCE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_COMMUNITY_RESOURCE_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_COMMUNITY_RESOURCE:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}

