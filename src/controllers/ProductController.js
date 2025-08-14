const express = require('express');
const router = express.Router();
// Migrated from ProductController.php
router.get('/', (req,res)=>res.send('ProductController index'));
router.get('/detail/:id', (req,res)=>res.send('ProductController detail ' + req.params.id));
module.exports = router;