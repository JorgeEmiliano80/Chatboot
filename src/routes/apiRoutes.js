const express = require('express');
const messageController = require('../controllers/messageController');
const webhookController = require('../controllers/webhookController');

const router = express.Router();

router.post('/webhook', webhookController.handleWebhook);
router.post('/message', messageController.handleIncomingMessage);

module.exports = router;

