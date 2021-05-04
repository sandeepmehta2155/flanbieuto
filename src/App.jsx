import React from "react";
import * as useComponent from "./index";

import "./styles.css";
import { useTheme } from "./HomePage_Components/theme-context";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const { mode } = useTheme();
  return (
    <>
      <div className={mode}>
        <useComponent.Header />
        <useComponent.ChatBot />

        <Routes>
          <Route path="/" element={<useComponent.Home />} />
          <Route path="/products" element={<useComponent.Products />} />
          <Route path="/cart" element={<useComponent.Cart />} />
          <Route path="/wishlist" element={<useComponent.WishList />} />
          <Route path="/login" element={<useComponent.Login />} />
          <Route path="/subscription" element={<useComponent.Subscription />} />
          <Route path="/feedback" element={<useComponent.Feedback />} />
          <useComponent.PrivateRoute
            path="/profile"
            element={<useComponent.UserProfile />}
          />
        </Routes>

        <useComponent.Footer />
      </div>
    </>
  );
}
