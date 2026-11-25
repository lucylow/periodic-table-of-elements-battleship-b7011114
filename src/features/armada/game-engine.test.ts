import { describe, expect, it } from 'vitest';
import { elements, familyLabel, fleet, lanes, questions, randomPlacement } from './game-engine';

describe('Imported chemistry and fleet rules', () => {
  it('includes every atomic number from 1 through 118', () => {
    expect(elements.map(e => e.z)).toEqual(Array.from({length: 118}, (_, i) => i + 1));
    expect(elements.find(e => e.z === 11)?.symbol).toBe('Na');
    expect(elements.find(e => e.z === 26)?.symbol).toBe('Fe');
    expect(elements.find(e => e.z === 1)?.symbol).toBe('H');
    expect(elements.find(e => e.z === 79)?.symbol).toBe('Au');
  });
  it('assigns every element a recognized family with representative fixtures', () => {
    for (const element of elements) expect(Object.keys(familyLabel)).toContain(element.family);
    expect(elements.find(e => e.z === 2)?.family).toBe('noble');
    expect(elements.find(e => e.z === 11)?.family).toBe('alkali');
    expect(elements.find(e => e.z === 26)?.family).toBe('transition');
    expect(elements.find(e => e.z === 57)?.family).toBe('lanth');
    expect(elements.find(e => e.z === 89)?.family).toBe('act');
  });
  it('keeps the four original vessel lengths and twelve-cell fleet', () => {
    expect(fleet.map(ship => ship.len)).toEqual([2, 3, 3, 4]);
    expect(fleet.reduce((total, ship) => total + ship.len, 0)).toBe(12);
  });
  it('keeps eight structurally valid four-option chemistry questions', () => {
    expect(questions).toHaveLength(8);
    for (const question of questions) {
      expect(question.a).toHaveLength(4);
      expect(new Set(question.a).size).toBe(4);
      expect(Number.isInteger(question.c)).toBe(true);
      expect(question.c).toBeGreaterThanOrEqual(0);
      expect(question.c).toBeLessThan(4);
    }
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
