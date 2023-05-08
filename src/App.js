import "./App.css";
import { useContext, useState } from "react";
import { Header } from "./Components/header/Header";
import { MealsSummary } from "./Components/meals-summary/MealsSummary";
import { MealsSummaryCard } from "./Components/meals-summary/MealsSummaryCard";
import { Meals } from "./Components/meals/Meals";
import { AppProvider } from "./Components/store/Context";
import { Busket } from "./Components/Busket/Busket";

function App() {
  const { open } = useContext(AppProvider);
  return (
    <div>
      <Header />
      <MealsSummary />
      <MealsSummaryCard />
      <Meals />
      {open && <Busket />}
    </div>
  );
}

export default App;
