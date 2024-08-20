import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
function App() {
  const [toggle, setToggle] = useState(false);
  let buttonStyle = toggle ? "bg-yellow-400" : "bg-slate-900";
  return (
    <div className={`h-screen ${buttonStyle} flex items-center justify-center`}>
      <ToggleButton
        toggle={toggle}
        onClick={() => setToggle(!toggle)}
      ></ToggleButton>
    </div>
  );
}

export default App;
