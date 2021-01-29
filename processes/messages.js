const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');
module.exports = function processMessage(event) {
    if (!event.message.is_echo) {
        const message = event.message;
        const senderID = event.sender.id;
        if (message.text) {
            let messageTest = '';
            switch (message.text) {
                case '1':
                    // send to tel
                    // check if mobile device and give currect answer.
                    senderAction(senderID);
                    messageTest = `in switch case 1! + \n ${message.text}`
                    sendMessage(senderID, {text: messageTest}).then((res) => {
                        window.open('tel:2344')
                    })
                    break;
                case '2':
                    sendMessage(senderID, {text: 'you clicked 2 to see the menu'}).then((res) => {
                        if( navigator.userAgent.match(/Android/i)
                            || navigator.userAgent.match(/webOS/i)
                            || navigator.userAgent.match(/iPhone/i)
                            || navigator.userAgent.match(/iPad/i)
                            || navigator.userAgent.match(/iPod/i)
                            || navigator.userAgent.match(/BlackBerry/i)
                            || navigator.userAgent.match(/Windows Phone/i)) {
                            sendMessage(senderID, {text: 'checking MOBILE'}).then((res) => {
                            })
                        } else {
                            sendMessage(senderID, {text: 'not MOBILE'}).then((res) => {
                            })
                        }
                    })
                    // show menu/send to menu Link
                    break;
                case '3':
                    // make online Delivery - send Wolt?
                    break;
            }

        }
    }
}


//     // true for mobile device
//     document.write("mobile device");
