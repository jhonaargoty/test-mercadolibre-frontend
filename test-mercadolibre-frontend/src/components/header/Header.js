import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [itemSearch, setItemSearch] = useState("x");
  const mylink = `/items?search=${itemSearch}`;
  return (
    <div>
      <header>
        <div className="content-header">
          <Link to="/">
            <div className="nav-logo content"></div>
          </Link>
          <form className="nav-search">
            <input
              className="nav-search-input"
              type="text"
              placeholder="Nunca dejes de buscar"
              onChange={(e) => setItemSearch(e.target.value)}
            />
            <Link to={mylink}>
              <button className="button-search" type="sumbit"></button>
            </Link>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Header;
