const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
    NODE_ENV: process_params.env.NODE_ENV,
    PORT: process.env.PORT,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_WHATSAPP_NUMBER: process.env.TWILIO_WHATSAPP_NUMBER,
    DIALOGFLOW_PROJECT_ID: process.env.DIALOGFLOW_PROJECT_ID,
    DIALOGFLOW_SESSION_LANGUAGE_CODE: process.env.DIALOGFLOW_SESSION_LANGUAGE_CODE,
    MONGODB_URI: process.env.MONGODB_URI,
};
