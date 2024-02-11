import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.component";

const HatPage = () => (
  <div>
    <h1>This is Hat Page</h1>
  </div>
);

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<HatPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
