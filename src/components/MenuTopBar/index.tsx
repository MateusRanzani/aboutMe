import React from "react";
import "./style.scss";
import MenuButton from "../MenuButtons";

function MenuTopBar() {
  return (
    <div className="menuTopBar">
      <div className="menuTopBarArea">
        <MenuButton textToButton="ABOUT ME" route="/about_me"/>
        <MenuButton textToButton="CONTACT"  route="/contact"/>
        <MenuButton textToButton="PROJECTS"  route="/projects"/>
      </div>
    </div>
  );
}

export default MenuTopBar;
