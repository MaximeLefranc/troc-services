import { AnyAction } from 'redux';
import { CHANGE_INPUT_VALUE_CONTACT } from '../actions/contact';

export interface ContactState {
  lastname: string;
  firstname: string;
  email: string;
  subject: string;
  message: string;
  messageSystem: string;
  contactFormCompleted: boolean;
}

export const initialState: ContactState = {
  lastname: '',
  firstname: '',
  subject: '',
  email: '',
  message: '',
  messageSystem: '',
  contactFormCompleted: false,
};

const contactReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: ContactState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_CONTACT:
      return {
        ...state,
        [action.payload.input]: action.payload.newValue,
      };
    default:
      return state;
  }
};

export default contactReducer;
