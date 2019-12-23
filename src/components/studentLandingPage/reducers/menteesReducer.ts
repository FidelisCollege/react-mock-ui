import { GET_MENTEE_FAILURE, GET_MENTEE_REQUEST, GET_MENTEE_SUCCESS, CLEAR_MENTEE_LIST } from '../actions/menteeAction';
import { Action } from '../../../common/interfaces';

export function MenteesReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_MENTEE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_MENTEE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_MENTEE_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_MENTEE_LIST:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}
