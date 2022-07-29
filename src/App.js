import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavProvider } from "./contexts/NavigationContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/home";
import { SchedulePage } from "./pages/Schedule";
import { TrucksPage } from "./pages/Trucks";
import { NonexistentPage } from "./pages/PageNotFound";
import { TruckViewPage } from "./pages/trucks/TruckView";
import {FoodTruckLogin} from "./pages/login";
function App() {
  return (
    <NavProvider>
      <div className="vh-100 d-flex flex-column">
        <Navbar />
        <div className="flex-grow-1 overflow-auto d-flex flex-column">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="trucks" element={<TrucksPage />} />
            <Route path="trucks/:truckId" element={<TruckViewPage />} />
            <Route path="login" element={<FoodTruckLogin />}/>
            <Route path="*" element={<NonexistentPage />} />
          </Routes>
        </div>
      </div>
    </NavProvider>
  );
}
export default App;
