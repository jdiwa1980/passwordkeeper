import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute";
import Register from "./pages/Register";



function App() {

  

  return (
    <Routes>
        <Route 
          path="/"
          element={<Login />}
        />
    
        <Route 
          path="/dashboard"
          element={
            <ProtectRoute>
                <Dashboard />
            </ProtectRoute>
        }
        />

        <Route 
          path="/register"
          element={<Register />}
        />

        
    </Routes>
  );
}

export default App;
