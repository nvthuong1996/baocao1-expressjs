'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const APP_ID = process.env.APP_ID; /**
                                    * Copyright 2017-present, Facebook, Inc. All rights reserved.
                                    *
                                    * This source code is licensed under the license found in the
                                    * LICENSE file in the root directory of this source tree.
                                    */

// ===== MODULES ===============================================================

const PAGE_ID = process.env.PAGE_ID;

/**
 * For logging custom events to FB Analytics dashboard from server -
 * facebook.com/analytics
 *
 * @param {string} eventName - Name of event in fb analytics.
 * @param {string} payload - Parameters stored with event in fb analytics.
 * @param {string} psid - PSID of user who triggered the event.
 * @returns {undefined}
 */
const fbLog = (eventName, payload, psid) => {
  if (payload !== null && typeof payload === 'object') {
    payload["_eventName"] = eventName;
    _request2.default.post({
      url: "https://graph.facebook.com/" + APP_ID + "/activities",
      form: {
        event: 'CUSTOM_APP_EVENTS',
        custom_events: JSON.stringify([payload]),
        advertiser_tracking_enabled: 0,
        application_tracking_enabled: 0,
        extinfo: JSON.stringify(['mb1']),
        page_id: PAGE_ID,
        page_scoped_user_id: psid
      }
    }, function (err, httpResponse, body) {
      console.error(err);
      console.log(httpResponse.statusCode);
      console.log(body);
    });
  } else {
    console.log("Invalid payload for fb logging.");
  }
};

exports.default = {
  fbLog
};
//# sourceMappingURL=fba-logging.js.map