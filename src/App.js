import "./App.css";
import Navbar from "./Navbar.js";
import Itembar from "./Itembar.js";
import Status from "./Status.js";
import Storebtn from "./Storebtn.js";
import ProductContainer from "./ProductContainer.js";
import ProductItem from "./ProductItem.js";
import Footer from "./Footer.js";
import { useState } from "react";
//import { itemsData } from "./data.js";
import {
  BestSellers,
  Buy1Take1Data,
  ChickenAndSides,
  Drinks,
  GroupMeals,
  Pasta,
  Pizza,
  PizzaDeals,
  SoloMeals,
  WhatsNewData,
} from "./data.js";
//console.log(itemsData);
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Buy 1 Take 1");

  return (
    <div className="container">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Itembar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <div className="centered">
        {loggedIn ? (
          <>
            <Status />
            <Storebtn />
          </>
        ) : null}

        <ProductContainer
          selectedItem={selectedItem}
          name="Buy 1 Take 1"
          data={Buy1Take1Data}
        />
        <ProductContainer
          selectedItem={selectedItem}
          name="What's New"
          data={WhatsNewData}
        />
        <ProductContainer
          selectedItem={selectedItem}
          name="Best Sellers"
          data={BestSellers}
        />
        <ProductContainer
          selectedItem={selectedItem}
          name="Pizza"
          data={Pizza}
        />
        <ProductContainer name="Pizza Deals" data={PizzaDeals} />
        <ProductContainer name="Pasta" data={Pasta} />
        <ProductContainer name="Group Meals" data={GroupMeals} />
        <ProductContainer name="Solo Meals" data={SoloMeals} />
        <ProductContainer name="Chicken and Sides" data={ChickenAndSides} />
        <ProductContainer name="Drinks" data={Drinks} />
      </div>

      <div className="ToTop">
        <a href="#"> ↑ Back to top</a>
      </div>

      <Footer />
    </div>
  );
}

export default App;

//Showcase conditional statements

//
