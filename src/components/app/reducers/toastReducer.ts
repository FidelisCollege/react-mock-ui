import { NOTIFY } from '../actions/toasterAction';


export function ToastReducer(state = {}, action: any): any {
    if (action.type === NOTIFY) {
        return Object.assign({}, state, {
            success: action.data.success,
            message: action.data.message
        });
    }
    return state;
}
