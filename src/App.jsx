import { useState } from "react";
import logo from "./assets/react.svg";
import "./App.css";
import "./assets/styles/stylesheet.css";
import GlassSurface from "./components/GlassSurface";
import AppLayout from "./components/AppLayout";

// import PillNav from "./components/CardNav";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppLayout></AppLayout>
    </>
  );
}

export default App;
