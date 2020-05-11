import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <div className="tab">
            <a>Home</a>
          </div>
          <div className="tab">
            <a>About</a>
          </div>
          <div className="tab">
            <a>features</a>
          </div>
        </div>
        <div className="viewport">Pages Go here</div>
      </div>
    </div>
  );
}

export default App;
