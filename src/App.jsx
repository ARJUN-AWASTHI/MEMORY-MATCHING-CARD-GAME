import React, { useContext, useEffect, useState } from "react";
import Cards from "./components/Cards";
import { ClickContext } from "./utils/ClickContext";
import NumOfTries from "./components/NumOfTries";

const App = () => {
  
  
  return (
    <div className="w-screen h-screen bg-red-200 flex justify-center items-center">
      <Cards />
      <NumOfTries/>
    </div>
  );
};

export default App;
