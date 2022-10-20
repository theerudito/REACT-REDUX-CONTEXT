// APP
import { useState } from "react";

import "./App.css";
import { Create } from "./components/Create";
import Show from "./components/Show";

function App() {
  return (
    <div className="container text-center">
      <h2>Hola</h2>
      <Create />
      <Show />
    </div>
  );
}

export default App;
