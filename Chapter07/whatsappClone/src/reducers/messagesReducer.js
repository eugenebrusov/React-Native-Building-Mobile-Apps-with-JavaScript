import { actionTypes } from '../actions';

const initialState = {
    messages: [
        {
            incoming: true,
            message: 'Hi Vladimir'
        }
    ],
    xrenages: '123456'
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    action.payload
                ],
                xrenages: '98765'
            };
        default:
            return state;
    }
}