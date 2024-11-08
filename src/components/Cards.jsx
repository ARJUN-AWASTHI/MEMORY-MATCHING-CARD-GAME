import React, { useContext } from "react";
import { ClickContext } from "../utils/ClickContext";

const Cards = () => {
  const {click, setClick,cards,setCards,handleCardClick} = useContext(ClickContext);
  
  
  

  return (
    <div className=" flex gap-[20px] flex-wrap w-[40%] ">
      {cards.map((card) =>
        card.hidden ? (
          <div
            className="w-fit h-fit"
            draggable="false"
            onClick={() => handleCardClick(card.id)}
            key={card.id}
          >
            <img src="src\utils\png\back.png" alt="" />
          </div>
        ) : (
          <div
            className="w-fit h-fit"
            draggable="false"
            onClick={() => handleCardClick(card.id)}
            key={card.id}
          >
            <img src={card.path} alt="" />
          </div>
        )
      )}
    </div>
  );
};

export default Cards;
