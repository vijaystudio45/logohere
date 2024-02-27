import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Forget from "./Components/Auth/Forget";
import UpdatePassword from "./Components/Auth/UpdatePassword";
import ResetPassword from "./Components/Auth/ResetPassword";
import VerifyEmail from "./Components/Auth/Verify-Email";
import PublicLayout from "./Components/PublicLayout/PublicLayout";
import Home from "./Components/Public/Home";
import Thank_you from "./Components/Auth/Thank-you";
import PageNotFound from "./PageNotFound";
import AdminLayout from "./Components/AdminLayout/Layout";
import Dashboard from "./Components/Admin/Dashboard";
import AdminProfile from "./Components/Admin/AdminProfile";
import ProtectedRoute from "./Components/Routing/ProtectRoute";
import Blog from "./Components/Public/Blog";
import GetServices from "./Components/Admin/GetServices";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/reset-password/:token/:uid"
            element={<ResetPassword />}
          />
          <Route path="/verify-email/:decodedID/" element={<VerifyEmail />} />

          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/thank-you" element={<Thank_you />} />

            <Route path="/forget-password" element={<Forget />} />
            <Route path="/update-password" element={<UpdatePassword />} />

            <Route path="/" element={<Home />} />

            <Route path="/blog" element={<Blog />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={<AdminProfile />} />
            <Route path="/singlesms" element={<GetServices />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
