import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actions/getUserAction';
import { Action } from '../../../common/interfaces';

export function getUserReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_USER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case GET_USER_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.response.data.user));
            localStorage.setItem('primaryCommunity', JSON.stringify(action.response.data.primaryCommunity));
            localStorage.setItem('coach', JSON.stringify(action.response.data.coach));

            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: false
            });
        case GET_USER_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
    }
    return state;
}
