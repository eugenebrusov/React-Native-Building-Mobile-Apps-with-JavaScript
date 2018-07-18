import { actionTypes } from '../actions';

const initialState = {
    messages: []
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        case actionTypes.UPDATE_MESSAGES:
            return action.payload;
        case actionTypes.UNSUBSCRIBE_TO_GET_MESSAGES:
            return {
                messages: state.messages
            }
        default:
            return state;
    }
}