const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');
module.exports = function processMessage(event) {
    if (!event.message.is_echo) {
        const message = event.message;
        const senderID = event.sender.id;
        if (message.text) {
            senderAction(senderID);
            const messageTest = `BLA BLA RESPONSE! + \n ${message.text}`
            sendMessage(senderID, {text: messageTest})
        }
    }
}
