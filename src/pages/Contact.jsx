import ReservationForm from "../components/ReservationForm.jsx";
import { site } from "../data/site.js";

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-2">
      <div>
        <h1 className="font-display text-5xl font-semibold md:text-6xl">Visit Sugo</h1>
        <dl className="mt-8 space-y-6 text-lg">
          <div>
            <dt className="font-semibold">Address</dt>
            <dd className="text-muted">{site.address}</dd>
          </div>
          <div>
            <dt className="font-semibold">Hours</dt>
            <dd className="text-muted">{site.hours}</dd>
          </div>
          <div>
            <dt className="font-semibold">Phone</dt>
            <dd>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-brand underline underline-offset-4">
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full border border-line px-7 py-3 font-semibold hover:border-brand hover:text-brand"
        >
          Open in Google Maps
        </a>
      </div>
      <div className="rounded-3xl border border-line bg-surface p-7">
        <h2 className="mb-6 font-display text-3xl font-semibold">Reserve a table</h2>
        <ReservationForm />
      </div>
    </section>
  );
}
