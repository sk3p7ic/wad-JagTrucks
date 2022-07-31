import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavProvider } from "./contexts/NavigationContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/home";
import { SchedulePage } from "./pages/Schedule";
import { TrucksPage } from "./pages/Trucks";
import { NonexistentPage } from "./pages/PageNotFound";
import { TruckViewPage } from "./pages/trucks/TruckView";
import { FoodTruckLogin } from "./pages/login";
import { NewFoodTruck } from "./pages/newUser";
import {
  JagTrucksAuthenticationProvider,
  RequireJagTrucksAuth,
} from "./contexts/AuthenticationContext";
import { TruckUserHome } from "./pages/authenticated/truckUser/TruckUserHome";
function App() {
  return (
    <NavProvider>
      <div className="vh-100 d-flex flex-column">
        <Navbar />
        <div className="flex-grow-1 overflow-auto d-flex flex-column">
          <JagTrucksAuthenticationProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="schedule" element={<SchedulePage />} />
              <Route path="trucks" element={<TrucksPage />} />
              <Route path="trucks/:truckId" element={<TruckViewPage />} />
              <Route path="login" element={<FoodTruckLogin />} />
              <Route path="newUser" element={<NewFoodTruck />} />
              <Route
                path="user"
                element={
                  <RequireJagTrucksAuth>
                    <TruckUserHome />
                  </RequireJagTrucksAuth>
                }
              >
                <Route
                  path="home"
                  element={
                    <RequireJagTrucksAuth>
                      <TruckUserHome />
                    </RequireJagTrucksAuth>
                  }
                />
              </Route>
              <Route path="*" element={<NonexistentPage />} />
            </Routes>
          </JagTrucksAuthenticationProvider>
        </div>
      </div>
    </NavProvider>
  );
}
export default App;
