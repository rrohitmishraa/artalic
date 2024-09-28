import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <BrowserRouter>
      <SpeedInsights />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
