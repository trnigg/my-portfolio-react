// import { useState, useEffect } from "react";
// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import "./App.css";
// Import remaining assets / components here

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Outlet />
    </>
  );
}

export default App;
