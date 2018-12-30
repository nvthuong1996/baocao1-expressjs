'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castArray = require('lodash/castArray');

var _castArray2 = _interopRequireDefault(_castArray);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../../config.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===== MODULES ===============================================================
/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== LODASH ================================================================
const PAGE_ACCESS_TOKEN = _config.messengerconfig.PAGE_ACCESS_TOKEN;

/**
 * Send messages in order to the Facebook graph API.
 *
 * @param   {String}          endPoint - Specific endpoint to send data to
 * @param   {Object|Object[]} messageDataArray - Payloads to send individually
 * @param   {Object}          queryParams - Query Parameters
 * @param   {Object}          retries - # of times to attempt to send a message.
 * @returns {undefined}
 */
const callAPI = (endPoint, messageDataArray, queryParams = {}, retries = 1) => {
  // Error if developer forgot to specify an endpoint to send our request to
  if (!endPoint) {
    console.error('callAPI requires you specify an endpoint.');
    return;
  }

  // Error if we've run out of retries.
  if (retries < 0) {
    console.error('No more retries left.', { endPoint, messageDataArray, queryParams });

    return;
  }

  // ensure query parameters have a PAGE_ACCESS_TOKEN value
  /* eslint-disable camelcase */
  const query = Object.assign({ access_token: PAGE_ACCESS_TOKEN }, queryParams);
  /* eslint-enable camelcase */

  // ready the first message in the array for send.
  const [messageToSend, ...queue] = (0, _castArray2.default)(messageDataArray);
  (0, _request2.default)({
    uri: `https://graph.facebook.com/v2.6/me/${endPoint}`,
    qs: query,
    method: 'POST',
    json: messageToSend

  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Message has been successfully received by Facebook.
      console.log(`Successfully sent message to ${endPoint} endpoint: `, JSON.stringify(body));

      // Continue sending payloads until queue empty.
      if (!(0, _isEmpty2.default)(queue)) {
        callAPI(endPoint, queue, queryParams);
      }
    } else {
      // Message has not been successfully received by Facebook.
      console.error(`Failed calling Messenger API endpoint ${endPoint}`, response.statusCode, response.statusMessage, body.error, queryParams);

      // Retry the request
      console.error(`Retrying Request: ${retries} left`);
      callAPI(endPoint, messageDataArray, queryParams, retries - 1);
    }
  });
};

const callMessagesAPI = (messageDataArray, queryParams = {}) => {
  return callAPI('messages', messageDataArray, queryParams);
};

const callThreadAPI = (messageDataArray, queryParams = {}) => {
  return callAPI('thread_settings', messageDataArray, queryParams);
};

exports.default = {
  callMessagesAPI,
  callThreadAPI
};
//# sourceMappingURL=api.js.map