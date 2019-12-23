import { GET_MENTOR_FAILURE, GET_MENTOR_REQUEST, GET_MENTOR_SUCCESS, CLEAR_MENTOR_LIST } from '../actions/mentorAction';
import { Action } from '../../../common/interfaces';

export function MentorsReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_MENTOR_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_MENTOR_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_MENTOR_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_MENTOR_LIST:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}
