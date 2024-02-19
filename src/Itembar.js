import "./index.css";
import { useState } from "react";
export default function Itembar(props) {
  //destructure
  const { selectedItem, setSelectedItem } = props;
  return (
    <div className="Itembar">
      <ul>
        <li className={selectedItem === "Buy 1 Take 1" ? "linkactive" : ""}>
          <a
            href="#Buy 1 Take 1"
            onClick={() => setSelectedItem("Buy 1 Take 1")}
          >
            Buy 1 Take 1
          </a>
        </li>

        <li className={selectedItem === "What's New" ? "linkactive" : ""}>
          <a href="#What's New" onClick={() => setSelectedItem("What's New")}>
            What's New
          </a>
        </li>

        <li className={selectedItem === "Best Sellers" ? "linkactive" : ""}>
          <a
            href="#Best Sellers"
            onClick={() => setSelectedItem("Best Sellers")}
          >
            Best Sellers
          </a>
        </li>

        <li>
          <a href="#Pizza">Pizza</a>
        </li>

        <li>
          <a href="#Pizza Deals">Pizza Deals</a>
        </li>

        <li>
          <a href="#Pasta">Pasta</a>
        </li>

        <li>
          <a href="#Group Meals">Group Meals</a>
        </li>

        <li>
          <a href="#Solo Meals">Solo Meals</a>
        </li>

        <li>
          <a href="#Chicken and Sides">Chicken and Sides</a>
        </li>

        <li>
          <a href="#Drinks">Drinks</a>
        </li>
      </ul>
    </div>
  );
}
