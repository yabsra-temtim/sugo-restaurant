import { useState } from "react";
import { waLink } from "../lib/whatsapp.js";

const field =
  "mt-1 w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink";

export default function ReservationForm() {
  const today = new Date().toISOString().slice(0, 10);
  const [f, setF] = useState({ name: "", date: "", time: "19:00", guests: "2" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text = `Hello Sugo, I’d like to reserve a table.\nName: ${f.name}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}`;
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block font-semibold">
        Name
        <input required value={f.name} onChange={set("name")} autoComplete="name" className={field} />
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="block font-semibold">
          Date
          <input required type="date" min={today} value={f.date} onChange={set("date")} className={field} />
        </label>
        <label className="block font-semibold">
          Time
          <input required type="time" value={f.time} onChange={set("time")} className={field} />
        </label>
      </div>
      <label className="block font-semibold">
        Guests
        <select value={f.guests} onChange={set("guests")} className={field}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      <button type="submit" className="rounded-full bg-brand px-7 py-3 font-semibold text-on-brand">
        Request on WhatsApp
      </button>
      <p className="text-sm text-muted">We confirm your table by reply on WhatsApp.</p>
    </form>
  );
}
