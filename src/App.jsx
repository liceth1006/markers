import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import MyBookmarks from "./pages/MyBookmarks";
import Color from "./pages/Color";
import { Toaster } from "react-hot-toast";
function App() {
  
  return (
    <Router>
      <AnimatedCursor />
      <Toaster position="top-right" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/color" element={<Color />} />
        <Route path="/my-bookmarks" element={<MyBookmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
