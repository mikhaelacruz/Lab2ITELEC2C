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
  Pizza,
  PizzaDeals,
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
        <ProductContainer name="Whats New" data={WhatsNewData} />
        <ProductContainer name="Best Sellers" data={BestSellers} />
        <ProductContainer name="Pizza" data={Pizza} />
        <ProductContainer name="Pizza Deals" data={PizzaDeals} />
      </div>

      <div className="ToTop">
        <a href="#">^ Back to top</a>
      </div>

      <Footer />
    </div>
  );
}

export default App;
