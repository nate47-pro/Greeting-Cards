import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>

      <div className="flex justify-between">
    <GreetingCards title={"Happy Birthday!!!"} message={"Wishing you a fantastic day filled with so much joy"}/>
      <GreetingCards title={"Congratulations!!"} message={"Well done on your achievement"}/>
      <GreetingCards title={"Thank You!"} message={"Your kindness and support is well appreciated"}/>
      </div>
      
    </div>
  );
};

export default App;
