import { elements, fleet, lanes } from "./game-engine";

// Index the canonical catalogue once; do not duplicate element records.
const positions = new Map(elements.map((element) => [`${element.row}:${element.col}`, element]));
export const elementAt = (row, col) => positions.get(`${row}:${col}`);

export function placementAt(placements, shipIndex, atomicNumber) {
  const ship = fleet[shipIndex];
  if (!ship || !Number.isInteger(atomicNumber) || atomicNumber < 1 || atomicNumber > 118)
    return null;
  const others = placements.filter((placement) => placement.ship !== ship.name);
  const occupied = new Set(others.flatMap((placement) => placement.cells));
  for (const lane of lanes) {
    const start = lane.indexOf(atomicNumber);
    if (start < 0 || start + ship.len > lane.length) continue;
    const cells = lane.slice(start, start + ship.len);
    if (cells.some((cell) => occupied.has(cell))) continue;
    return [...others, { ship: ship.name, cells }];
  }
  return null;
}
