import ProductItem from "./ProductItem";
import "./index.css";

export default function ProductContainer(props) {
  return (
    <div className="ProductContainer" id={props.name}>
      <h1
        style={{ color: props.name === props.selectedItem ? "green" : "black" }}
      >
        {props.name}
      </h1>

      <div className="Items">
        {props.data.map((item) => (
          <ProductItem data={item} />
        ))}
      </div>
    </div>
  );
}
