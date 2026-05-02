import { Link } from "react-router-dom";
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const quickFeatures = [
  {
    icon: "🤖",
    title: "AI-Powered Verification",
    desc: "Submit a photo of your work. Our AI confirms you actually did the task. No cheating your streak.",
  },
  {
    icon: "🐾",
    title: "Animal Companions",
    desc: "Choose an animal companion to accompany your journey. It reacts to your progress with real moods. You gotta take good care of them.",
  },
  {
    icon: "🔥",
    title: "Coaching Modes",
    desc: "From Casual to Extreme, pick how hard your companion pushes you. Switch up the difficulty anytime.",
  },
];

export default function Home() {
  const featRef = useReveal();
  const ctaRef = useReveal();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-700 via-brand-600 to-brand-400 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 bg-brand-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-72 h-72 bg-brand-900/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fadeInLeft">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
              CS491 Senior Design Project · Bilkent University
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Your AI‑powered
              <br />
              <span className="text-gold">focus companion</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Sproutly combines smart task management, proof‑of‑work AI, and a
              growing animal companion to turn productivity into something you
              actually look forward to.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {/* App Store */}
              <div className="flex items-center gap-3 bg-white/10 border border-white/25 rounded-2xl px-5 py-3">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-white/60 text-xs leading-none">
                    Coming Soon on
                  </p>
                  <p className="text-white font-semibold text-sm">App Store</p>
                </div>
              </div>
              {/* Play Store */}
              <div className="flex items-center gap-3 bg-white/10 border border-white/25 rounded-2xl px-5 py-3">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43 71.65-39.43c19.49-10.77 19.49-39.23 0-50z" />
                </svg>
                <div>
                  <p className="text-white/60 text-xs leading-none">
                    Coming Soon on
                  </p>
                  <p className="text-white font-semibold text-sm">
                    Google Play
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/features"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm px-6 py-3 rounded-2xl hover:bg-brand-50 transition-colors shadow-lg"
            >
              Explore Features
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Right: Phone mockup placeholder */}
          <div className="flex justify-center animate-fadeInRight">
            <div className="animate-float relative">
              <div className="w-56 h-[450px] bg-white/10 border-2 border-white/30 rounded-[2.5rem] backdrop-blur flex flex-col items-center justify-center shadow-2xl">
                <div className="w-20 h-3 bg-white/30 rounded-full mb-8" />
                <div className="w-36 h-36 bg-white/20 rounded-3xl flex items-center justify-center mb-4">
                  <span className="text-6xl">🌱</span>
                </div>
                <p className="text-white/70 text-sm font-medium">
                  Screenshot coming soon
                </p>
                <div className="absolute bottom-6 w-24 h-1.5 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Quick feature strip */}
      <section
        ref={featRef}
        className="section-reveal max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {quickFeatures.map(({ icon, title, desc }, i) => (
          <div
            key={title}
            className={`bg-white rounded-3xl p-8 shadow-sm border border-brand-100 hover:shadow-md hover:-translate-y-1 transition-all delay-${(i + 1) * 100}`}
          >
            <span className="text-4xl mb-4 block">{icon}</span>
            <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* About strip */}
      <section className="bg-brand-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-800 mb-5">
            Productivity, reimagined
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Sproutly is a cross‑platform mobile app built for iOS and Android.
            It blends smart task tracking, a Pomodoro‑style focus timer, app
            blocking, AI‑generated weekly reviews, and a gamified companion
            system into one cohesive experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter",
              "FastAPI",
              "Firebase",
              "Claude AI",
              "Rive Animations",
              "MySQL",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="section-reveal py-20 px-6 text-center bg-surface"
      >
        <h2 className="text-3xl font-extrabold text-ink mb-4">
          Want to see more?
        </h2>
        <p className="text-gray-500 mb-8">
          Explore all the features, meet the team, or read our project reports.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/features"
            className="bg-brand-600 text-white font-bold px-8 py-3 rounded-2xl hover:bg-brand-700 transition-colors shadow-md"
          >
            Explore
          </Link>
          <Link
            to="/documents"
            className="bg-white border border-brand-200 text-brand-700 font-bold px-8 py-3 rounded-2xl hover:bg-brand-50 transition-colors"
          >
            Documents
          </Link>
        </div>
      </section>
    </div>
  );
}
