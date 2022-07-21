import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavProvider } from "./contexts/NavigationContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/home";

function App() {
  return (
    <NavProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
