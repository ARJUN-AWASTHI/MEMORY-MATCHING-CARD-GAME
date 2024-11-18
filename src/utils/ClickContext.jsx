import React, { createContext, useEffect, useState } from "react";
import { cardData } from "./cards.json";

export const ClickContext = createContext();
const ClickContextProvider = (props) => {
  const [click, setClick] = useState([]);
  const [cards, setCards] = useState(cardData);
  const [locked, setLocked] = useState(false);
  const [tries , setTries] = useState(0);
 
 
  useEffect(() => {
    
    shuffleArray(cards);

  }, []);

  useEffect(() => {
    if (click.length >= 2) {
      setTries((prev)=>prev+1);
      setLocked(true);
      if (click[0].cardId != click[1].cardId) handleMismatching();
      else handleMatching();
    }
  }, [click]);


  function handleCardClick(id) {
    
    console.log(id);
    
    if (locked) return;
    const clickedCard = cards.find((card) => card.id === id);
    if (click.includes(clickedCard)) return;
    const allCards = [...cards];
    const cardIdx = allCards.findIndex((card)=> card.id===id)
    allCards[cardIdx].hidden = false;
    setClick([...click, clickedCard]);
    setCards(allCards);
  }


  function handleCardHide(id) {
    
    const allCards = [...cards];
    const cardIdx = allCards.findIndex((card)=> card.id===id)
    allCards[cardIdx].hidden = true; // Hide the card
    setCards(allCards);
  }


  function handleMatching() {
    setTimeout(() => {
      click.forEach((card) => (card.found = true));
      setClick([]);
      setLocked(false);
    }, 500);
  }


  function handleMismatching() {
    setTimeout(() => {
      handleCardHide(click[0].id);
      handleCardHide(click[1].id);

      setClick([]);
      setLocked(false);
    }, 500);
  }


  function shuffleArray(cards){
    for(let i = cards.length -1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1))
      const temp = cards[i];
      cards[i]=cards[j];
      cards[j]=temp;
    }
    
  }


  return (
    <ClickContext.Provider
      value={{
        click,
        tries,
        cards,
        setClick,
        setCards,
        handleCardClick,
        shuffleArray
      }}
    >
      {props.children}
    </ClickContext.Provider>
  );
};

export default ClickContextProvider;
