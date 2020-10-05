import React from "react";
import "./header.scss";

function header() {
  return (
    <div>
      <header>
        <div className="content-header">
          <a className="nav-logo content" href="/"></a>
          <form className="nav-search">
            <input
              className="nav-search-input"
              type="text"
              placeholder="Nunca dejes de buscar"
            />

            <button className="button-search" type="sumbit"></button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default header;
