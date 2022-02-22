import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar"

// Pages
import Home from "./pages/Home"
import Philosopher from "./pages/Philosopher"
import Search from "./pages/Search";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.key} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/philosopher" element={<Philosopher />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
} 