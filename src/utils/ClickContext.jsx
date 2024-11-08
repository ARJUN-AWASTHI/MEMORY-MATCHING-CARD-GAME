import React, { createContext, useEffect, useState } from "react";
import { cardData } from "./cards.json";

export const ClickContext = createContext();
const ClickContextProvider = (props) => {
  const [click, setClick] = useState([]);
  const [cards, setCards] = useState(cardData);
  useEffect(() => {
    console.log("clicked cards", click);

    if (click.length == 2) {
      if (click[0].id != click[1].id) {
        console.log("Mismatched ids");

        setTimeout(() => {
          handleCardClick(click[0].id);
          handleCardClick(click[1].id);
          setClick([]);
        }, 500);
      }
    }
  });
  function handleCardClick(id) {
    const clickedCard = cards.find((card) => card.id === id);
    const allCards = [...cards];
    setClick([...click, clickedCard]);
    allCards[id - 1].hidden = !allCards[id - 1].hidden;
    setCards(allCards);
  }

  return (
    <ClickContext.Provider
      value={{ click, setClick, cards, setCards, handleCardClick }}
    >
      {props.children}
    </ClickContext.Provider>
  );
};

export default ClickContextProvider;
