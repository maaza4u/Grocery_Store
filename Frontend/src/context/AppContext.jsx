import { createContext,useContext, useState } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";
import React from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setisSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);


  const value = {navigate,user, setUser,isSeller, setisSeller,showUserLogin, setShowUserLogin};
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}