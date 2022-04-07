import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

const useFadeIn = (duration, delay) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;

      current.style.transition = `opacity ${duration}s ease-in ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return {
    ref: element,
    style: {
      opacity: 0
    }
  };
};

export default function App() {
  const elH1 = useFadeIn(2, 3);
  return (
    <div className="App">
      <h1 {...elH1}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
