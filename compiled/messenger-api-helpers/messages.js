'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


const SERVER_URL = process.env.SERVER_URL;

const setPreferencesButton = {
  type: 'web_url',
  title: 'Set Gift Preferences',
  url: `${SERVER_URL}/`,
  webview_height_ratio: 'tall',
  messenger_extensions: true
};

/*
 * Button for displaying the view details button for a gift
 */
const viewDetailsButton = giftId => {
  return {
    title: 'View Details',
    type: 'web_url',
    url: `${SERVER_URL}/gifts/${giftId}`,
    webview_height_ratio: 'compact',
    messenger_extensions: true
  };
};

/*
 * Button for selecting a gift
 */
const chooseGiftButton = giftId => {
  return {
    type: 'postback',
    title: 'Choose This Gift',
    payload: JSON.stringify({
      type: 'CHOOSE_GIFT',
      data: {
        giftId: giftId
      }
    })
  };
};

/**
 * Button for displaying a postback button that triggers the change gift flow
 */
const changeGiftButton = {
  type: 'postback',
  title: 'Change Gift',
  payload: JSON.stringify({
    type: 'CHANGE_GIFT'
  })
};

/**
 * Message that informs the user of the promotion and prompts
 * them to set their preferences.
 */
const helloRewardMessage = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'Thanks for joining our reward program! We’d love to send you a free birthday gift.',
      buttons: [setPreferencesButton]
    }
  }
};

/**
 * Message that informs the user that their preferences have changed.
 */
const preferencesUpdatedMessage = {
  text: 'OK, we’ve updated your preferences. You can change them anytime you want from the menu.'
};

/**
 * Message that informs that we have their current gift selected.
 */
const currentGiftText = {
  text: 'This is your current gift selection. If you’d like to change it, you can do so below.'
};

/**
 * Message that precedes us displaying recommended gifts.
 */
const giftOptionsText = {
  text: 'Here are some gift options for you:'
};

/**
 * The persistent menu for users to use.
 */
const persistentMenu = {
  setting_type: 'call_to_actions',
  thread_state: 'existing_thread',
  call_to_actions: [setPreferencesButton, changeGiftButton]
};

/**
 * The Get Started button.
 */
const getStarted = {
  setting_type: 'call_to_actions',
  thread_state: 'new_thread',
  call_to_actions: [{
    payload: JSON.stringify({
      type: 'GET_STARTED'
    })
  }]
};

exports.default = {
  helloRewardMessage,
  preferencesUpdatedMessage
};
//# sourceMappingURL=messages.js.map