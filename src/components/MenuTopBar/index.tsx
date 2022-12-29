import React, { useEffect, useState } from "react";
import "./style.scss";
import MenuButton from "../MenuButtons";

function MenuTopBar() {
  return (
    <div className="menuTopBar">
      <div className="menuTopBarArea">
        <MenuButton
          textToButton="ABOUT ME"
          route="/about_me"
          clickButton={(e) => {}}
        />

        <MenuButton
          textToButton="PROJECTS"
          route="/projects"
          clickButton={(e) => {}}
        />
        <MenuButton
          textToButton="CONTACT"
          route="/contact"
          clickButton={(e) => {}}
        />
      </div>
    </div>
  );
}

export default MenuTopBar;
