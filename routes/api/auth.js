const express = require('express');
const router = express.Router()

// route for Get auth
// access public
router.get('/', (req, res) => res.send('Auth route'));


module.exports = router;