const { calculateDeliveryPrice } = require('../services/pricingService');

const getPriceForDelivery = async (req, res) => {
  const { zone, organization_id, total_distance, item_type } = req.body;

  try {
    const totalPrice = await calculateDeliveryPrice(zone, organization_id, total_distance, item_type);
    res.json({ total_price: totalPrice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPriceForDelivery,
};