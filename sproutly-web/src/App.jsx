import "./index.css";

var logbooks = [
  "https://docs.google.com/document/d/1b4NXpplILX89qYNhKv6EYOnXRQ_W1Ar9LE8pEZ6dw88/edit?usp=sharing",
  "https://docs.google.com/document/d/1XuOBwZaCWMEw83P3PU5MEZLREvLD8WJFGVngF3p8siU/edit?usp=sharing",
  "https://docs.google.com/document/d/1YJlnnLuDt0qbw9eZplZqHLV1DCKhdltG-Bs9iCpaSnM/edit?usp=sharing",
  "https://docs.google.com/document/d/1bC7BRaHLyj_JbQlnGuOT_ldmgaa15NcxbUesIrY6IwY/edit?usp=sharing",
  "https://docs.google.com/document/d/19GZoMgb3bn0vPvAdjrIAEjUee1N4e3BaHTXGWuE1uXU/edit?usp=sharing",
];

function App() {
  return (
    <div className="w-full min-h-screen font-sans">
      <header className="sticky top-0 bg-[#56daae] h-20 flex items-center justify-between px-8 z-50 shadow-md">
        <p className="text-white text-2xl font-bold">Sproutly</p>

        <nav className="flex items-center space-x-6">
          <a
            href="#home"
            className="text-white hover:text-gray-100 transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-100 transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#team"
            className="text-white hover:text-gray-100 transition-colors cursor-pointer"
          >
            Our Team
          </a>
          <a
            href="#documents"
            className="text-white hover:text-gray-100 transition-colors cursor-pointer"
          >
            Documents
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full">
        <section
          id="home"
          className="w-full h-screen flex items-center justify-center bg-[#56daae]"
        >
          <h1 className="text-5xl font-extrabold text-white text-center max-w-3xl leading-tight animate-fadeIn">
            Welcome to <span className="text-yellow-100">Sproutly</span>
          </h1>
        </section>

        <section
          id="about"
          className="w-full min-h-screen flex items-center justify-center bg-white p-8"
        >
          <div className="bg-[#56daae]/10 rounded-xl shadow-lg p-8 max-w-3xl animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-4 text-[#056d52]">
              About Sproutly
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sproutly is a personal AI-powered coach, helping you stay focused,
              complete tasks, and build better habits. With fun coaching modes,
              a companion that grows and evolves with your progress, smart task
              management, and focus timers, Sproutly turns productivity into an
              interactive experience. Track your achievements, get personalized
              guidance, and stay motivated, all in one app for iOS and Android.
              Sproutly is under development as our Senior Design Project for
              CS491 course in Bilkent University
            </p>
          </div>
        </section>

        <section
          id="team"
          className="w-full min-h-screen flex flex-col items-center justify-start bg-[#47c39c] p-8"
        >
          <h2 className="text-3xl font-bold m-10 text-[#056d52]">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-6xl">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-fadeInUp">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="/blank-avatar.png"
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#056d52]">
                  Kağan Rehber
                </h3>
                <p className="text-gray-600 text-sm">
                  kagan.rehber@ug.bilkent.edu.tr / rehberkagan@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-fadeInUp">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="/blank-avatar.png"
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#056d52]">
                  Bilge İdil Öziş
                </h3>
                <p className="text-gray-600 text-sm">
                  idil.ozis@ug.bilkent.edu.tr / ozisbilgeidil@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-fadeInUp">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="/blank-avatar.png"
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#056d52]">
                  Bilgehan Tuğcu
                </h3>
                <p className="text-gray-600 text-sm">
                  bilgehan.tugcu@ug.bilkent.edu.tr / bilgehantugcu@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-fadeInUp">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="/blank-avatar.png"
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#056d52]">Elif Ercan</h3>
                <p className="text-gray-600 text-sm">
                  nelif.ercan@ug.bilkent.edu.tr / eelifercan04@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-fadeInUp">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src="/blank-avatar.png"
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#056d52]">
                  Mennatallah Abouelenin
                </h3>
                <p className="text-gray-600 text-sm">
                  mennatallah@ug.bilkent.edu.tr / menna.ay.99@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="documents"
          className="w-full min-h-screen flex flex-row items-center justify-center bg-white p-8"
        >
          <div id="docs" className="flex flex-col m-10">
            <h2 className="text-3xl font-bold mb-8 text-[#056d52]">
              Documents
            </h2>

            <ul className="w-full max-w-xl space-y-4">
              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href="documents/project-proposal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Project Proposal
                </a>
              </li>

              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href="documents/project-specification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Project Specification Report
                </a>
              </li>

              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href="documents/analysis-requirements.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Analysis and Requirements Report
                </a>
              </li>

              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href="documents/detailed-design.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Detailed Design Report
                </a>
              </li>
            </ul>
          </div>
          <div id="docs" className="flex flex-col m-10">
            <h2 className="text-3xl font-bold mb-8 text-[#056d52]">Logbooks</h2>

            <ul className="w-full max-w-xl space-y-4">
              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href={logbooks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄Kağan Rehber - Logbook
                </a>
              </li>

              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href={logbooks[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Bilge İdil Öziş - Logbook
                </a>
              </li>

              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href={logbooks[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Mennatallah Abouelenin - Logbook
                </a>
              </li>

              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href={logbooks[3]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Elif Ercan - Logbook
                </a>
              </li>

              <li className="bg-[#56daae]/10 hover:bg-[#56daae]/20 transition rounded-lg shadow p-4">
                <a
                  href={logbooks[4]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#056d52] font-semibold text-lg"
                >
                  📄 Bilgehan Tuğcu - Logbook
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
