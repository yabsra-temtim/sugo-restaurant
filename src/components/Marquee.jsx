const words = ["Pesto Pasta", "Lasagna", "Margherita", "Steak", "Tiramisu", "Macchiato"];

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-b border-line bg-brand py-4 text-on-brand" aria-hidden="true">
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center">
            {[...words, ...words].map((w, i) => (
              <li key={i} className="flex items-center font-display text-3xl italic md:text-4xl">
                <span className="px-6">{w}</span>
                <span className="text-xl not-italic">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
