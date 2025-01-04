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
import Audios from "./pages/Audios";
import Videos from "./pages/Videos";
import Api from "./pages/Api";
import VideoTemplates from "./pages/VideoTemplates";
import Components from "./pages/Components";
import Frameworks from "./pages/Frameworks";
import Libraries from "./pages/Libraries";
import TextGeneration from "./pages/TextGeneration";
import ImageGeneration from "./pages/ImageGeneration";
import VideoGeneration from "./pages/VideoGeneration";
import CreativePortfolios from "./pages/CreativePortfolios";
import DesignTrends from "./pages/DesignTrends";
import ImageCompressors from "./pages/ImageCompressors";
import BackgroundRemovers from "./pages/BackgroundRemovers";
import ResourceOptimizers from "./pages/ResourceOptimizers";
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
          <Route path="/audios" element={<Audios/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/api" element={<Api/>} />
          <Route path="/components" element={<Components/>} />
          <Route path="/frameworks" element={<Frameworks/>} />
          <Route path="/libraries" element={<Libraries/>} />
          <Route path="/text-generation" element={<TextGeneration/>} />
          <Route path="/image-generation" element={<ImageGeneration/>} />
          <Route path="/video-generation" element={<VideoGeneration/>} />
          <Route path="/video-templates" element={<VideoTemplates/>} />
          <Route path="/creative-portfolios" element={<CreativePortfolios/>} />
          <Route path="/design-trends" element={<DesignTrends/>} />
          <Route path="/image-compressors" element={<ImageCompressors/>} />
          <Route path="/design-tools" element={<DesignTools/>} />
          <Route path="/resource-optimizers" element={<ResourceOptimizers/>} />
          <Route path="/background-removers" element={<BackgroundRemovers/>} />
          <Route path="/my-bookmarks" element={<MyBookmarks />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
