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
import Footer from "./components/Footer";
import Typography from "./pages/Typography.JSX";
import Templates from "./pages/Templates";
import DesignTools from "./pages/DesignTools";
import Illustrations from "./pages/Illustrations";
import Icons from "./pages/Icons";
import Photos from "./pages/Photos";
import Textures from "./pages/Textures";
import Models from "./pages/Models";
import Backgrounds from "./pages/Backgrounds";
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
          <Route path="/typography" element={<Typography />} />
          <Route path="/templates" element={<Templates/>} />
          <Route path="/backgrounds" element={<Backgrounds/>} />
          <Route path="/illustrations" element={<Illustrations/>} />
          <Route path="/icons" element={<Icons/>} />
          <Route path="/photos" element={<Photos/>} />
          <Route path="/textures" element={<Textures/>} />
          <Route path="/3d-models" element={<Models/>} />
          <Route path="/design-tools" element={<DesignTools/>} />
          <Route path="/my-bookmarks" element={<MyBookmarks />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
