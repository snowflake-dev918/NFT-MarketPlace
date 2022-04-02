import React from "react";
import "./App.css";

import { ScrollToTop } from "./components/ScrollToTop";
import { Routes } from "./components/Routes";

function App(props: any) {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Routes></Routes>
    </>
  );
}

export default App;
