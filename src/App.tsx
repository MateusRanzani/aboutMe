import React from "react";
import MenuButton from "./components/MenuButton";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <div className="menuTopBar">
        <div className="menuTopBarArea">
          <MenuButton textToButton="ABOUT ME"/>
          <MenuButton textToButton="CONTACT"/>
          <MenuButton textToButton="PROJECTS"/>
        </div>
      </div>
      <div className="bodyPage">Hello world!</div>
    </div>
  );
}

export default App;
