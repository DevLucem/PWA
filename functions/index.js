const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const {initializeApp, cert} = require("firebase-admin/app");
const {getMessaging} = require("firebase-admin/messaging");

// const app = initializeApp({credential: cert(require("./service-account.json"))}); // for local testing
const app = initializeApp(); // for production
const messaging = getMessaging(app);

exports.notify = onRequest(async (request, response) => {
    // Ensure the request is a POST
    if (request.method !== "POST") {
        logger.error("Invalid request method", { method: request.method });
        return response.status(405).send("Method Not Allowed");
    }

    // Validate request body
    const { title, body, token } = request.body;
    if (!title || !body || !token) {
        logger.error("Missing required fields", { body: request.body });
        return response.status(400).send("Missing title, body, or token");
    }

    try {
        logger.info("Test Notification", { structuredData: true });
        logger.info("Request Body:", { title, body, token }, { structuredData: true });

        const message = {
            notification: {
                title,
                body,
            },
            token,
        };

        const res = await messaging.send(message);
        logger.info("Successfully sent message:", res, { structuredData: true });
        return response.sendStatus(200);
    } catch (error) {
        logger.error("Error sending message:", error, { structuredData: true });
        // Provide more specific error messages if possible
        if (error.code === "messaging/invalid-registration-token" || 
            error.code === "messaging/registration-token-not-registered") {
            return response.status(400).send("Invalid or unregistered token");
        }
        return response.status(500).send("Error sending message");
    }
});