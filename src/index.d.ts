declare module "canadian-postal-radius" {
  /**
   * Checks if a given Canadian postal code exists in the dataset.
   * @param postalCode - Postal code to check (no spaces)
   */
  export function isValidCanadianPostalCode(postalCode: string): boolean;

  /**
   * Finds nearby postal codes within the specified radius (in km).
   * @param postalCode - The target postal code
   * @param radiusInKm - The radius in kilometers (default: 50)
   */
  export function findNearbyPostalCodes(
    postalCode: string,
    radiusInKm?: number
  ): string[];
}
