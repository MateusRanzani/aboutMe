import React from "react";
import "./MenuTopBar.scss";
import MenuButton from "../MenuButtons/MenuButton";

function MenuTopBar() {
  return (
    <div className="menuTopBar">
      <div className="menuTopBarArea">
        <MenuButton textToButton="ABOUT ME" />
        <MenuButton textToButton="CONTACT" />
        <MenuButton textToButton="PROJECTS" />
      </div>
    </div>
  );
}

export default MenuTopBar;
