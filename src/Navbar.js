import "./index.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <div className="left">
          <img src="Navbar/logo.png" alt="logo" className="NavLogo" />
          <p>Home</p>
          <p>Menu</p>
        </div>
        <div className="right">
          <IconText img="Navbar/profile.png" text="Sign In"></IconText>
          <IconText img="Navbar/cart.png" text="₱0.00"></IconText>
          <img src="Navbar/search.png" alt="search" className="NavSearch" />
        </div>
      </div>
    </div>
  );
}

export function IconText(props) {
  return (
    <div className="IconText">
      <img src={props.img} alt="profile" />
      <p className={props.text}>{props.text}</p>
    </div>
  );
}
