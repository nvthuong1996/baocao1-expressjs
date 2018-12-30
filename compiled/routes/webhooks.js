'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _receive = require('../messenger-api-helpers/receive');

var _receive2 = _interopRequireDefault(_receive);

var _config = require('../../config.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===== MESSENGER =============================================================
const router = _express2.default.Router();

/**
 * This is used so that Facebook can verify that they have
 * the correct Webhook location for your app.
 *
 * The Webhook token must be set in your app's configuration page
 * as well as in your servers environment.
 */
/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
router.get('/', (req, res) => {
  if (req.query['hub.verify_token'] === _config.messengerconfig.WEBHOOK_TOKEN) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong token');
  }
});

/**
 * Once your Webhook is verified this is where you will receive
 * all interactions from the users of you Messenger Application.
 *
 * You can subscribe to many different types of messages.
 * However for this demo we've only handled what is necessary:
 * 1. Regular messages
 * 2. Postbacks
 */
router.post('/', (req, res) => {
  /*
    You must send back a status of 200(success) within 20 seconds
    to let us know you've successfully received the callback.
    Otherwise, the request will time out.
      When a request times out from Facebook the service attempts
    to resend the message.
      This is why it is good to send a response immediately so you
    don't get duplicate messages in the event that a request takes
    awhile to process.
  */
  res.sendStatus(200);

  const data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {
    // Iterate over each entry
    // There may be multiple if batched
    data.entry.forEach(pageEntry => {
      // Iterate over each messaging event and handle accordingly
      pageEntry.messaging.forEach(messagingEvent => {
        console.log({ messagingEvent });
        if (messagingEvent.message) {
          _receive2.default.handleReceiveMessage(messagingEvent);
        } else if (messagingEvent.postback) {
          _receive2.default.handleReceivePostback(messagingEvent);
        } else {
          console.log('Webhook received unknown messagingEvent: ', messagingEvent);
        }
      });
    });
  }
});

exports.default = router;
//# sourceMappingURL=webhooks.js.map