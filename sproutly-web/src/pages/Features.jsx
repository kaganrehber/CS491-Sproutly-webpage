import { useEffect, useRef, useState } from "react";
import { useRive } from "@rive-app/react-canvas";

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

const companions = [
  {
    name: "Fox",
    src: "rive/fox.riv",
    emoji: "🦊",
    color: "bg-orange-50 border-orange-200",
    canvasBg: "bg-orange-100",
  },
  {
    name: "Bunny",
    src: "rive/bunny.riv",
    emoji: "🐰",
    color: "bg-pink-50 border-pink-200",
    canvasBg: "bg-pink-200",
  },
  {
    name: "Owl",
    src: "rive/owl.riv",
    emoji: "🦉",
    color: "bg-amber-50 border-amber-200",
    canvasBg: "bg-amber-100",
  },
  {
    name: "Hedgehog",
    src: "rive/hedgehog.riv",
    emoji: "🦔",
    color: "bg-yellow-50 border-yellow-200",
    canvasBg: "bg-yellow-100",
  },
  {
    name: "Cat",
    src: "rive/cat.riv",
    emoji: "🐱",
    color: "bg-purple-50 border-purple-200",
    canvasBg: "bg-purple-100",
  },
  {
    name: "Penguin",
    src: "rive/penguin.riv",
    emoji: "🐧",
    color: "bg-blue-50 border-blue-200",
    canvasBg: "bg-blue-100",
  },
];

const coachingModes = [
  {
    name: "Casual",
    icon: "☀️",
    color: "border-green-300 bg-green-50",
    badge: "bg-green-100 text-green-700",
    details: [
      "No XP loss on quit",
      "No streak tracking",
      "Great for beginners",
    ],
  },
  {
    name: "Standard",
    icon: "⚡",
    color: "border-blue-300 bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    details: [
      "Minor XP loss on quit",
      "Streak tracking enabled",
      "Up to 5 overrides per session",
    ],
  },
  {
    name: "Harsh",
    icon: "🔥",
    color: "border-orange-300 bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
    details: [
      "Moderate XP and level loss on quit",
      "Must type 'I QUIT' to confirm",
    ],
  },
  {
    name: "Extreme",
    icon: "💀",
    color: "border-red-300 bg-red-50",
    badge: "bg-red-100 text-red-700",
    details: [
      "Companion resets to level 1 on quit",
      "7-day cooldown to switch modes",
      "Uninstall detection (Android)",
    ],
  },
];

const featureCards = [
  {
    icon: "📸",
    title: "AI Proof of Work",
    desc: "Take a photo of your completed task. The AI verifies it matches your task type: reading, coding, written work, and more. No fake check-offs.",
    color: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-100",
  },
  {
    icon: "⏱️",
    title: "Focus Timer",
    desc: "Pomodoro and chronometer modes. On Android, Sproutly blocks distracting apps while you focus.",
    color: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-100",
  },
  {
    icon: "📓",
    title: "Smart Notes",
    desc: "A full rich-text editor with AI summarization. Notes auto-link to related tasks and can detect templates.",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    icon: "📊",
    title: "Weekly Review",
    desc: "Focus heatmaps, completion stats, and an AI-generated review of your week with actionable suggestions.",
    color: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "🏆",
    title: "Achievements",
    desc: "Unlock badges for streaks, sessions, and level milestones.",
    color: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100",
  },
  {
    icon: "📅",
    title: "Calendar & Scheduling",
    desc: "Monthly and weekly calendar views. Schedule recurring time blocks and one-off events alongside your tasks.",
    color: "bg-rose-50 border-rose-200",
    iconBg: "bg-rose-100",
  },
];

function CompanionCard({ name, src, emoji, color, canvasBg }) {
  const [hasError, setHasError] = useState(false);
  const base = import.meta.env.BASE_URL;
  const { RiveComponent } = useRive({
    src: `${base}${src}`,
    stateMachines: ["State Machine 1"],
    autoplay: true,
    onLoadError: () => setHasError(true),
  });

  return (
    <div
      className={`rounded-3xl border-2 ${color} p-4 flex flex-col items-center gap-3`}
    >
      <div
        className={`w-full h-40 rounded-2xl overflow-hidden ${canvasBg} flex items-center justify-center`}
      >
        {hasError ? (
          <span className="text-5xl">{emoji}</span>
        ) : (
          <RiveComponent style={{ width: "100%", height: "100%" }} />
        )}
      </div>
      <p className="font-bold text-ink text-sm">{name}</p>
    </div>
  );
}

export default function Features() {
  const companionRef = useReveal();
  const coachingRef = useReveal();
  const featureRef = useReveal();
  const screensRef = useReveal();

  const screenshots = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="w-full bg-surface">
      {/* Page header */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 pt-28 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Everything Sproutly can do
        </h1>
        <p className="text-white/75 text-lg max-w-xl mx-auto">
          From AI verification to animated companions. Here's what makes
          Sproutly different.
        </p>
      </section>

      {/* Companions */}
      <section
        ref={companionRef}
        className="section-reveal max-w-6xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-ink mb-3">
            Meet Your Companions
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Pick one of six animated characters. Each reacts to your focus
            sessions with real moods, happy when you're crushing it, sad when
            you keep quitting.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {companions.map((c) => (
            <CompanionCard key={c.name} {...c} />
          ))}
        </div>
      </section>

      {/* Coaching Modes */}
      <section
        ref={coachingRef}
        className="section-reveal bg-brand-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-ink mb-3">
              Coaching Modes
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Choose how hard Sproutly holds you accountable. You can switch
              modes anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingModes.map(
              ({ name, icon, color, badge, recommended, details }) => (
                <div
                  key={name}
                  className={`relative rounded-3xl border-2 ${color} p-6 flex flex-col gap-3`}
                >
                  {recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-0.5 rounded-full">
                      Recommended
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${badge}`}
                    >
                      {name}
                    </span>
                  </div>
                  <ul className="space-y-1 mt-1">
                    {details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-brand-500 mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section
        ref={featureRef}
        className="section-reveal max-w-6xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-ink mb-3">
            Core Features
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map(({ icon, title, desc, color, iconBg }) => (
            <div
              key={title}
              className={`rounded-3xl border ${color} p-7 flex flex-col gap-3 hover:shadow-md hover:-translate-y-1 transition-all`}
            >
              <div
                className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center text-2xl`}
              >
                {icon}
              </div>
              <h3 className="font-bold text-ink text-base">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots gallery */}
      <section
        ref={screensRef}
        className="section-reveal bg-brand-900 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              App Screenshots
            </h2>
            <p className="text-white/60 max-w-md mx-auto">
              A look inside Sproutly — screenshots coming soon.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {screenshots.map((i) => (
              <div
                key={i}
                className="aspect-[9/16] bg-white/10 border border-white/20 rounded-3xl flex flex-col items-center justify-center gap-2 overflow-hidden"
              >
                <img
                  src={`screenshots/screen${i}.png`}
                  alt={`Screenshot ${i}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement
                      .querySelector(".placeholder")
                      ?.classList.remove("hidden");
                  }}
                />
                <div className="placeholder hidden flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="text-3xl">📱</span>
                  <span className="text-white/40 text-xs">Screenshot {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
