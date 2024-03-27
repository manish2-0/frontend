import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/User.js";
import AdminLogin from "../src/components/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import History from "./pages/History.jsx";
import Forms from "./pages/Forms.jsx";
import DeviceList from "./pages/DeviceList.jsx";
import Appointments from "./pages/Appointments.jsx";

function App({}) {
  // Router
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <>
                <AdminDashboard />
              </>
            }
          />
          <Route
            path="/admin/history"
            element={
              <>
                <History />
              </>
            }
          />
          <Route
            path="/admin/device-list"
            element={
              <>
                <DeviceList />
              </>
            }
          />
          <Route
            path="/admin/forms"
            element={
              <>
                <Forms />
              </>
            }
          />
          <Route
            path="/admin/appointments"
            element={
              <>
                <Appointments />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
