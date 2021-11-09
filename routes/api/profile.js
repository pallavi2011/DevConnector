const express = require('express');
const router = express.Router()

// route for Get profiles
// access public
router.get('/', (req, res) => res.send('Profile route'));


module.exports = router;