import { AnyAction } from 'redux';
import { CHANGE_INPUT_VALUE_MESSAGE } from '../actions/messages';

export interface MessagesState {
  subject: string;
  message: string;
  recipientid: string;
}

export const initialState: MessagesState = {
  subject: '',
  message: '',
  recipientid: '',
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
    default:
      return state;
  }
};

export default messagesReducer;
