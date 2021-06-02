import React from "react";
import "./App.css";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";

function App() {
  return (
    <div className="App">
      {/* Here we will add all of our components */}
      <WarningSign text="this is a alert from props" color="danger" />
      <MyBadge text="My badge text" color="Primary" />
    </div>
  );
}

export default App;
