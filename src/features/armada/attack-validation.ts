export function attackError(match: {over: boolean; turn: string; playerShots: number[]} | null, target: number | null): string | null {
  if (!match || match.over) return 'No active mission.';
  if (match.turn !== 'player') return 'Wait for your turn.';
  if (target === null || !Number.isInteger(target) || target < 1 || target > 118) return 'Select a valid element.';
  if (match.playerShots.includes(target)) return 'Already attacked — choose another element.';
  return null;
}
