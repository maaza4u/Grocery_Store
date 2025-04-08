import { createContext, useContext, useEffect, useState } from "react";
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
  const [searchQuary, setSearchQuary] = useState(""); // ✅ correct type (string)

  const featchProducts = async () => {
    setProducts(dummyProducts);
  };

  const addToCart = async (itemId) => {
    let cardData = { ...cardItems }; 
    if (cardData[itemId]) {
      cardData[itemId] += 1;
    } else {
      cardData[itemId] = 1;
    }
    setCardItems(cardData);
    toast.success("Item added to cart");
  };
  const updateCartItem = async (itemId, quantity) => {
    let cardData = structuredClone(cardItems);
    cardData[itemId] = quantity;
    setCardItems(cardData);
    toast.success("Item updated in cart");
  };

  const removeFromCart = async (itemId) => {
    let cardData = structuredClone(cardItems);
    if (cardData[itemId]) {
      cardData[itemId] -= 1;
      if (cardData[itemId] === 0) {
        delete cardData[itemId];
      }
    }
    setCardItems(cardData);
    toast.success("Item removed from cart");
  };

  const getCartItemsCount = () => {
    let totalCount = 0;
    for (const item in cardItems) {
      totalCount += cardItems[item];
    }
    console.log("Cart item count:", totalCount); // ✅ add this
    return totalCount;
  };
  

  const getCartAmmount = () => {
    let totalAmmount = 0;
    for (const itemId in cardItems) {
      let itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo && cardItems[itemId] > 0) {
        totalAmmount += itemInfo.offerPrice * cardItems[itemId];
      }
    }
    return Math.floor(totalAmmount * 100) / 100;
  };

  useEffect(() => {
    featchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setisSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    addToCart,
    updateCartItem,
    removeFromCart,
    cardItems,
    searchQuary,
    setSearchQuary,
    getCartItemsCount,
    getCartAmmount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
