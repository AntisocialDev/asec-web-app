"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.createBooking = functions.https.onRequest(async (request, response) => {
    functions.logger.info("Creating booking", { structuredData: true });
    if (request.method !== "POST") {
        response.status(405).send("Method Not Allowed");
        return;
    }
    const { fullName, email, phone, eventType, eventDate, guests, description, specialRequests, } = request.body;
    if (!fullName || !phone || !eventType || !eventDate || !guests) {
        response.status(400).send("Missing required fields");
        return;
    }
    try {
        const docRef = await admin.firestore().collection("bookings").add({
            fullName,
            email: email || null,
            phone,
            eventType,
            eventDate,
            guests,
            description: description || null,
            specialRequests: specialRequests || null,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        response.status(200).json({ id: docRef.id, message: "Booking created successfully" });
    }
    catch (error) {
        functions.logger.error("Error creating booking", error);
        response.status(500).send("Internal Server Error");
    }
});
//# sourceMappingURL=index.js.map