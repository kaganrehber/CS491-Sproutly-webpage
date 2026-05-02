import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Documents from "./pages/Documents";

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-surface">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/features"  element={<Features />} />
            <Route path="/team"      element={<Team />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
