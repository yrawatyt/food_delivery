const express = require('express');
const { getPriceForDelivery } = require('../controllers/pricingController');

const router = express.Router();

router.post('/calculate-price', getPriceForDelivery);

module.exports = router;