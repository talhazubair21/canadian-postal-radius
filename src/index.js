const postalData = require("../data/canada-postal-codes.json");

/**
 * Haversine formula to calculate distance in kilometers
 */
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const toRad = (deg) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Find nearby postal codes within a radius
 * @param {string} targetPostalCode - Postal code to search from (no spaces, e.g. "T0A0A0")
 * @param {number} radiusInKm - Radius in kilometers
 * @returns {Array<string>} - List of nearby postal codes
 */
function findNearbyPostalCodes(targetPostalCode, radiusInKm = 50) {
  const source = postalData[targetPostalCode];

  // If the postal code doesn't exist, return it as the only item in the result
  if (!source) {
    return [targetPostalCode];
  }

  const results = [];

  for (const [postalCode, location] of Object.entries(postalData)) {
    if (postalCode === targetPostalCode) continue;

    const distance = haversineDistance(
      source.lat,
      source.lng,
      location.lat,
      location.lng
    );

    if (distance <= radiusInKm) {
      results.push(postalCode);
    }
  }

  return results;
}

/**
 * Check if the given postal code exists in the Canadian dataset
 * @param {string} postalCode - Postal code to check (no space)
 * @returns {boolean}
 */
function isValidCanadianPostalCode(postalCode) {
  if (!postalCode) return false;
  return postalCode in postalData;
}

module.exports = {
  findNearbyPostalCodes,
  isValidCanadianPostalCode,
};
