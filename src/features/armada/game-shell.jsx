import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import {
  Atom,
  Crosshair,
  BookOpen,
  Trophy,
  VolumeX,
  Menu,
  X,
  Sparkles,
  Home,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { attackError } from "./attack-validation";
import { elements, questions, fleet, randomPlacement } from "./game-engine";
import { elementAt, placementAt } from "./board-helpers";
import { PILOT_SAVE_KEY, parsePilotRecords } from "./pilot-records";

const GameContext = createContext(null);
export const useGame = () => {
  const game = useContext(GameContext);
  if (!game) throw new Error("Game pages must render inside GameShell.");
  return game;
};
const pathByPage = {
  home: "/",
  deploy: "/deploy",
  battle: "/battle",
  encyclopedia: "/archive",
  academy: "/academy",
  quiz: "/quiz",
  progress: "/records",
};
const pageByPath = Object.fromEntries(
  Object.entries(pathByPage).map(([page, path]) => [path, page]),
);
export function GameShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const page = pageByPath[location.pathname] || "home";
  const setPage = useCallback((next) => navigate({ to: pathByPage[next] || "/" }), [navigate]);
  const toastTimer = useRef(null);
  const navigationButton = useRef(null);
  useEffect(
    () => () => {
      if (toastTimer.current !== null) clearTimeout(toastTimer.current);
    },
    [],
  );
  const [placement, setPlacement] = useState([]),
    [selectedShip, setSelectedShip] = useState(0),
    [match, setMatch] = useState(null),
    [target, setTarget] = useState(null),
    [question, setQuestion] = useState(null),
    [answer, setAnswer] = useState(null),
    [feedback, setFeedback] = useState(null),
    [detail, setDetail] = useState(null),
    [search, setSearch] = useState(""),
    [mode] = useState("practice"),
    [log, setLog] = useState([]),
    [toast, setToast] = useState(""),
    [wins, setWins] = useState(0),
    [games, setGames] = useState(0),
    [xp, setXp] = useState(0),
    [menu, setMenu] = useState(false),
    [recordsReady, setRecordsReady] = useState(false);
  useEffect(() => {
    if (!menu) return;
    const close = (e) => {
      if (e.key === "Escape") {
        setMenu(false);
        navigationButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  useEffect(() => {
    try {
      const s = parsePilotRecords(localStorage.getItem(PILOT_SAVE_KEY));
      setWins(s.wins);
      setGames(s.games);
      setXp(s.xp);
    } catch {
    } finally {
      setRecordsReady(true);
    }
  }, []);
  useEffect(() => {
    if (!recordsReady) return;
    try {
      localStorage.setItem(PILOT_SAVE_KEY, JSON.stringify({ wins, games, xp }));
    } catch {}
  }, [wins, games, xp, recordsReady]);
  useEffect(() => {
    if (page === "battle" && !match) setPage("deploy");
    if (page === "quiz" && !question) setPage("academy");
  }, [page, match, question, setPage]);
  const notify = useCallback((t) => {
    if (toastTimer.current !== null) clearTimeout(toastTimer.current);
    setToast(t);
    toastTimer.current = setTimeout(() => {
      setToast("");
      toastTimer.current = null;
    }, 2400);
  }, []);
  const filtered = useMemo(
    () =>
      elements.filter((e) =>
        (e.name + " " + e.symbol + " " + e.z).toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [search],
  );
  const deployAuto = () => {
    setPlacement(randomPlacement());
    notify("Fleet deployed successfully");
  };
  const beginBattle = () => {
    let p = randomPlacement(placement);
    let bot = randomPlacement();
    setQuestion(null);
    setTarget(null);
    setFeedback(null);
    setMatch({
      player: p,
      bot,
      playerShots: [],
      botShots: [],
      turn: "player",
      botHits: [],
      over: false,
      mode,
    });
    setPlacement(p);
    setLog([{ text: "Command link established. Enemy fleet signatures detected.", kind: "info" }]);
    setPage("battle");
  };
  const openQuestion = (z) => {
    const error = attackError(match, z);
    if (error) {
      notify(error);
      return;
    }
    setTarget(z);
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
    setAnswer(null);
    setFeedback(null);
  };
  const resolveAttack = () => {
    const error = attackError(match, target);
    if (error) {
      notify(error);
      return;
    }
    if (answer === null || !question || feedback?.ok) return;
    if (answer !== question.c) {
      setFeedback({ ok: false, text: "Not quite. " + question.why });
      return;
    }
    setFeedback({ ok: true, text: "Correct. Targeting solution verified." });
    const z = target;
    if (z === null || match.playerShots.includes(z)) return;
    const shots = [...match.playerShots, z];
    const hit = match.bot.some((s) => s.cells.includes(z));
    const sunk = match.bot.find(
      (s) => s.cells.includes(z) && s.cells.every((c) => shots.includes(c)),
    );
    const over = match.bot.every((s) => s.cells.every((c) => shots.includes(c)));
    setLog((l) =>
      [
        {
          text: `${elements[z - 1].symbol} · ${elements[z - 1].name}: ${hit ? "DIRECT HIT" : "SPLASH — no contact"}${sunk ? " · " + sunk.ship + " destroyed" : ""}`,
          kind: hit ? "hit" : "miss",
        },
        ...l,
      ].slice(0, 8),
    );
    setMatch({ ...match, playerShots: shots, turn: over ? "complete" : "bot", over });
    setXp((x) => x + 10 + (over ? 40 : 0));
    if (over) {
      setWins((w) => w + 1);
      setGames((g) => g + 1);
      notify("Victory! Enemy fleet neutralized.");
    }
    setQuestion(null);
    setTarget(null);
    setFeedback(null);
  };
  useEffect(() => {
    if (!match || match.over || match.turn !== "bot") return;
    const timer = setTimeout(() => {
      const available = elements.map((e) => e.z).filter((z) => !match.botShots.includes(z));
      const z = available[Math.floor(Math.random() * available.length)];
      if (!z) return;
      const hit = match.player.some((s) => s.cells.includes(z));
      const shots = [...match.botShots, z];
      const over = match.player.every((s) => s.cells.every((c) => shots.includes(c)));
      const sunk = match.player.find(
        (s) => s.cells.includes(z) && s.cells.every((c) => shots.includes(c)),
      );
      setLog((l) =>
        [
          {
            text: `ENEMY FIRE · ${elements[z - 1].symbol}: ${hit ? "Your vessel was hit" : "Enemy missed"}${sunk ? " · " + sunk.ship + " lost" : ""}`,
            kind: hit ? "enemy" : "info",
          },
          ...l,
        ].slice(0, 8),
      );
      if (over) {
        setGames((g) => g + 1);
        notify("Fleet lost. Regroup and redeploy.");
      }
      setMatch({ ...match, botShots: shots, turn: over ? "complete" : "player", over });
    }, 650);
    return () => clearTimeout(timer);
  }, [match]);
  const restart = () => {
    setMatch(null);
    setPlacement([]);
    setPage("deploy");
    setLog([]);
  };
  const nav = [
    ["home", "Command deck", Home],
    ["deploy", "Fleet deployment", Crosshair],
    ["encyclopedia", "Element archive", BookOpen],
    ["academy", "Chemistry academy", GraduationCap],
    ["progress", "Pilot records", Trophy],
  ];
  const placeShipAt = (z) => {
    const nextPlacement = placementAt(placement, selectedShip, z);
    const ship = fleet[selectedShip];
    if (!nextPlacement || !ship) {
      notify("No legal open lane from this element. Try another starting tile.");
      return;
    }
    setPlacement(nextPlacement);
    const next = fleet.findIndex(
      (f, i) => i > selectedShip && !nextPlacement.some((p) => p.ship === f.name),
    );
    if (next >= 0) setSelectedShip(next);
    notify(ship.name + " deployed");
  };
  const tile = (e, kind = "normal") => {
    let shot = match?.playerShots.includes(e.z),
      botShot = match?.botShots.includes(e.z),
      own = match?.player.some((s) => s.cells.includes(e.z));
    let state =
      kind === "enemy"
        ? shot
          ? match.bot.some((s) => s.cells.includes(e.z))
            ? "hit"
            : "miss"
          : ""
        : kind === "own"
          ? botShot
            ? own
              ? "hit"
              : "miss"
            : own
              ? "ship"
              : ""
          : page === "deploy" && placement.some((s) => s.cells.includes(e.z))
            ? "ship"
            : "";
    return (
      <Button
        variant="armada"
        size="armada"
        key={e.z}
        className={`tile fam-${e.family} ${state} ${(kind === "enemy" ? target === e.z : detail?.z === e.z) ? "chosen" : ""} ${page === "encyclopedia" && !filtered.some((x) => x.z === e.z) ? "filtered-out" : ""}`}
        aria-pressed={kind === "enemy" ? target === e.z : undefined}
        aria-label={`${e.name}, ${e.symbol}, atomic number ${e.z}${state === "hit" ? ", confirmed hit" : state === "miss" ? ", confirmed miss" : kind === "enemy" && target === e.z ? ", selected target" : ""}`}
        title={`${e.name}, ${e.symbol}, atomic number ${e.z}`}
        disabled={page === "encyclopedia" && !filtered.some((x) => x.z === e.z)}
        onClick={() =>
          kind === "enemy" ? openQuestion(e.z) : page === "deploy" ? placeShipAt(e.z) : setDetail(e)
        }
      >
        <small>{e.z}</small>
        <b>{e.symbol}</b>
        <span>{e.name}</span>
      </Button>
    );
  };
  const table = (kind = "normal") => (
    <div className="table-scroll">
      <div className="ptable">
        {Array.from({ length: 9 }, (_, ri) => (
          <React.Fragment key={ri}>
            {Array.from({ length: 18 }, (_, ci) => {
              const e = elementAt(ri + 1, ci + 1);
              return (
                <div className="slot" key={`${ri}-${ci}`}>
                  {e ? tile(e, kind) : null}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const value = {
    page,
    setPage,
    placement,
    setPlacement,
    selectedShip,
    setSelectedShip,
    match,
    setMatch,
    target,
    setTarget,
    question,
    setQuestion,
    answer,
    setAnswer,
    feedback,
    setFeedback,
    detail,
    setDetail,
    search,
    setSearch,
    log,
    toast,
    wins,
    setWins,
    games,
    setGames,
    xp,
    setXp,
    notify,
    filtered,
    deployAuto,
    beginBattle,
    openQuestion,
    resolveAttack,
    restart,
    placeShipAt,
    tile,
    table,
  };
  return (
    <GameContext.Provider value={value}>
      <div className="app-shell">
        <aside
          id="game-navigation"
          aria-label="Main navigation"
          className={`sidebar ${menu ? "show" : ""}`}
        >
          <div className="brand">
            <div className="brand-mark">
              <Atom size={25} />
            </div>
            <div>
              <strong>
                ATOM <em>ARMADA</em>
              </strong>
              <small>CHEMISTRY · TACTICAL COMMAND</small>
            </div>
            <Button
              variant="armada"
              size="armada"
              aria-label="Close navigation"
              className="mobile-close"
              onClick={() => setMenu(false)}
            >
              <X />
            </Button>
          </div>
          <div className="side-label">COMMAND</div>
          {nav.map(([id, label, Icon]) => (
            <Button
              variant="armada"
              size="armada"
              key={id}
              className={`nav-item ${page === id ? "active" : ""}`}
              aria-current={page === id ? "page" : undefined}
              onClick={() => {
                setPage(id);
                setMenu(false);
              }}
            >
              <Icon size={17} />
              <span>{label}</span>
              {id === "progress" && <small className="nav-count">{xp}</small>}
            </Button>
          ))}
          <div className="side-bottom">
            <div className="pilot-card">
              <div className="pilot-avatar">P</div>
              <div>
                <b>CADET PILOT</b>
                <small>
                  LEVEL {Math.floor(xp / 100) + 1} · {xp} XP
                </small>
              </div>
              <span className="online-dot" />
            </div>
            <div className="side-foot">
              VERSION 1.0.0 <span>● SYSTEM ONLINE</span>
            </div>
          </div>
        </aside>
        <main className="main">
          <header className="topbar">
            <Button
              variant="armada"
              size="armada"
              ref={navigationButton}
              aria-label="Open navigation"
              aria-expanded={menu}
              aria-controls="game-navigation"
              className="hamburger"
              onClick={() => setMenu(true)}
            >
              <Menu />
            </Button>
            <div className="crumb">
              SECTOR 01 <span>/</span> {page.toUpperCase()}
            </div>
            <div className="top-actions">
              <div className="status">
                <i /> SYSTEMS NOMINAL
              </div>
              <div className="xp-pill">
                <Sparkles size={14} /> {xp} XP
              </div>
              <Button
                variant="armada"
                size="armada"
                className="icon-btn"
                aria-label="Audio not included in this practice build"
                title="Audio not included in this practice build"
                disabled
              >
                <VolumeX size={17} />
              </Button>
            </div>
          </header>
          <Outlet />{" "}
          <footer className="footer">
            <span>
              ATOM ARMADA <i>© 2026</i>
            </span>
            <span>BUILT FOR THE CURIOUS · POWERED BY CHEMISTRY</span>
            <span>
              LOCAL PRACTICE BUILD <i>v1.0.0</i>
            </span>
          </footer>
        </main>
        {toast && (
          <div className="toast" role="status" aria-live="polite">
            <Sparkles size={15} />
            {toast}
          </div>
        )}
      </div>
    </GameContext.Provider>
  );
}
