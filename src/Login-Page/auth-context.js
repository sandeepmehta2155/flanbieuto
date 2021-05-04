import { createContext, useEffect, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setUserLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      setUserLogin(true);
      localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: true }));
    }

    const loginStatus = JSON.parse(localStorage?.getItem("login"));

    loginStatus?.isUserLoggedIn && setUserLogin(true);
  }, []);

  function LogOut() {
    setUserLogin(false);
    localStorage?.removeItem("login");
    navigate("/");
  }
  return (
    <AuthContext.Provider value={{ isUserLoggedIn, setUserLogin, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
