import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import SocialMediaBtns from "./buttons/social-media-btns/SocialMediaBtns";
import Header from "./components/Header";

// import BtnBorderAnimation from "./BtnBorderAnimation/BtnBorderAnimation";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/social-media-buttons" element={<SocialMediaBtns />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
