import { AnyAction } from 'redux';
import { CHANGE_INPUT_VALUE_MESSAGE, SAVE_MESSAGES } from '../actions/messages';

export interface MessagesState {
  subject: string;
  message: string;
  recipientid: string;
  messagesUser: [];
}

export const initialState: MessagesState = {
  subject: '',
  message: '',
  recipientid: '',
  messagesUser: [],
};

const messagesReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: MessagesState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_MESSAGE:
      return {
        ...state,
        [action.payload.input]: action.payload.newValue,
      };
    case SAVE_MESSAGES:
      return {
        ...state,
        messagesUser: [
          {
            sendOrReceived: 'messagesReceived',
            messages: action.payload.messagesReceived,
          },
          {
            sendOrReceived: 'messagesSent',
            messages: action.payload.messagesSent,
          },
        ],
      };
    default:
      return state;
  }
};

export default messagesReducer;
