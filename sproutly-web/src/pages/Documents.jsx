import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const reports = [
  {
    title: "Project Proposal",
    desc: "Initial scope, motivation, and feasibility study for Sproutly.",
    href: "documents/project-proposal.pdf",
    phase: "Phase 1",
    phaseColor: "bg-brand-100 text-brand-700",
    size: "~68 KB",
  },
  {
    title: "Project Specification Report",
    desc: "Use cases, user stories, system boundaries, and functional requirements.",
    href: "documents/project-specification.pdf",
    phase: "Phase 2",
    phaseColor: "bg-blue-100 text-blue-700",
    size: "~424 KB",
  },
  {
    title: "Analysis & Requirements Report",
    desc: "Detailed analysis of system requirements, constraints, and design rationale.",
    href: "documents/analysis-requirements.pdf",
    phase: "Phase 3",
    phaseColor: "bg-violet-100 text-violet-700",
    size: "~7.9 MB",
  },
  {
    title: "Detailed Design Report",
    desc: "Architecture diagrams, component design, data models, and API specifications.",
    href: "documents/detailed-design.pdf",
    phase: "Phase 4",
    phaseColor: "bg-amber-100 text-amber-700",
    size: "~1.0 MB",
  },
];

const logbooks = [
  { name: "Kağan Rehber",          href: "https://docs.google.com/document/d/1b4NXpplILX89qYNhKv6EYOnXRQ_W1Ar9LE8pEZ6dw88/edit?usp=sharing" },
  { name: "Bilge İdil Öziş",       href: "https://docs.google.com/document/d/1XuOBwZaCWMEw83P3PU5MEZLREvLD8WJFGVngF3p8siU/edit?usp=sharing" },
  { name: "Mennatallah Abouelenin", href: "https://docs.google.com/document/d/1YJlnnLuDt0qbw9eZplZqHLV1DCKhdltG-Bs9iCpaSnM/edit?usp=sharing" },
  { name: "Elif Ercan",             href: "https://docs.google.com/document/d/1bC7BRaHLyj_JbQlnGuOT_ldmgaa15NcxbUesIrY6IwY/edit?usp=sharing" },
  { name: "Bilgehan Tuğcu",         href: "https://docs.google.com/document/d/19GZoMgb3bn0vPvAdjrIAEjUee1N4e3BaHTXGWuE1uXU/edit?usp=sharing" },
];

const timelinePhases = [
  { label: "Proposal",        color: "bg-brand-500" },
  { label: "Specification",   color: "bg-blue-500"  },
  { label: "Analysis",        color: "bg-violet-500" },
  { label: "Design",          color: "bg-amber-500" },
  { label: "Implementation",  color: "bg-rose-500"  },
];

export default function Documents() {
  const reportsRef  = useReveal();
  const logbooksRef = useReveal();

  return (
    <div className="w-full bg-surface">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 pt-28 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Project Documents
        </h1>
        <p className="text-white/75 text-lg max-w-md mx-auto">
          Reports, deliverables, and individual logbooks from every phase of
          development.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-0">
          {timelinePhases.map(({ label, color }, i) => (
            <div key={label} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className={`w-4 h-4 rounded-full ${color} shadow-md`} />
                <span className="text-xs text-gray-500 font-medium text-center">{label}</span>
              </div>
              {i < timelinePhases.length - 1 && (
                <div className="h-0.5 flex-1 bg-gray-200 -mt-4" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Reports */}
      <section
        ref={reportsRef}
        className="section-reveal max-w-4xl mx-auto px-6 pb-16"
      >
        <h2 className="text-2xl font-extrabold text-ink mb-6">Reports</h2>
        <div className="flex flex-col gap-4">
          {reports.map(({ title, desc, href, phase, phaseColor, size }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all p-6 flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-brand-100 transition-colors">
                📄
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${phaseColor}`}>
                    {phase}
                  </span>
                  <span className="text-xs text-gray-400">{size}</span>
                </div>
                <p className="font-bold text-ink text-sm group-hover:text-brand-700 transition-colors">
                  {title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
              <svg
                className="w-5 h-5 text-gray-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all shrink-0"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Logbooks */}
      <section
        ref={logbooksRef}
        className="section-reveal bg-brand-50 py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-ink mb-2">Individual Logbooks</h2>
          <p className="text-gray-500 text-sm mb-8">
            Weekly progress logs maintained by each team member throughout the
            project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {logbooks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-md hover:border-brand-300 transition-all p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:bg-brand-200 transition-colors">
                  📒
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink text-sm group-hover:text-brand-700 transition-colors">
                    {name}
                  </p>
                  <p className="text-xs text-gray-400">Personal logbook · Google Docs</p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all shrink-0"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
