/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
//import sendApi from './send';






const handleReceivePostback = (event) => {
  
  

};


const handleReceiveMessage = (event) => {
  const message = event.message;
  const senderId = event.sender.id;

  // It's good practice to send the user a read receipt so they know
  // the bot has seen the message. This can prevent a user
  // spamming the bot if the requests take some time to return.
  //sendApi.sendReadReceipt(senderId);

  //if (message.text) { sendApi.sendHelloRewardMessage(senderId); }
};



export default {
  handleReceivePostback,
  handleReceiveMessage,
};
