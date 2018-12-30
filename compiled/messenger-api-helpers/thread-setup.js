'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _config = require('../../config.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * SETUP
 *
 * Methods that should only be called at first run
 * that help set up Messenger related config
 */

/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MESSENGER =============================================================
const SERVER_URL = _config.messengerconfig.SERVER_URL;

const goHome = {
  type: 'web_url',
  title: 'Ptit Chatbox',
  url: `${SERVER_URL}/`,
  webview_height_ratio: 'tall',
  messenger_extensions: true
};

const changeGiftButton = {
  type: 'postback',
  title: 'Change Gift',
  payload: JSON.stringify({
    type: 'CHANGE_GIFT'
  })
};

const persistentMenu = {
  setting_type: 'call_to_actions',
  thread_state: 'existing_thread',
  call_to_actions: [changeGiftButton]
};

const getStarted = {
  setting_type: 'call_to_actions',
  thread_state: 'new_thread',
  call_to_actions: [{
    payload: JSON.stringify({
      type: 'GET_STARTED'
    })
  }]
};

/**
 * Adds the server url to the Messenger App's whitelist.
 *
 * This is required to use Messenger Extensions which
 * this demo uses to get UserId's from a Messenger WebView.
 *
 * @returns {undefined}
 */
const setDomainWhitelisting = () => {
  _api2.default.callThreadAPI({
    setting_type: 'domain_whitelisting',
    whitelisted_domains: [SERVER_URL],
    domain_action_type: 'add'
  });
};

/**
 * Sets the persistent menu for the application
 *
 * @returns {undefined}
 */
const setPersistentMenu = () => {
  _api2.default.callThreadAPI({
    setting_type: 'call_to_actions',
    thread_state: 'existing_thread',
    call_to_actions: [{
      type: 'web_url',
      title: 'Ptit Chatbox',
      url: `${SERVER_URL}/login`,
      webview_height_ratio: 'full',
      messenger_extensions: true
    }]
  });
};

/**
 * Sets the Get Started button for the application
 *
 * @returns {undefined}
 */
const setGetStarted = () => {
  _api2.default.callThreadAPI(getStarted);
};

exports.default = {
  setDomainWhitelisting,
  setPersistentMenu,
  setGetStarted
};
//# sourceMappingURL=thread-setup.js.map