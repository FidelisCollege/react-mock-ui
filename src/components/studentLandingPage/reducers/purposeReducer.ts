import { GET_PURPOSE_FAILURE, GET_PURPOSE_REQUEST, GET_PURPOSE_SUCCESS, CLEAR_PURPOSE_LIST } from '../actions/purposeAction';
import { Action } from '../../../common/interfaces';

export function PurposeReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_PURPOSE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_PURPOSE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_PURPOSE_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        case CLEAR_PURPOSE_LIST:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: false
            });
    }
    return state;
}
