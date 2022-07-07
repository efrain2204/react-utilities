import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";

import {LoginScreen} from "../components/login/LoginScreen";
import {DashboardRoutes} from "./DashboardRoutes";
import {PublicRoute} from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router basename='/heroApp-react'>
      <div>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path='/*'
            element={
              <PrivateRoute >
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
