const { getOrganization } = require('../models/organization');
const { getItem } = require('../models/item');
const { getPricing } = require('../models/pricing');

const calculateDeliveryPrice = async (zone, organizationId, totalDistance, itemType) => {
  const organization = await getOrganization(organizationId);
  const item = await getItem(itemType);
  const pricing = await getPricing(organizationId, item.id, zone);

  if (!organization || !item || !pricing) {
    throw new Error('Invalid input data');
  }

  const baseDistance = pricing.base_distance_in_km;
  const basePrice = pricing.fix_price;
  const perKmPrice = pricing.km_price;

  let totalPrice = basePrice;

  if (totalDistance > baseDistance) {
    const extraDistance = totalDistance - baseDistance;
    totalPrice += extraDistance * perKmPrice;
  }

  return totalPrice;
};

module.exports = {
  calculateDeliveryPrice,
};