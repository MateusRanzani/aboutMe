import React from "react";
import {
  UserIcon,
  PhoneIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import "./style.scss";
import { Link } from "react-router-dom";

interface buttonProps {
  textToButton: string;
  route: string
}

function MenuButton(props: buttonProps) {
  return (
    <Link to={`${props.route}`}>
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

      <p style={{textAlign:"center"}}>{props.textToButton}</p>
    </div>
    </Link>
  );
}

export default MenuButton;
