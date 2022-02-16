import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

// Pages
import Home from "./pages/Home"
import Philosopher from "./pages/Philosopher"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosopher" element={<Philosopher />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
} 