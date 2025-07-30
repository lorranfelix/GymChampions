const router = require('express').Router();

const userController = require('../controllers/userController');

router
    .route('/users')
    .post((req, res) => userController.create(req, res))
    .get((req, res) => userController.getAll(req, res));

module.exports = router;