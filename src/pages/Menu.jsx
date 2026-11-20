import MenuSection from "../components/MenuSection.jsx";

export default function Menu() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-5xl font-semibold md:text-6xl">Menu</h1>
      <p className="mt-3 mb-10 text-lg text-muted">
        Tap + to build your order, then send it to us on WhatsApp.
      </p>
      <MenuSection />
    </section>
  );
}
