import { useState, useEffect, useRef } from "react";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };

  const triggerOff = () => {
    document.exitFullscreen();
  };
  return {
    element,
    triggerFull,
    triggerOff
  };
};

export default function App() {
  const { element, triggerFull, triggerOff } = useFullscreen();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={triggerFull}>onFullscreen</button>
        <button onClick={triggerOff}>offFullScreen</button>
      </div>
    </div>
  );
}
