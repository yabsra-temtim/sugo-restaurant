import { Link } from "react-router-dom";
import { site } from "../data/site.js";

export default function Footer() {
  const socials = [
    ["Instagram", site.instagram],
    ["Facebook", site.facebook],
  ].filter(([, url]) => url);

  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 pb-24 sm:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-bold text-brand">Sugo</p>
          <p className="mt-2 text-muted">Pasta and pizza in {site.area}.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-muted">
          <Link to="/menu" className="hover:text-brand">Menu</Link>
          <Link to="/about" className="hover:text-brand">About</Link>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
        </nav>
        <div className="text-muted">
          <p>{site.hours}</p>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 block hover:text-brand">{site.phone}</a>
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="mt-2 block hover:text-brand">
              {name}
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-sm text-muted">
        © {new Date().getFullYear()} Sugo Pasta and Pizza
      </p>
    </footer>
  );
}
