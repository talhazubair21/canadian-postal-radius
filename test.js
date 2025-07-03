import {
  findNearbyPostalCodes,
  isValidCanadianPostalCode,
} from "./src/index.js";

const testPostalCode = "T1G 1Z9";

console.log("🔍 Testing isValidCanadianPostalCode...");
console.log(
  `Is ${testPostalCode} valid?`,
  isValidCanadianPostalCode(testPostalCode)
);

try {
  const nearby = findNearbyPostalCodes(testPostalCode, 10);
  console.log(
    `Nearby postal codes to ${testPostalCode} (within 10km):`,
    nearby
  );
} catch (err) {
  console.error("❌ Error:", err.message);
}
