import ProductItem from "./ProductItem";
import "./index.css";

export default function ProductContainer(props) {
  return (
    <div className="ProductContainer" id={props.name}>
      <h1>{props.name}</h1>;
      <div className="Items">
        {props.data.map((item) => (
          <ProductItem data={item} />
        ))}
      </div>
    </div>
  );
}
