const express = require('express');
const router = express.Router();
// Migrated from UserController.php
router.get('/', (req,res)=>res.send('UserController index'));
router.get('/:id', (req,res)=>res.send('UserController show ' + req.params.id));
module.exports = router;