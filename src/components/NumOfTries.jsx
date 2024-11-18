import React, { useContext } from "react";
import { ClickContext } from "../utils/ClickContext";

const NumOfTries = () => {
  const { tries } = useContext(ClickContext);
  return (
  <div className="text-4xl absolute top-0 right-0 p-10">
    
    NUMBER OF TRIES : {tries}
  
  </div>);
};

export default NumOfTries;
