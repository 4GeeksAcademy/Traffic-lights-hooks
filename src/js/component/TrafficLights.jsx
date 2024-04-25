import React, { useState } from "react";

function TrafficLights() {
  const [color, setColor] = useState(false);

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const switchColor = () => {
    switch (color) {
      case "red":
        setColor("yellow");
        break;
      case "yellow":
        setColor("green");
        break;
      case "green":
        setColor("red");
        break;
      default:
        setColor("red");
        break;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="support"></div>
        <div className="light-container">
          <div
            className={`red-light ${color === "red" ? "bright" : ""}`}
            onClick={() => handleClick("red")}
          ></div>
          <div
            className={`yellow-light ${color === "yellow" ? "bright" : ""}`}
            onClick={() => handleClick("yellow")}
          ></div>
          <div
            className={`green-light ${color === "green" ? "bright" : ""}`}
            onClick={() => handleClick("green")}
          ></div>
        </div>
      </div>
      <button onClick={switchColor}>Change Color</button>
    </div>
  );
}

export default TrafficLights;
