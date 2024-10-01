import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home"; // Ana sayfa (film listesi)
import MovieDetail from "./pages/MovieDetail";

// import MovieDetail from "@/"; // Film detay sayfası

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<MovieDetail />} /> */}
        <Route path="/moviedetail/" element={<MovieDetail />} />{" "}
        {/* Film detay sayfası */}
      </Routes>
    </Router>
  );
};

export default App;
