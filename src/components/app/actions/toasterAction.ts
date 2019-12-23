export const NOTIFY = "NOTIFY";

export interface ToastInterface {
    toastAction?(success: boolean, message: string): Function;
}

export function toast(success, message) {
    return {
        type: NOTIFY,
        data: { success, message }
    };
}

export function toastAction(success, message): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(toast(success, message));
    }
}
