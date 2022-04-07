import { useState, useEffect } from "react";


const useScroll = () => {
  const [state, setState] = useState({
    x:0,
    y:0
  })
  useEffect( () => {
    const onChange = () => setState({
      x:window.scrollX,
      y:window.scrollY
    })
    window.addEventListener("scroll", onChange);
    return () => window.removeEventListener("scroll", onChange);
  }, [])
  return state;
}

export default function App() {
  const { y } = useScroll();

  return (
    <div className="App" style={{height:"1000vh"}}>
      <h1 style={ { position:"fixed", color:y>100?"red":"blue"}}>
        Hello CodeSandbox
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
