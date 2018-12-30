"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMenu = undefined;

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _config = require("../../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setMenu() {
  (0, _request2.default)({
    method: "post",
    uri: `https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${_config.messengerconfig.PAGE_ACCESS_TOKEN}`,
    json: {
      "persistent_menu": [{
        "locale": "default",
        "composer_input_disabled": true,
        "call_to_actions": [{
          "title": "My Account",
          "type": "nested",
          "call_to_actions": [{
            "title": "Pay Bill",
            "type": "postback",
            "payload": "PAYBILL_PAYLOAD"
          }, {
            "type": "web_url",
            "title": "Latest News",
            "url": "https://www.messenger.com/",
            "webview_height_ratio": "full"
          }]
        }]
      }]
    }
  }, (req, res, body) => {
    debugger;
  });
}

exports.setMenu = setMenu;
//# sourceMappingURL=index.js.map