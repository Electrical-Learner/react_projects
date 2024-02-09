import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

function RootApp() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <div>
      <Routes>
        {/* <Route
         path="/register-as-buyer"
         element={
           isAuthenticated === "false" ? (
             <RegisterAsFarmer />
           ) : (
             <Navigate to="/app" replace />
           )
         }
        /> */}
      </Routes>
    </div>
  );
}

export default RootApp;
