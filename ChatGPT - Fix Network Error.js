// ==UserScript==
// @name        ChatGPT - Fix Network Error
// @namespace   https://github.com/Thibb1
// @match       https://chat.openai.com/chat
// @grant       none
// @version     1.1
// @author      Thibb1
// @description 12/13/2022, 2:18:45 PM
// ==/UserScript==

(function() {
  'use strict';
  // Store text in a var
  let current_text = "";

  // Fix found by Roseirus#9302 or Bale#7382 and improved by me
  // Replaced setTimeout by onload advice by KCGD#7000
  window.onload = function () {
    const publish = window.PubSub.publish;
    window.PubSub.publish = function(code, obj) {
      // If the flag is set an error has occured
      if (obj.flag !== undefined) {
        console.log("Caught an error, fixing", obj);
        // Revert the text state and add the error at the end
        obj.text = `${current_text}\n\n Error: ${obj.text}`;
        // Delete the flag so the text stay white
        delete obj.flag;
      } else {
        // Save the current state of the text
        current_text = obj.text;
      }
      // Execute the rest
      publish(code, obj);
    }
    console.log("Fix loaded");
  };
})();
