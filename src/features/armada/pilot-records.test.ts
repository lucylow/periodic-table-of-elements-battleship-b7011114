import { describe, expect, it } from "vitest";
import { parsePilotRecords } from "./pilot-records";

describe("Device-local pilot record recovery", () => {
  it("preserves existing valid wins, games and XP", () => {
    expect(parsePilotRecords('{"wins":2,"games":3,"xp":140}')).toEqual({
      wins: 2,
      games: 3,
      xp: 140,
    });
  });
  it("recovers from missing, malformed, null and non-object saves", () => {
    for (const raw of [null, "", "{", "null", "[]", "42"]) {
      expect(parsePilotRecords(raw)).toEqual({ wins: 0, games: 0, xp: 0 });
    }
  });
  it("rejects strings, negative counters, fractional counters and unsafe numbers", () => {
    for (const value of ["10", -1, 1.5, Number.MAX_SAFE_INTEGER + 1]) {
      expect(parsePilotRecords(JSON.stringify({ wins: value, games: value, xp: value }))).toEqual({
        wins: 0,
        games: 0,
        xp: 0,
      });
    }
  });
  it("does not allow more victories than completed games", () => {
    expect(parsePilotRecords('{"wins":5,"games":2,"xp":10}')).toEqual({
      wins: 2,
      games: 2,
      xp: 10,
    });
  });
});
