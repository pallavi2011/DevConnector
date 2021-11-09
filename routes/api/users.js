const express = require('express');
const router = express.Router()

// route for Get users
// access public
router.get('/', (req, res) => res.send('User route'));


module.exports = router;