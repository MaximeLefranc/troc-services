/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_MESSAGE = 'CHANGE_INPUT_VALUE_MESSAGE';
export const FETCH_ALL_MESSAGES_FOR_ONE_USER =
  'FETCH_ALL_MESSAGES_FOR_ONE_USER';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SUCCESS_MESSAGE_SENT = 'SUCCESS_MESSAGE_SENT';
export const ERROR_MESSAGE_SENT = 'ERROR_MESSAGE_SENT';
export const MESSAGE_IS_READ = 'MESSAGE_IS_READ';
export const SET_TITLE_ADVERT_IN_SUBJECT_STATE =
  'SET_TITLE_ADVERT_IN_SUBJECT_STATE';

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

/**
 * Hide a message in DB with this id
 * @param idMessage id message to delete (hide in DB)
 * @returns Object Action
 */
export function actionDeleteMessage(idMessage: number) {
  return {
    type: DELETE_MESSAGE,
    payload: idMessage,
  };
}

/**
 * Send a message
 * @param idReceiver id member who will receive the message
 * @returns Object ACtion
 */
export function actionSendMessage(idReceiver: number) {
  return {
    type: SEND_MESSAGE,
    payload: idReceiver,
  };
}

/**
 * message sent successfully
 * @returns Object Action
 */
export function actionSuccessMessageSent() {
  return {
    type: SUCCESS_MESSAGE_SENT,
  };
}

/**
 * message sent with error
 * @param message Message to show
 * @returns Object Action
 */
export function actionErrorMessageSent(message: string) {
  return {
    type: ERROR_MESSAGE_SENT,
    payload: message,
  };
}

/**
 * Switch in DB isRead at true
 * @param idMessage Id of message to change value in DB
 * @returns Object Action
 */
export function actionMessageIsRead(idMessage: string) {
  return {
    type: MESSAGE_IS_READ,
    payload: idMessage,
  };
}

/**
 * Set in message state subject a title of advert before to send a message
 * @param titleAdvert title of advert to set in input object for send a message
 * @returns Object Action
 */
export function actionSetTitleAdvertInSubjectState(titleAdvert: string) {
  return {
    type: SET_TITLE_ADVERT_IN_SUBJECT_STATE,
    payload: titleAdvert,
  };
}
