import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const members = [
  {
    name: "Kağan Rehber",
    uni: "kagan.rehber@ug.bilkent.edu.tr",
    photo: "team/kagan.jpg",
  },
  {
    name: "Bilge İdil Öziş",
    uni: "idil.ozis@ug.bilkent.edu.tr",
    photo: "team/idil.jpg",
  },
  {
    name: "Bilgehan Tuğcu",
    uni: "bilgehan.tugcu@ug.bilkent.edu.tr",
    photo: "team/bilgehan.jpg",
  },
  {
    name: "Elif Ercan",
    uni: "nelif.ercan@ug.bilkent.edu.tr",
    photo: "team/elif.jpg",
  },
  {
    name: "Mennatallah Abouelenin",
    uni: "mennatallah@ug.bilkent.edu.tr",
    photo: "team/menna.jpg",
  },
];

function MemberCard({ name, uni, photo, index }) {
  return (
    <div
      className="bg-white rounded-3xl shadow-sm border border-brand-100 overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-1 transition-all"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-52 bg-brand-50 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            const fallback =
              e.target.parentElement.querySelector(".avatar-fallback");
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div
          className="avatar-fallback w-full h-full items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200"
          style={{ display: "none" }}
        >
          <span className="text-6xl text-brand-400">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-1 flex-1">
        <h3 className="font-bold text-ink text-base">{name}</h3>
        <a
          href={`mailto:${uni}`}
          className="text-xs text-gray-400 hover:text-brand-600 transition-colors mt-1 truncate"
        >
          {uni}
        </a>
      </div>
    </div>
  );
}

export default function Team() {
  const gridRef = useReveal();

  return (
    <div className="w-full bg-surface">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 pt-28 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Meet the Team
        </h1>
        <p className="text-white/75 text-lg max-w-md mx-auto">
          Five Bilkent University students bringing Sproutly to life.
        </p>
      </section>

      {/* Cards */}
      <section
        ref={gridRef}
        className="section-reveal max-w-6xl mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <MemberCard key={m.name} {...m} index={i} />
          ))}
        </div>
      </section>

      {/* Bilkent strip */}
      <section className="bg-brand-50 py-14 px-6 text-center">
        <p className="text-brand-700 font-semibold text-lg">
          CS491 Senior Design Project · Department of Computer Engineering
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Bilkent University · 2025–2026
        </p>
      </section>
    </div>
  );
}
