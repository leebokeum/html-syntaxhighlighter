var gcm = require('node-gcm');
var fs = require('fs');

var message = new gcm.Message();

var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        title: 'saltfactory GCM demo',
        message: 'Google Cloud Messaging 테스트',
        custom_key1: 'custom data1',
        custom_key2: 'custom data2'
    }
});

var server_api_key = 'AIzaSyAidW_Ux-oIMAAYNSfgJSdXVD8i8n4pNiE';
var sender = new gcm.Sender(server_api_key);
var registrationIds = [];

var token = 'dbf42zUbbog:APA91bHy29NTO2GNktR27ePMQjTBsrIig4y6rzeE5gYtj1Zi6WVwKK45p5LEabcgKT6B3g6JYo0uqxRj7MQA8CUFnaD6LxsIZiZnMOezmKKR0fNLuD-UYpZrYDNjhBfxLwj1l6ongN1s';
registrationIds.push(token);

sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});