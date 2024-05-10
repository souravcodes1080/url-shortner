import React from "react";
import "./header.css";
import coffee from "../../assets/coffee.png"
function Header() {
  return (
    <>
      <header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>
          Support <img src={coffee} alt={"coffeecup"} width={"14px"} />
        </button>
      </header>
    </>
  );
}

export default Header;
