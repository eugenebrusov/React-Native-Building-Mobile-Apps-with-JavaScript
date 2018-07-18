import { postMessage } from './services/api';

export const actionTypes = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    POST_MESSAGE: 'POST_MESSAGE',
    POST_MESSAGE_SUCCESS: 'POST_MESSAGE_SUCCESS',
    POST_MESSAGE_ERROR: 'POST_MESSAGE_ERROR'
}

export const postMessageToServer = (message) => (dispatch) => {
    dispatch({
        type: actionTypes.POST_MESSAGE,
        payload: {
            message,
            incoming: false
        }
    });
    postMessage(message)
        .then(() => {
            dispatch({
                type: actionTypes.POST_MESSAGE_SUCCESS
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.POST_MESSAGE_ERROR,
                error
            });
        });
}

export function addMessage(message) {
    return {
        type: actionTypes.ADD_MESSAGE,
        payload: {
            message,
            incoming: false
        }
    }
}