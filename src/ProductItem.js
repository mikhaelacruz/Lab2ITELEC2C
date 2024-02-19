import "./index.css";

export default function ProductItem(props) {
  return (
    <div className="ProductItem">
      <img
        className="ProductImage"
        src={props.data.image}
        alt={props.data.name}
      ></img>
      <div className="ProductInfo">
        <h1>{props.data.name}</h1>
        <h2 style={{ color: props.data.quantity === 0 ? "red" : "green" }}>
          {props.data.quantity === 0 ? "Sold Out" : props.data.price}
        </h2>
      </div>
    </div>
  );
}
