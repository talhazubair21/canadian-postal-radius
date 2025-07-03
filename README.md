# 🇨🇦 canadian-postal-radius

A lightweight and fast NPM package to find nearby **Canadian postal codes** within a given radius using the **Haversine formula**.

Works with a simple JSON data file of postal codes and doesn't rely on any external dependencies — ideal for geo-based lookups in Node.js projects.

---

## 📦 Installation

```bash
npm install canadian-postal-radius

import {
  findNearbyPostalCodes,
  isValidCanadianPostalCode,
} from "canadian-postal-radius";

// ✅ Validate a Canadian postal code
console.log(isValidCanadianPostalCode("T0A 0A0")); // true
console.log(isValidCanadianPostalCode("Z9Z9Z9"));  // false

// 📍 Find nearby postal codes within a 10km radius
const nearby = findNearbyPostalCodes("T1G 1Z9", 10);
console.log(nearby);

// Example output:
// [ 'T0K0C1', 'T1G0A1', 'T1G0A2', 'T1G0A4', 'T1G0A5' ]

```
