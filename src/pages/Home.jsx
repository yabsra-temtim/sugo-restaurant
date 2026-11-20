import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import DishCard from "../components/DishCard.jsx";
import MoodPicker from "../components/MoodPicker.jsx";
import Gallery from "../components/Gallery.jsx";
import Photo from "../components/Photo.jsx";
import { featured } from "../data/menu.js";
import { IMG } from "../data/images.js";
import { site } from "../data/site.js";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">What people order first</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((d) => (
            <DishCard key={d.name} dish={d} />
          ))}
        </div>
        <Link to="/menu" className="mt-8 inline-block font-semibold text-brand underline underline-offset-4">
          See the full menu
        </Link>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <MoodPicker />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <div className="group overflow-hidden rounded-3xl">
          <Photo
            id={IMG.kitchen}
            alt="A chef working in the kitchen"
            emoji="👩‍🍳"
            className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Sauce first. Everything else follows.</h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            A good sauce takes hours, so we start early. Tomato, basil and garlic go into the pot long before the first table sits down.
          </p>
          <Link to="/about" className="mt-5 inline-block font-semibold text-brand underline underline-offset-4">
            Read our story
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Inside Sugo</h2>
        <p className="mt-2 text-muted">Tap any photo to look closer.</p>
        <div className="mt-8">
          <Gallery />
        </div>
      </section>

      <section className="bg-brand text-on-brand">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold">Find a table</h2>
            <p className="mt-2 text-lg opacity-90">{site.address}. {site.hours}.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-on-brand px-7 py-3 font-semibold text-brand transition-transform hover:scale-105">
              Reserve a table
            </Link>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-current px-7 py-3 font-semibold transition-transform hover:scale-105">
              Get directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
