const express = require('express');
const router = express.Router();
// Migrated from NotificationController.php
router.post('/send', (req,res)=>res.send('send'));
router.post('/schedule', (req,res)=>res.send('schedule'));
module.exports = router;