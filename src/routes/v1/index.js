const express = require('express');
const router = express.Router();
const infoController = require('../../controllers/info-controller');
const userRoutes = require('./user-routes');
router.get('/info', infoController.info)
router.use('/user', userRoutes)

module.exports = router;