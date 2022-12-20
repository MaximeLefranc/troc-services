/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_MESSAGE = 'CHANGE_INPUT_VALUE_MESSAGE';
export const FETCH_ALL_MESSAGES_FOR_ONE_USER =
  'FETCH_ALL_MESSAGES_FOR_ONE_USER';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Change the value's inpputs of messages state
 * @param value  value input
 * @param nameStateInput name of input in messages state
 * @returns Object Action
 */
export function actionChangeInputValueMessage(
  value: string | File,
  nameStateInput: string
) {
  return {
    type: CHANGE_INPUT_VALUE_MESSAGE,
    payload: {
      newValue: value,
      input: nameStateInput,
    },
  };
}

/**
 * Fetch all messages from API for one user
 * @returns Object Action
 */
export function actionFetchAllMessagesForOneUser() {
  return {
    type: FETCH_ALL_MESSAGES_FOR_ONE_USER,
  };
}

/**
 * Save user messages in messages state (Received and sent)
 * @param messagesReceived Received Messages user to save in messages state
 * @param messagesSent Sent Messages user to save in messages state
 * @returns Object Action
 */
export function actionSaveMessages(messagesReceived: [], messagesSent: []) {
  return {
    type: SAVE_MESSAGES,
    payload: {
      messagesReceived: messagesReceived,
      messagesSent: messagesSent,
    },
  };
}
