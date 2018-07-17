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
    console.log("++messagesReducer");
    console.log(action);
    console.log("--messagesReducer");
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        default:
            return state;
    }
}