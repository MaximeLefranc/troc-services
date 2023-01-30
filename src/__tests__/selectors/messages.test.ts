// ---- TypeScript Import ----
import {
  MessageDetail,
  MessagesInterface,
} from '../../components/ListMessages';

// ---- Selector Import ----
import {
  findMessageById,
  haveMessagesNotRead,
  sentOrReceivedMessages,
} from '../../selectors/messages';

/* =======================================
   =============== DATA ==================
   ======================================= */

const messagesUser: MessagesInterface[] = [
  {
    sendOrReceived: 'messagesReceived',
    messages: [
      {
        id: 1,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: false,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
      {
        id: 2,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: true,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
    ],
  },
  {
    sendOrReceived: 'messagesSent',
    messages: [
      {
        id: 3,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: false,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
      {
        id: 4,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: true,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
    ],
  },
];

const messageDetail1: MessageDetail[] = [
  {
    id: 1,
    content: 'Test content',
    sentAt: 'Date test',
    isRead: false,
    isHidden: false,
    sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
    receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
    object: 'Test subject',
  },
];

const messagesReceived: MessagesInterface = {
  sendOrReceived: 'messagesReceived',
  messages: [
    {
      id: 1,
      content: 'Test content',
      sentAt: 'Date test',
      isRead: false,
      isHidden: false,
      sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      object: 'Test subject',
    },
    {
      id: 2,
      content: 'Test content',
      sentAt: 'Date test',
      isRead: true,
      isHidden: false,
      sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      object: 'Test subject',
    },
  ],
};

const messagesSent: MessagesInterface = {
  sendOrReceived: 'messagesSent',
  messages: [
    {
      id: 3,
      content: 'Test content',
      sentAt: 'Date test',
      isRead: false,
      isHidden: false,
      sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      object: 'Test subject',
    },
    {
      id: 4,
      content: 'Test content',
      sentAt: 'Date test',
      isRead: true,
      isHidden: false,
      sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
      object: 'Test subject',
    },
  ],
};

const messagesUserRead: MessagesInterface[] = [
  {
    sendOrReceived: 'messagesReceived',
    messages: [
      {
        id: 1,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: true,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
      {
        id: 2,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: true,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
    ],
  },
  {
    sendOrReceived: 'messagesSent',
    messages: [
      {
        id: 3,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: true,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
      {
        id: 4,
        content: 'Test content',
        sentAt: 'Date test',
        isRead: true,
        isHidden: false,
        sender: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        receiver: { id: 1, nickname: 'Nickname', imageName: 'test.jpg' },
        object: 'Test subject',
      },
    ],
  },
];

/* =======================================
   =============== TESTS =================
   ======================================= */

describe('Test function sentOrReceivedMessages(): Search one array of sent messages or received messages', () => {
  test('Called with messsages array user, should return object of received messages or sent messages', () => {
    expect(
      sentOrReceivedMessages(messagesUser, 'messagesReceived')
    ).toStrictEqual(messagesReceived);
    expect(sentOrReceivedMessages(messagesUser, 'messagesSent')).toStrictEqual(
      messagesSent
    );
  });
  test('Called with an messages array user empty, should return false', () => {
    expect(sentOrReceivedMessages([], 'messagesReceived')).toBeFalsy();
    expect(sentOrReceivedMessages([], 'messagesSent')).toBeFalsy();
  });
});

describe('Test function findMessageById(): Search in messages array user one message by this ID', () => {
  test('Called with a wrong slug should return an empty array', () => {
    expect(findMessageById(messagesUser, 'wrong ID message')).toStrictEqual([]);
  });
  test('Called with a right slug should return an array of searched message', () => {
    expect(findMessageById(messagesUser, '1')).toStrictEqual(messageDetail1);
  });
  test('Called with an invalid type slug, should return false', () => {
    expect(findMessageById(messagesUser, undefined)).toBeFalsy();
  });
});

describe('Test function haveMessagesNotRead(): Search in messages array user, if there are unread messages', () => {
  test('Called with a message array that contains unread messages, should return true', () => {
    expect(haveMessagesNotRead(messagesUser)).toBeTruthy();
  });
  test('Called with a message array that no contains unread messages, should return false', () => {
    return expect(haveMessagesNotRead(messagesUserRead)).toBeFalsy();
  });
});
