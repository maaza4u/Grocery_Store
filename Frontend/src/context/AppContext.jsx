import { createContext,useContext, useEffect, useState } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";
import React from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setisSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cardItems, setCardItems] = useState({});
  const [searchQuary, setSearchQuary] = useState({});


//fetch product 
  const featchProducts = async () => {
    setProducts(dummyProducts);
  }

  // add to card 
  const addToCart = async (itemId) => {
    let cardData = structuredClone(cardItems);
    if (cardData[itemId]) {
      cardData[itemId] += 1;
    } else {
      cardData[itemId] = 1;
    }
    setCardItems(cardData);
    toast.success("Item added to cart");
  }

  //update card
  const updateCartItem = async (itemId, quantity) => {
    let cardData = structuredClone(cardItems);
    
      cardData[itemId] = quantity;
      setCardItems(cardData);
      toast.success("Item updated in cart");
    }

  //remove item from card
  const removeFromCart = async (itemId) => {
    let cardData = structuredClone(cardItems);
    if (cardData[itemId]) {
      cardData[itemId] -= 1;
      if (cardData[itemId] === 0) {
        delete cardData[itemId];
      }
    }
    toast.success("Item removed from cart");
    setCardItems(cardData);
    }


  useEffect(() => {
    featchProducts();
  }, []);

  const value = {
    navigate, user, setUser, isSeller,
    setisSeller, showUserLogin, setShowUserLogin, products, addToCart,
    updateCartItem, removeFromCart, cardItems,searchQuary, setSearchQuary
  };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}