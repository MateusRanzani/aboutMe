import React, { useEffect, useState } from "react";
import "./style.scss";
import MenuButton from "../MenuButtons";

function MenuTopBar() {
  let [clickButton, setClickButton] = useState(false);

  return (
    <div className="menuTopBar">
      <div className={clickButton ? "menuTopBarAreaTrue" : "menuTopBarArea"}>
        {clickButton && (
          <div
            onClick={() => setClickButton(() => false)}
            style={{ color: "white" }}
          >
            teste
          </div>
        )}
        <MenuButton
          textToButton="ABOUT ME"
          route="/about_me"
          clickButton={(e) => {
            setClickButton(e);
          }}
        />
        <MenuButton
          textToButton="CONTACT"
          route="/contact"
          clickButton={(e) => {
            setClickButton(e);
          }}
        />
        <MenuButton
          textToButton="PROJECTS"
          route="/projects"
          clickButton={(e) => {
            setClickButton(e);
          }}
        />
      </div>
    </div>
  );
}

export default MenuTopBar;
