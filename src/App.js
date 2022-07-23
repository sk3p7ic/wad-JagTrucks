import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavProvider } from "./contexts/NavigationContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/home";
import { useEffect, useRef } from "react";

function App() {
  const navRef = useRef(); // Ref to the container for the navbar
  let navHeight = useRef(0); // Stores the height of the navbar

  // Get the height of the navbar once it is rendered and store the new height
  useEffect(() => {
    const newNavHeight =
      navRef.current?.children[0].getBoundingClientRect().height;
    if (newNavHeight !== (undefined || 0)) navHeight.current = newNavHeight;
    console.log(navHeight.current);
  }, [navRef]);

  return (
    <NavProvider>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <div className="flex-grow-1 overflow-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </NavProvider>
  );
}
export default App;
