import "./index.css";
import { useState } from "react";

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <div>
        <div className="left">
          <img src="Navbar/logo.png" alt="logo" className="NavLogo" />
          <p>Home</p>
          <p>Menu</p>
        </div>
        <div className="right">
          <IconText
            img="Navbar/profile.png"
            text={props.loggedIn ? "Logout" : "Sign In"}
            onClick={() => {
              console.log("napindot");
              props.setLoggedIn(!props.loggedIn);
            }}
          ></IconText>
          <IconText img="Navbar/cart.png" text="₱0.00"></IconText>
          <img src="Navbar/search.png" alt="search" className="NavSearch" />
        </div>
      </div>
    </div>
  );
}

export function IconText(props) {
  return (
    <div className="IconText" {...props}>
      <img src={props.img} alt="profile" />
      <p className={props.text}>{props.text}</p>
    </div>
  );
}
