import Gallery from "../components/Gallery.jsx";
import Photo from "../components/Photo.jsx";
import { IMG } from "../data/images.js";

const points = [
  ["Slow sauces", "Tomato sauce simmers for hours, never minutes."],
  ["Fresh basil", "Pesto is made in the kitchen, not poured from a jar."],
  ["A relaxed table", "Come for a quick lunch or stay for a long dinner."],
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-5xl font-semibold md:text-6xl">Sauce first</h1>
        <div className="mt-8 overflow-hidden rounded-3xl">
          <Photo id={IMG.interior} alt="The Sugo dining room" emoji="🕯️" className="aspect-[16/9] w-full" />
        </div>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            In Italian, <em>sugo</em> means sauce. We picked the name because that is where every dish starts: ripe tomato, fresh basil, garlic and patience.
          </p>
          <p>
            Sugo is a pasta and pizza restaurant in Summit, Addis Ababa. The room is casual and comfortable, the portions are generous, and the sauce is always the point.
          </p>
        </div>
        <dl className="mt-12 divide-y divide-line border-y border-line">
          {points.map(([t, d]) => (
            <div key={t} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr]">
              <dt className="font-display text-xl font-semibold">{t}</dt>
              <dd className="text-muted">{d}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <Gallery />
      </section>
    </>
  );
}
