import React, { useState } from "react";
import { cardData } from "./utils/cards.json";
import Cards from "./components/Cards";
const App = () => {
  
  const [cards, setCards] = useState(cardData);
  
  return (
    < div className="w-screen h-screen bg-red-200 flex justify-center items-center" >
      <Cards cards={cards} setCards ={setCards}/>
    </ div >
  );
};

export default App;
