import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {Navibar} from "./components/Navibar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { History } from "./pages/History";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Settings } from "./pages/Settings";
import { useSelector } from "react-redux";
import Donate from "./components/Donate";
import { DonateInfo } from "./components/DonateInfo/DonateInfo";
import { SubscriptionInfo } from "./components/SubscriptionInfo/SubscriptionsInfo";
import { TrackingInfo } from "./components/TrackingInfo/TrackingInfo";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />

        {isLoggedIn && <Route path="/profile" element={<Profile />} />}

        {isLoggedIn && <Route path="/history" element={<History />} />}

        <Route path="/history/donate" element={<Donate />} />

        <Route path="/settings" element={<Settings />} />

        {isLoggedIn && <Route path="/settings/donate" element={<DonateInfo />} />}

        {isLoggedIn && <Route path="/settings/subscriptions" element={<SubscriptionInfo />} />}

        {isLoggedIn && <Route path="/settings/tracking" element={<TrackingInfo />} />}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
