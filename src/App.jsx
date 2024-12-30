import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import MyBookmarks from "./pages/MyBookmarks";
function App() {
  return (
    <Router>
      <AnimatedCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/my-bookmarks" element={<MyBookmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
