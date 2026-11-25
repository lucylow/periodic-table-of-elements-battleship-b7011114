import { describe, expect, it } from 'vitest';
import { elements, fleet, lanes, randomPlacement } from './game-engine';

describe('Imported chemistry and fleet rules', () => {
  it('includes every atomic number from 1 through 118', () => {
    expect(elements.map(e => e.z)).toEqual(Array.from({length: 118}, (_, i) => i + 1));
    expect(elements.find(e => e.z === 11)?.symbol).toBe('Na');
    expect(elements.find(e => e.z === 26)?.symbol).toBe('Fe');
  });
  it('deploys all four ships into 12 distinct legal cells', () => {
    for(let attempt = 0; attempt < 100; attempt++) {
      const placements = randomPlacement();
      expect(placements).toHaveLength(4);
      const cells = placements.flatMap(s => s.cells);
      expect(cells).toHaveLength(12);
      expect(new Set(cells).size).toBe(12);
      for(const placement of placements) {
        expect(placement.cells).toHaveLength(fleet.find(s => s.name === placement.ship)?.len ?? 0);
        expect(lanes.some(lane => lane.some((z, i) => z === placement.cells[0] && placement.cells.every((cell: number, j: number) => lane[i+j] === cell)))).toBe(true);
      }
    }
  });
  it('finishes partial manual deployment without replacing a placed vessel', () => {
    const initial = [{ship: 'Hydrogen Explorer', cells: [1, 3]}];
    const placements = randomPlacement(initial);
    expect(placements).toHaveLength(4);
    expect(placements.find(s => s.ship === 'Hydrogen Explorer')?.cells).toEqual([1, 3]);
    expect(new Set(placements.flatMap(s => s.cells)).size).toBe(12);
  });
});
