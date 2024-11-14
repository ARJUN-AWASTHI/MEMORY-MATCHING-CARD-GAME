import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import UserLife from "./components/UserLife";
const App = () => {
  
  

  return (
    <div className="w-screen h-screen bg-red-200 flex justify-center items-center">
      <Cards  />
      <UserLife/>
    </div>
  )
}

export default App;
