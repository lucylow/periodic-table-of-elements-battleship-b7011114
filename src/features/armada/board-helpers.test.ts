import { describe, expect, it } from "vitest";
import { elementAt, placementAt } from "./board-helpers";
import { elements } from "./game-engine";

describe("Canonical board and manual placement", () => {
  it("resolves all 118 records once at their original coordinates", () => {
    expect(new Set(elements.map((element) => `${element.row}:${element.col}`)).size).toBe(118);
    for (const element of elements) {
      expect(element.row).toBeGreaterThanOrEqual(1);
      expect(element.row).toBeLessThanOrEqual(9);
      expect(element.col).toBeGreaterThanOrEqual(1);
      expect(element.col).toBeLessThanOrEqual(18);
      expect(elementAt(element.row, element.col)).toBe(element);
    }
    expect(elementAt(1, 2)).toBeUndefined();
  });
  it("places the two-cell explorer in the existing contiguous hydrogen lane", () => {
    expect(placementAt([], 0, 1)).toEqual([{ ship: "Hydrogen Explorer", cells: [1, 3] }]);
  });
  it("rejects overlap without mutating prior placements", () => {
    const initial = [{ ship: "Carbon Cruiser", cells: [1, 3, 11] }];
    expect(placementAt(initial, 0, 1)).toBeNull();
    expect(initial).toEqual([{ ship: "Carbon Cruiser", cells: [1, 3, 11] }]);
  });
  it("allows replacing a ship without counting its own cells as overlap", () => {
    expect(placementAt([{ ship: "Hydrogen Explorer", cells: [1, 3] }], 0, 3)).toEqual([
      { ship: "Hydrogen Explorer", cells: [3, 4] },
    ]);
  });
  it("keeps the f-block in separate lanes and rejects a discontinuity", () => {
    expect(placementAt([], 3, 57)).toEqual([{ ship: "Uranium Carrier", cells: [57, 58, 59, 60] }]);
    expect(placementAt([], 3, 71)).toBeNull();
    expect(placementAt([], 3, 118)).toBeNull();
  });
  it("rejects invalid ship selections and atomic numbers", () => {
    expect(placementAt([], 4, 1)).toBeNull();
    for (const z of [0, 119, 1.5]) expect(placementAt([], 0, z)).toBeNull();
  });
});
