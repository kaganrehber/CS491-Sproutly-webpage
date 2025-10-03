import "./index.css";

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
      </main>
    </div>
  );
}

export default App;
