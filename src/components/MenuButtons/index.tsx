import React from "react";
import {
  UserIcon,
  PhoneIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import "./style.scss";

interface buttonProps {
  textToButton: string;
  route: string;
  clickButton: (e: boolean) => void;
}

function MenuButton(props: buttonProps) {
  const anchorId = () => {
    switch (props.textToButton) {
      case "ABOUT ME":
        return "#aboutMeAnchor";
      case "CONTACT":
        return "#contactsAnchor";
      case "PROJECTS":
        return "#projectsAnchor";
    }
  };

  return (
    <a href={anchorId()}>
      <div className="menuButton" onClick={() => props.clickButton(true)}>
        {props.textToButton === "ABOUT ME" && (
          <UserIcon className="iconButtonMenu" />
        )}
        {props.textToButton === "CONTACT" && (
          <PhoneIcon className="iconButtonMenu" />
        )}
        {props.textToButton === "PROJECTS" && (
          <CodeBracketIcon className="iconButtonMenu" />
        )}

        <p className="textButtons" style={{ textAlign: "center" }}>{props.textToButton}</p>
      </div>
    </a>
  );
}

export default MenuButton;
