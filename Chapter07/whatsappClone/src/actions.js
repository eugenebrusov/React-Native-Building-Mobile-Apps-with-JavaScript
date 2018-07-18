import { postMessage, getMessages } from './services/api';

export const actionTypes = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    POST_MESSAGE: 'POST_MESSAGE',
    POST_MESSAGE_SUCCESS: 'POST_MESSAGE_SUCCESS',
    POST_MESSAGE_ERROR: 'POST_MESSAGE_ERROR',
    UPDATE_MESSAGES: 'UPDATE_MESSAGES',
    SUBSCRIBE_TO_GET_MESSAGES: 'SUBSCRIBE_TO_GET_MESSAGES',
    UNSUBSCRIBE_TO_GET_MESSAGES: 'UNSUBSCRIBE_TO_GET_MESSAGES',
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

export const subscribeToGetMessagesFromServer = () => (dispatch) => {
    dispatch({
        type: actionTypes.SUBSCRIBE_TO_GET_MESSAGES
    });
    const unsubscribeFn = getMessages((snapshot) => {
        dispatch({
            type: actionTypes.UPDATE_MESSAGES,
            payload: {
               messages: Object.values(snapshot.val()),
               unsubscribeFn
            }
        });
    });
}

export const unsubscribeToGetMessagesFromServer = () => (dispatch, getState) => {
    if (getState().unsubscribeFn) {
        getState().unsubscribeFn();
        dispatch({
            type: actionTypes.UNSUBSCRIBE_TO_GET_MESSAGES
        });
    }
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