import React, { createContext, useEffect, useState } from "react";
import { cardData } from "./cards.json";

export const ClickContext = createContext();
const ClickContextProvider = (props) => {
  const [click, setClick] = useState([]);
  const [cards, setCards] = useState(cardData);
  const [locked, setLocked] = useState(false);
  const [lifes, setLifes] = useState([1, 1, 1]);
  useEffect(() => {
    console.log("LIFES : ", lifes.length);
    if (click.length >= 2) {
      setLocked(true);
      if (click[0].cardId != click[1].cardId) {
        console.log("Mismatched ids");
        
        setTimeout(() => {
          handleCardHide(click[0].id);
          handleCardHide(click[1].id);
          reduceLifes();
          setClick([]);
          setLocked(false);
        }, 500);
      }
    }
  }, [click]);
  function handleCardClick(id) {
    if (locked) return;
    const clickedCard = cards.find((card) => card.id === id);
    if (click.includes(clickedCard)) return;
    const allCards = [...cards];
    setClick([...click, clickedCard]);
    allCards[id - 1].hidden = false;
    setCards(allCards);
  }
  function handleCardHide(id) {
    const allCards = [...cards];
    allCards[id - 1].hidden = true; // Hide the card
    setCards(allCards);
  }
  function reduceLifes() {
    const temp = [...lifes];
    temp.pop();
    setLifes(temp);
  }

  return (
    <ClickContext.Provider
      value={{
        click,
        setClick,
        cards,
        setCards,
        handleCardClick,
        lifes,
        setLifes,
      }}
    >
      {props.children}
    </ClickContext.Provider>
  );
};

export default ClickContextProvider;
