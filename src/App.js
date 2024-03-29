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
import { NewAccountPage } from "./pages/newUser";
import { RequireJagTrucksAuth } from "./pages/authenticated/RequireJagTrucksAuth";
import { TruckUserHome } from "./pages/authenticated/truckUser/TruckUserHome";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useJagTrucksAuthentication } from "./contexts/AuthenticationContext";
import { StudentUserHome } from "./pages/authenticated/studentUser/StudentUserHome";
import { EditTruckPage } from "./pages/authenticated/truckUser/EditTruck";
import { CartProvider } from "./contexts/CartContext";
import { CartOffcanvas } from "./components/CartOffcanvas";
import { CartButtonManagerProvider } from "./contexts/CartButtonContext";
function App() {
  const { jagTrucksAuth } = useJagTrucksAuthentication();
  const [showCookieWarning, setShowCookieWarning] = useState(false);

  useEffect(() => {
    const showCookieFromStorage = JSON.parse(
      localStorage.getItem("doUseCookies")
    );
    if (!showCookieFromStorage) setShowCookieWarning(true);
  }, []);

  const onCookieWarningDismiss = () => {
    localStorage.setItem("doUseCookies", JSON.stringify({ useCookies: true }));
    setShowCookieWarning(false);
  };

  return (
    <CartProvider>
      <CartButtonManagerProvider>
        <NavProvider>
          <CartOffcanvas />
          <div className="vh-100 d-flex flex-column">
            <Navbar />
            <Alert
              variant="light"
              className="position-fixed bottom-0 start-0 end-0 mx-auto bg-amber-50"
              style={{ width: "fit-content", zIndex: 2000 }}
              show={showCookieWarning}
              onClose={() => onCookieWarningDismiss()}
              dismissible
            >
              <Alert.Heading>This site uses cookies.</Alert.Heading>
              <p>
                This site uses cookies. By using this website you agree to use
                cookies.
              </p>
            </Alert>
            <div className="flex-grow-1 overflow-auto d-flex flex-column">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="schedule" element={<SchedulePage />} />
                <Route path="trucks" element={<TrucksPage />} />
                <Route path="trucks/:truckId" element={<TruckViewPage />} />
                <Route path="login" element={<FoodTruckLogin />} />
                <Route path="newUser" element={<NewAccountPage />} />
                <Route
                  path="user/home"
                  element={
                    <RequireJagTrucksAuth>
                      {jagTrucksAuth?.userType === "truck" && <TruckUserHome />}
                      {jagTrucksAuth?.userType === "student" && (
                        <StudentUserHome />
                      )}
                    </RequireJagTrucksAuth>
                  }
                />
                <Route
                  path="user/editTruck/:truckId"
                  element={
                    <RequireJagTrucksAuth>
                      {jagTrucksAuth?.userType === "truck" && <EditTruckPage />}
                      {jagTrucksAuth?.userType !== "truck" && (
                        <NonexistentPage />
                      )}
                    </RequireJagTrucksAuth>
                  }
                />
                <Route path="*" element={<NonexistentPage />} />
              </Routes>
            </div>
          </div>
        </NavProvider>
      </CartButtonManagerProvider>
    </CartProvider>
  );
}
export default App;
