import "./App.css";
import Navbar from "./Navbar.js";
import Itembar from "./Itembar.js";
import Status from "./Status.js";
import Storebtn from "./Storebtn.js";
import ProductContainer from "./ProductContainer.js";
import ProductItem from "./ProductItem.js";
import Footer from "./Footer.js";
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
  return (
    <div className="container">
      <Navbar />
      <Itembar />
      <div className="centered">
        <Status />
        <Storebtn />
        <ProductContainer name="Buy 1 Take 1" data={Buy1Take1Data} />
        <ProductContainer name="What's New" data={WhatsNewData} />
        <ProductContainer name="Best Sellers" data={BestSellers} />
        <ProductContainer name="Pizza" data={Pizza} />
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
