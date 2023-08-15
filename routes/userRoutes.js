const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/submitform', userController.creatUser);
router.get('/', userController.working);

module.exports = router;
