'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Turns typing indicator on.
/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MESSENGER =============================================================
const typingOn = recipientId => {
  return {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_on' // eslint-disable-line camelcase
  };
};

// Turns typing indicator off.
const typingOff = recipientId => {
  return {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_off' // eslint-disable-line camelcase
  };
};

// Wraps a message JSON object with recipient information.
const messageToJSON = (recipientId, messagePayload) => {
  return {
    recipient: {
      id: recipientId
    },
    message: messagePayload
  };
};

// Send one or more messages using the Send API.
const sendMessage = (recipientId, messagePayloads) => {
  const messagePayloadArray = castArray(messagePayloads).map(messagePayload => messageToJSON(recipientId, messagePayload));

  _api2.default.callMessagesAPI([typingOn(recipientId), ...messagePayloadArray, typingOff(recipientId)]);
};

// Send a read receipt to indicate the message has been read
const sendReadReceipt = recipientId => {
  const messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: 'mark_seen' // eslint-disable-line camelcase
  };

  _api2.default.callMessagesAPI(messageData);
};

exports.default = {
  sendMessage,
  sendReadReceipt,
  sendHelloRewardMessage,
  sendPreferencesChangedMessage,
  sendChooseGiftMessage,
  sendGiftChangedMessage,
  sendGiftPurchasedMessage
};
//# sourceMappingURL=send.js.map