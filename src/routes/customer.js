const express = require('express');
const router = express.Router();

const customerController = require('../controller/controller')

router.use('/api', customerController);


module.exports = router;






