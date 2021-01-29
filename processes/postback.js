const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');

module.exports = function processPostback(event) {
    const senderID = event.sender.id;
    const payload = event.postback.payload;
    if (payload === 'CHAT_START') {
        request({ url: "https://graph.facebook.com/v2.6/" + senderID,
            qs: { access_token: process.env.PAGE_ACCESS_TOKEN,
                fields: "first_name"
            },
            method: "GET"
        }, function(error, response, body) {
            let greeting = '';
            let callToAction = '';
            let showMenu = '';
            if (error) {
                console.error("Error getting user name: " + error);
            } else {
                let bodyObject = JSON.parse(body);
                name = bodyObject.first_name;
                greeting = "🍔🍔🍔🍔 Hello " + name + "! 🍔🍔🍔🍔";
                menu = `What do you want to do? \n 1) Call the resterunt
                                                \n 2) see the menu 
                                                \n 3) make an online delivery`
                callToAction = "How can i help you?";

            }
            let message = greeting;
            let message2 = menu;
            let message3 = callToAction;
            senderAction(senderID);
            sendMessage(senderID, {text: message}).then(() => {
                sendMessage(senderID, { text: message2 }).then(() => {
                    sendMessage(senderID, {  text: message3});
                    })
                });
            });
    }
}
