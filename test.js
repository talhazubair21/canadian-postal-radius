const { findNearbyPostalCodes, isValidCanadianPostalCode } = require("./src"); // Replace with actual path

const testPostalCode = "T1G  1Z9"; // Make sure this exists in your JSON file

console.log("🔍 Testing isValidCanadianPostalCode...");
console.log(
  `Is ${testPostalCode} valid?`,
  isValidCanadianPostalCode(testPostalCode)
); // true

// console.log("\n📍 Testing findNearbyPostalCodes...");
try {
  const nearby = findNearbyPostalCodes(testPostalCode, 10); // 10 km radius
  console.log(
    `Nearby postal codes to ${testPostalCode} (within 10km):`,
    nearby
  );
} catch (err) {
  console.error("❌ Error:", err.message);
}
