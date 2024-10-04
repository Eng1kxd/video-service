import { useState } from "react";
import React from "react";
import "./css/main.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="content">
        <Header />
      </div>
      <Footer />
    </>
  );
}

export default App;
