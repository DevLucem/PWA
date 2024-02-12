const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const {initializeApp, cert} = require("firebase-admin/app");
const {getMessaging} = require("firebase-admin/messaging");

// const app = initializeApp({credential: cert(require("./service-account.json"))}); // for local testing
const app = initializeApp(); // for production
const messaging = getMessaging(app);

exports.subscribe = onRequest((request, response) => {
    logger.info("New Subscription!", request.body, {structuredData: true});
    messaging.subscribeToTopic(request.body.token, request.body.topic).then(result => {
        console.log("Subscribed to topic:", result, request.body.topic);
        response.sendStatus(200)
    }).catch(error => {
        logger.error("Error subscribing to topic:", error, {structuredData: true});
        response.status(500).send("Error subscribing to topic");
    })
});

exports.notify = onRequest((request, response) => {
    logger.info("Test Notification", {structuredData: true});
    messaging.send({
        notification: {
            title: "Test Notification",
            body: request.body.text
        },
        data: {
            url: "https://pwa-progressive.web.app/notifications?tag=test-notification",
            tag: "test-notification"
        },
        topic: "all",
        webpush: {
            fcm_options: {
                link: "https://pwa-progressive.web.app/notifications",
            }
        }
    }).then(result => {
        console.log("Sent notification:", result);
        response.sendStatus(200)
    }).catch(error => {
        logger.error("Error sending notification:", error, {structuredData: true});
        response.status(500).send("Error sending notification");
    });
});