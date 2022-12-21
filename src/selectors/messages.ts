import { MessageDetail, MessagesInterface } from '../components/ListMessages';

/**
 * Search one array of sent messages or received messages
 * @param messagesList list of all messages in state
 * @param typeMessages type messages searched (received or sent)
 * @returns {MessagesInterface | false}
 */
export function SentOrReceivedMessages(
  messagesList: { sendOrReceived: string; messages: [] }[],
  typeMessages: string
): MessagesInterface | false {
  const messagesToShow = messagesList.find(
    (element) => element.sendOrReceived === typeMessages
  );
  if (messagesToShow !== undefined) {
    return messagesToShow;
  }
  return false;
}

/**
 * Search one message by this id
 * @param listOfMessages list of all messages in state
 * @param idMessage id message to searched
 * @returns {MessageDetail[] | false}
 */
export function findMessageById(
  listOfMessages: [],
  idMessage: string | undefined
): MessageDetail[] | false {
  if (typeof idMessage === 'string') {
    const id = parseInt(idMessage);
    const messageFinded: MessageDetail[] = [];
    listOfMessages.filter((messageElement: MessagesInterface) => {
      messageElement.messages.forEach((element) => {
        if (element.id === id) {
          messageFinded.push(element);
        }
      });
    });
    return messageFinded;
  }
  return false;
}