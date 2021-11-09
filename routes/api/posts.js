const express = require('express');
const router = express.Router()

// route for Get posts
// access public
router.get('/', (req, res) => res.send('Posts route'));


module.exports = router;