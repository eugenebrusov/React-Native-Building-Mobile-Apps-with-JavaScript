export const actionTypes = {
    ADD_MESSAGE: 'ADD_MESSAGE'
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