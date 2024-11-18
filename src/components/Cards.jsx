import React, { useContext,useEffect } from "react";
import { ClickContext } from "../utils/ClickContext";

const Cards = () => {
  const { cards, handleCardClick } = useContext(ClickContext);
 


  function displayCards(card) {
    if (card.found) {
      return (
        <div className="w-[128px] p-5" draggable="false" key={card.id}>
          <img src="src\utils\png\check.png" alt="" />
        </div>
      );
    } else if (card.hidden) {
      return (
        <div
          className="w-fit h-fit"
          draggable="false"
          onClick={() => handleCardClick(card.id)}
          key={card.id}
        >
          <img src="src\utils\png\back.png" alt="" />
        </div>
      );
    } else {

      return (
        <div className="w-fit h-fit" draggable="false" key={card.id}>
          <img src={card.path} alt="" />
        </div>
      );
    }
  }
  console.log(cards);
  
  return (
    <div className=" flex  gap-[20px] flex-wrap w-[40%] ">
      {cards.map((card) => displayCards(card))}
    </div>
  );
};

export default Cards;
