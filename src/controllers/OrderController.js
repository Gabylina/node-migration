const express = require('express');
const router = express.Router();
// Migrated from OrderController.php
router.get('/', (req,res)=>res.send('OrderController index'));
router.post('/', (req,res)=>res.send('OrderController create'));
module.exports = router;