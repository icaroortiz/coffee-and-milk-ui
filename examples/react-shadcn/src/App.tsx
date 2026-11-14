import { useEffect, useState, type FormEvent } from "react";
import {
  CalendarDays,
  Coffee,
  Moon,
  Sun,
  Plus,
  ArrowUpRight,
  Check,
  Clock3,
  Palette,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

type Appointment = {
  id: number;
  client: string;
  service: string;
  date: string;
  time: string;
};
type Draft = Omit<Appointment, "id">;
const initial: Appointment[] = [
  {
    id: 1,
    client: "Alex Morgan",
    service: "Brand discovery",
    date: "2026-11-18",
    time: "09:30",
  },
  {
    id: 2,
    client: "Sam Rivera",
    service: "Creative review",
    date: "2026-11-18",
    time: "11:00",
  },
  {
    id: 3,
    client: "Taylor Kim",
    service: "Project handoff",
    date: "2026-11-18",
    time: "14:00",
  },
];
const emptyDraft: Draft = {
  client: "",
  service: "",
  date: "2026-11-18",
  time: "15:30",
};
const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(
    new Date(value + "T12:00:00"),
  );
export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [brand, setBrand] = useState<"burgundy" | "teal">("burgundy");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [errors, setErrors] = useState<Partial<Record<keyof Draft, string>>>(
    {},
  );
  const [appointments, setAppointments] = useState(initial);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-soft-ui", "");
    root.dataset.suiTheme = theme;
    root.dataset.brand = brand;
  }, [theme, brand]);
  function changeOpen(next: boolean) {
    if (saving) return;
    setOpen(next);
    if (next) {
      setDraft(emptyDraft);
      setErrors({});
    }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    const next: Partial<Record<keyof Draft, string>> = {};
    if (!draft.client.trim()) next.client = "Enter a client name.";
    if (!draft.service.trim()) next.service = "Enter a session title.";
    if (!draft.date) next.date = "Choose a date.";
    if (!draft.time) next.time = "Choose a time.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    setAppointments((items) => [
      ...items,
      {
        ...draft,
        client: draft.client.trim(),
        service: draft.service.trim(),
        id: Date.now(),
      },
    ]);
    setSaving(false);
    setOpen(false);
    setMessage(
      "Appointment added to this demo. Reloading clears your changes.",
    );
  }
  const visible = appointments.filter((a) =>
    (a.client + " " + a.service).toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="demo-shell sui-canvas">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <aside className="demo-sidebar">
        <a href="#main" className="brand-link">
          <span className="brand-mark">
            <Coffee size={21} aria-hidden="true" />
          </span>
          <span>
            Juniper<span className="brand-small">Creative studio</span>
          </span>
        </a>
        <p className="nav-label">WORKSPACE</p>
        <nav aria-label="Workspace">
          <a className="nav-active" href="#main">
            <CalendarDays size={18} aria-hidden="true" /> Schedule
          </a>
          <a href="#appointments">
            <Clock3 size={18} aria-hidden="true" /> Sessions
          </a>
          <a href="#guidance">
            <Palette size={18} aria-hidden="true" /> About this demo
          </a>
        </nav>
        <div className="sidebar-footer">
          <span className="avatar">JL</span>
          <span>
            <strong>Jordan Lee</strong>
            <small>Demo workspace</small>
          </span>
        </div>
      </aside>
      <div className="demo-workspace">
        <header className="demo-topbar">
          <span className="topbar-label">
            Studio / <strong>Schedule</strong>
          </span>
          <div className="theme-controls">
            <Button
              type="button"
              variant="outline"
              className="sui-control theme-button"
              aria-label="Teal palette"
              title="Toggle between burgundy and teal"
              aria-pressed={brand === "teal"}
              onClick={() => setBrand(brand === "teal" ? "burgundy" : "teal")}
            >
              <Palette size={16} aria-hidden="true" />
              <span>Teal palette</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="sui-control icon-button"
              aria-label="Dark theme"
              aria-pressed={theme === "dark"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? (
                <Moon aria-hidden="true" />
              ) : (
                <Sun aria-hidden="true" />
              )}
            </Button>
          </div>
        </header>
        <main id="main" tabIndex={-1}>
          <div className="page-heading">
            <div>
              <p className="eyebrow">A LITTLE SPACE FOR GOOD WORK</p>
              <h1>Your studio, in rhythm.</h1>
              <p className="sui-muted">
                A clear plan. Time for the work that matters.
              </p>
            </div>
            <Dialog open={open} onOpenChange={changeOpen}>
              <DialogTrigger asChild>
                <Button className="sui-control sui-primary">
                  <Plus size={17} aria-hidden="true" /> New appointment
                </Button>
              </DialogTrigger>
              <DialogContent
                className="sui-overlay appointment-dialog"
                onEscapeKeyDown={(e) => {
                  if (saving) e.preventDefault();
                }}
                onPointerDownOutside={(e) => {
                  if (saving) e.preventDefault();
                }}
              >
                <DialogHeader>
                  <p className="eyebrow">YOUR NEXT CONVERSATION</p>
                  <DialogTitle>New appointment</DialogTitle>
                  <DialogDescription>
                    A local example. Nothing is sent to a client or server.
                  </DialogDescription>
                </DialogHeader>
                <form noValidate onSubmit={submit} aria-busy={saving}>
                  <fieldset disabled={saving} className="form-fields">
                    <div>
                      <Label htmlFor="client">Client name</Label>
                      <Input
                        id="client"
                        required
                        value={draft.client}
                        maxLength={80}
                        autoComplete="off"
                        className="sui-control sui-field"
                        aria-invalid={Boolean(errors.client)}
                        aria-describedby={
                          errors.client ? "client-error" : undefined
                        }
                        onChange={(e) =>
                          setDraft({ ...draft, client: e.target.value })
                        }
                      />
                      {errors.client && (
                        <p className="field-error" id="client-error">
                          {errors.client}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="service">Session title</Label>
                      <Input
                        id="service"
                        required
                        value={draft.service}
                        maxLength={100}
                        className="sui-control sui-field"
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={
                          errors.service ? "service-error" : undefined
                        }
                        onChange={(e) =>
                          setDraft({ ...draft, service: e.target.value })
                        }
                      />
                      {errors.service && (
                        <p className="field-error" id="service-error">
                          {errors.service}
                        </p>
                      )}
                    </div>
                    <div className="form-row">
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          required
                          type="date"
                          value={draft.date}
                          className="sui-control sui-field"
                          aria-invalid={Boolean(errors.date)}
                          aria-describedby={
                            errors.date ? "date-error" : undefined
                          }
                          onChange={(e) =>
                            setDraft({ ...draft, date: e.target.value })
                          }
                        />
                        {errors.date && (
                          <p className="field-error" id="date-error">
                            {errors.date}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          required
                          type="time"
                          value={draft.time}
                          className="sui-control sui-field"
                          aria-invalid={Boolean(errors.time)}
                          aria-describedby={
                            errors.time ? "time-error" : undefined
                          }
                          onChange={(e) =>
                            setDraft({ ...draft, time: e.target.value })
                          }
                        />
                        {errors.time && (
                          <p className="field-error" id="time-error">
                            {errors.time}
                          </p>
                        )}
                      </div>
                    </div>
                  </fieldset>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        disabled={saving}
                        variant="outline"
                        className="sui-control"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      disabled={saving}
                      className="sui-control sui-primary"
                    >
                      {saving ? "Adding…" : "Add appointment"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="overview-grid">
            <section className="studio-hero">
              <span className="hero-icon">
                <CalendarDays size={27} aria-hidden="true" />
              </span>
              <div>
                <p>YOUR CALENDAR</p>
                <h2>
                  Make space for
                  <br />
                  your next idea.
                </h2>
                <a href="#appointments">
                  View your sessions{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-orbit" aria-hidden="true" />
            </section>
            <section className="sui-surface metric">
              <span className="metric-icon">
                <Clock3 size={21} aria-hidden="true" />
              </span>
              <p className="sui-muted">Scheduled sessions</p>
              <strong>{appointments.length.toString().padStart(2, "0")}</strong>
              <span>In this demo workspace</span>
            </section>
          </div>
          <section className="sui-surface sessions-panel" id="appointments">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">YOUR PEOPLE. YOUR TIME.</p>
                <h2>Upcoming sessions</h2>
              </div>
              <label className="search-field">
                <span className="sr-only">Find a session</span>
                <Search size={17} aria-hidden="true" />
                <Input
                  type="search"
                  className="sui-control sui-field"
                  placeholder="Find a session"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>
            <ul className="session-list">
              {visible.map((a, index) => (
                <li key={a.id}>
                  <span className="session-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="session-name">
                    <strong>{a.service}</strong>
                    <span className="sui-muted">{a.client}</span>
                  </div>
                  <span className="session-date">
                    {formatDate(a.date)}
                    <small>{a.time}</small>
                  </span>
                  <span className="sui-status sui-status--success">
                    <Check size={13} aria-hidden="true" /> Scheduled
                  </span>
                </li>
              ))}
            </ul>
            {visible.length === 0 && (
              <div className="empty-state">
                <p>No sessions match that search.</p>
                <Button
                  variant="outline"
                  className="sui-control"
                  onClick={() => setSearch("")}
                >
                  Clear search
                </Button>
              </div>
            )}
          </section>
          <p className="feedback" role="status">
            {message}
          </p>
          <footer id="guidance">
            <strong>Coffee & Milk UI</strong>
            <span>
              React + shadcn/ui · Fictional data · Changes stay in memory
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
