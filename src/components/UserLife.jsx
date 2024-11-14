import React, { useContext } from "react";
import { ClickContext } from "../utils/ClickContext";
import Hearts from "./Hearts";

const UserLife = () => {
  const { lifes } = useContext(ClickContext);
  
  
  return (
    <div className=" h-fit absolute right-0 top-0 p-10 flex gap-2">
      {lifes.map((_,index)=><Hearts key={index}/>)}
    </div>
  );
};

export default UserLife;
