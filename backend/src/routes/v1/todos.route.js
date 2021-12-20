const express = require('express');


const router = express.Router();

router.get('/', get_todos);

module.exports = router;