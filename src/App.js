import React, { useState } from "react";
import "./App.css";

function App() {
  const [highlightstyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const moveHighlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  };

  const hideHighlight = (e) => {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  };

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <div
            className="tab"
            onMouseOut={hideHighlight}
            onMouseMove={moveHighlight}
          >
            <div className="highlight" style={highlightstyle} />
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
