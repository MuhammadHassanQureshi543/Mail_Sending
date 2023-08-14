const { Router } = require('express');
const express = require('express');
const router= express.Router();
const userController = require('../controller/userController')

// router.route('/test').get(userController.test)
router.post('/sumbitform', userController.creatUser)

module.exports = router