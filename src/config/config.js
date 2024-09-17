require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
    twilioWhastappNumber: process.env.TWILIO_WHATSAPP_NUMBER,
    dialogflowProjectId: process.env.DIALOGFLOW_PROJECT_ID,
    dialogflowSessionLanguageCode: process.env.DIALOGFLOW_SESSION_LANGUAGE_CODE,
    mongodbUri: process.env.MONGODB_URI,
};


