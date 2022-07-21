import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/home";

function App() {
  return (
    <NavProvider>
      <Routes>
        <Navbar />
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
