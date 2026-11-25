# Atom Armada — phase 1

## Preserved baseline
Seven existing pages, the original naval design, all 118 canonical elements, four vessels of lengths 2/3/3/4, contiguous placement lanes, chemistry-gated strikes, a random local opponent, and device-local wins/games/XP remain intact.

## Improvements
- Reusable, tested manual-placement validation and canonical coordinate lookup replace repeated JSX calculations.
- Stored pilot counters are validated before rendering; malformed JSON, incompatible types, and invalid counters recover safely without crashing the command deck.
- Notification timers are cleaned up and replaced correctly instead of letting an earlier timer dismiss a newer message.
- Pages read only the game state they use, and the large imported JSX files are formatted for maintenance.
- Keyboard focus is visible; hidden mobile navigation no longer receives focus; Escape closes the menu and returns focus to its opener.
- Search, element-profile close, selected ships/answers, navigation state, and feedback have accessible names or state announcements.
- Partial fleet launch is explicitly labelled, selected battle targets have a readout, and incorrect answers no longer color the correct option before successful submission.

## Verification
Regression tests cover catalogue coordinates and fixtures, family identifiers, the original vessel lengths, question structure, manual placement/overlap/replacement, random placement, saved-record recovery, attack validation, and routing.

Browser checks exercised deployment, a keyboard-confirmed strike, enemy response, duplicate rejection, trimmed archive search, training, saved XP after reload, record reset, malformed-save recovery, all seven pages, and mobile menu dismissal. Page overflow checks passed at 360px, 768px, and 1440px. Desktop/mobile screenshots retained the original identity, and no browser page errors were observed.

## Deferred and unverified
This is the first safe baseline phase, not the whole 100-page specification. Sonar, scouting, action budgets, expanded chemistry content, online multiplayer, cloud continuity, and classroom features were not added. Full victory/loss playthrough, exhaustive keyboard traversal, and an external scientific review of all chemistry metadata were not performed. The two referenced design manuals were not included in this upload; no requirements were invented from them.