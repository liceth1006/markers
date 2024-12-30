import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <AnimatedCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
