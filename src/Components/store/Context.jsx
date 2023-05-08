import { createContext, useEffect, useReducer, useState } from "react";
import { foods } from "../Utils/Array";

export const AppProvider = createContext(null);

const initialState = {
  newFoods: [],
  quantity: 0,
};

const reduser = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        newFoods: [...state.newFoods, action.payload],
      };
    case "VALUE":
      return {
        ...state,
        quantity: state.quantity + 1,
        newFoods: state.newFoods.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          }
          return el;
        }),
      };
    case "PLUS":
      return {
        ...state,
        quantity: state.quantity + 1,
        newFoods: state.newFoods.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              quantity: el.quantity + 1,
              price: el.price + el.priceStatic,
            };
          }
          return el;
        }),
      };
    case "MINUS":
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
        newFoods: state.newFoods.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              quantity: el.quantity > 1 ? el.quantity - 1 : 0,
              price:
                el.price > el.priceStatic
                  ? el.price - el.priceStatic
                  : el.price,
            };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialState);
  const [open, setOpen] = useState(false);
  const [clickCss, setClickCss] = useState("");

  const addFoods = (id) => {
    const exis = state.newFoods.find((item) => item.id === id);
    if (exis) {
      dispatch({ type: "PLUS", payload: id });
    } else {
      const productToAdd = foods.find((item) => item.id === id);
      dispatch({ type: "ADD", payload: productToAdd });
      dispatch({ type: "PLUS", payload: id });  
    }
    setClickCss(!clickCss); 
  };

  useEffect(() => {
    const id = setInterval(() => {
      setClickCss("move");
    }, 0);

    return () => {
      clearInterval(id);
    };
  }, [clickCss]);

  const total = state.newFoods
    .map((item) => (item.quantity === 0 ? { ...item }.price : item.price))
    .reduce((a, b) => a + b, 0);

  const store = {
    addFoods,
    newFoods: state.newFoods,
    open,
    clickCss,
    quantity: state.quantity,
    setOpen,
    dispatch,
    total,
  };
  return <AppProvider.Provider value={store}>{children}</AppProvider.Provider>;
};
