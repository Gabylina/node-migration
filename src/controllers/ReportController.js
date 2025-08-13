const express = require('express');
const router = express.Router();
// Migrated from ReportController.php
router.get('/generate', (req,res)=>res.send('generate'));
router.get('/download/:id', (req,res)=>res.send('download ' + req.params.id));
module.exports = router;