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
            if (error) {
                console.error("Error getting user name: " + error);
            } else {
                let bodyObject = JSON.parse(body);
                console.log(bodyObject);
                name = bodyObject.first_name;
                greeting = "Hello " + name  + "and Oren. ";
            }
            let message = greeting + "Welcome to My First BOT.";
            let message2 = "Lets check the code out and try to understand it!"
            let message3 = "Next commit is on you :) .";
            senderAction(senderID);
            sendMessage(senderID, {text: message}).then(() => {
                sendMessage(senderID, { text: message2 }).then(() => {
                    sendMessage(senderID, {  text: message3}).then(() => {
                        sendMessage(senderID, { text: '🎈' });
                    })
                });
            });
        });
    }
}
