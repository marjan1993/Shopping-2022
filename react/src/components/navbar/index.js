import React from "react";
import { CartIcon } from "../cart";
import { Link } from "react-router-dom";
import { Search } from "./search";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Link to="/" className="navbar-brand">
        <span>Shopping</span>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto"></ul>
        <Link to="/cart">
          <div style={{ marginRight: 30 }}>
            <CartIcon />
          </div>
        </Link>
        <Search />
      </div>
    </nav>
  );
}
