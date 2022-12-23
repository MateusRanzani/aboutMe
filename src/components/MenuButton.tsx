import React from "react";
import {
  UserIcon,
  PhoneIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import "./../styles/global.css";

interface buttonProps {
  textToButton: string;
}

function MenuButton(props: buttonProps) {
  return (
    <div className="menuButton">
      {props.textToButton === "ABOUT ME" && (
        <UserIcon className="iconButtonMenu" />
      )}
      {props.textToButton === "CONTACT" && (
        <PhoneIcon className="iconButtonMenu" />
      )}
      {props.textToButton === "PROJECTS" && (
        <CodeBracketIcon className="iconButtonMenu" />
      )}

      <p>{props.textToButton}</p>
    </div>
  );
}

export default MenuButton;
