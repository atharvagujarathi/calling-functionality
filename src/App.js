import React from "react";
import Phone from "./Components/Phone/Phone";
import { data } from "./Components/Data/Data";


function set(unique) {
  return(
    <Phone 
    name={unique.name}
    phone={unique.phone}
    />
  )
}

function App() {
  return (
    <div className="App">
      <Phone />

      {data.map(Phone)}
    </div>
  );
}

export default App;
