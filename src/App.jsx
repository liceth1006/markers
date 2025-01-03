import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import MyBookmarks from "./pages/MyBookmarks";
import Color from "./pages/Color";
import { Toaster } from "react-hot-toast";
import AllResources from "./pages/AllResources.JSX";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
       
        <AnimatedCursor />
        <Toaster position="top-right" />
        <Navbar />
        
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllResources />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/color" element={<Color />} />
          <Route path="/my-bookmarks" element={<MyBookmarks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
