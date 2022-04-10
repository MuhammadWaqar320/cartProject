import React, { useState } from "react";
import CreateContext from "./contextGlobal";
import { useReducer } from 'react';
const SavedProductReducer=(state,{type,payload})=>{
  switch (type) {
    case "add":
      return [...state,payload];
    default:
      break;
  }
}

export const ContextWrapper = (props) => {
const [savedProductData,dispatchProductData]=useReducer(SavedProductReducer,[]);
  const [noOfCartItem, setNoOfCartItem] = useState(0);
  return (
    <CreateContext.Provider value={{ noOfCartItem, setNoOfCartItem,savedProductData,dispatchProductData }}>
      {props.children}
    </CreateContext.Provider>
  );
};
