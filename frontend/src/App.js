import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/site/Navbar";
import Hero from "./components/site/Hero";
import Salvix from "./components/site/Salvix";
import ArtistProgram from "./components/site/ArtistProgram";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";

function Home() {
  return (
    <main className="bg-[#0B0B0D] text-[#ECEAE4] min-h-screen">
      <Navbar />
      <Hero />
      <Salvix />
      <ArtistProgram />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#101012",
            border: "1px solid rgba(94,139,126,0.28)",
            color: "#ECEAE4",
            borderRadius: 0,
            fontFamily: "Outfit, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.04em",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
