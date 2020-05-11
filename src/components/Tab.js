import React, { useState } from "react";

const Tab = ({ children }) => {
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
    <div>
      <div
        className="tab"
        onMouseOut={hideHighlight}
        onMouseMove={moveHighlight}
      >
        <div className="highlight" style={highlightstyle} />
        {children}
      </div>
    </div>
  );
};

export default Tab;
