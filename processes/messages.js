const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');
module.exports = function processMessage(event) {
    if (!event.message.is_echo) {
        const message = event.message;
        const senderID = event.sender.id;
        if (message.text) {
            senderAction(senderID);
            // sendMessage(senderID, {text: navigator.userAgent})
            // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //     sendMessage(senderID, {text: 'this is mobile'})
            // } else {
            //     sendMessage(senderID, {text: 'this is not mobile'})
            // }
            // switch (message.text) {
            //     case '1':
            //         // send to tel
            //         // check if mobile device and give currect answer.
            //         window.open('tel:2344')
            //         break;
            //     case '2':
            //         // show menu/send to menu Link
            //         break;
            //     case '3':
            //         // make online Delivery - send Wolt?
            //         break;
            // }
            // const messageTest = `BLA BLA RESPONSE! + \n ${message.text}`
            // sendMessage(senderID, {text: messageTest})
        }
    }
}


//     // true for mobile device
//     document.write("mobile device");
