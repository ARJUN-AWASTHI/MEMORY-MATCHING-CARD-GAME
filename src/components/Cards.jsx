import React from "react";

const Cards = ({ cards, setCards }) => {
  function handleCardClick(id) {
    const allCards = [...cards];
    allCards[id - 1].hidden = !allCards[id - 1].hidden;
    

    setCards(allCards);
  }

  return (
    <div className=" flex gap-[20px] flex-wrap w-[40%] ">
      {cards.map((card) =>
        card.hidden ? (
          <div
            className="w-fit h-fit"
            draggable="false"
            onClick={() => handleCardClick(card.id)}
            key={card.id * 16}
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
