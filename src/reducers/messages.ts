// ---- TypeScript Import ----
import { AnyAction } from 'redux';

// ---- Actions Import ----
import {
  CHANGE_INPUT_VALUE_MESSAGE,
  ERROR_MESSAGE_SENT,
  SAVE_MESSAGES,
  SET_TITLE_ADVERT_IN_SUBJECT_STATE,
  SUCCESS_MESSAGE_SENT,
} from '../actions/messages';

export interface MessagesState {
  subject: string;
  message: string;
  messageError: string;
  messagesUser: [];
}

export const initialState: MessagesState = {
  subject: '',
  message: '',
  messageError: '',
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
    case SUCCESS_MESSAGE_SENT:
      return {
        ...state,
        subject: '',
        message: '',
      };
    case ERROR_MESSAGE_SENT:
      return {
        ...state,
        messageError: action.payload,
      };
    case SET_TITLE_ADVERT_IN_SUBJECT_STATE:
      return {
        ...state,
        subject: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducer;
