import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/site/Navbar";
import Marquee from "./components/site/Marquee";
import Hero from "./components/site/Hero";
import Tattoos from "./components/site/Tattoos";
import Salvix from "./components/site/Salvix";
import ArtistProgram from "./components/site/ArtistProgram";
import Inquire from "./components/site/Inquire";
import Footer from "./components/site/Footer";

function Home() {
  return (
    <main className="bg-[#0A0A0C] text-[#E8E6E1] min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Tattoos />
      <Marquee />
      <Salvix />
      <ArtistProgram />
      <Inquire />
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
            background: "#121214",
            border: "1px solid rgba(232,230,225,0.12)",
            color: "#E8E6E1",
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
