export const PILOT_SAVE_KEY = "atom-armada-save";

export function parsePilotRecords(raw: string | null): { wins: number; games: number; xp: number } {
  const empty = { wins: 0, games: 0, xp: 0 };
  if (!raw) return empty;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return empty;
    const record = value as Record<string, unknown>;
    const counter = (field: unknown) =>
      typeof field === "number" && Number.isSafeInteger(field) && field >= 0 ? field : 0;
    const games = counter(record["games"]);
    return { wins: Math.min(counter(record["wins"]), games), games, xp: counter(record["xp"]) };
  } catch {
    return empty;
  }
}
