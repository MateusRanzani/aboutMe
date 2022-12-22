import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import "./../styles/global.css";

interface buttonProps {
  textToButton: string;
}

function MenuButton(props: buttonProps) {
  return (
    <div className="menuButton">
      <UserIcon className="iconButtonMenu" />
      <p>{props.textToButton}</p>
      
    </div>
  );
}

export default MenuButton;
