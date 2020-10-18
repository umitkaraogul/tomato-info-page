import React from "react";
import "./App.scss";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
