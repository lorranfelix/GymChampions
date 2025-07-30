const router = require('express').Router();

//user routes
const userController = require('./users');

router.use('/', userController);

module.exports = router;