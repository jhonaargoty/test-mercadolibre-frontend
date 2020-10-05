import React from "react";
import "./itemList.scss";
import ItemListItem from "./ItemListItem";

function itemList() {
  return (
    <div>
      <div className="search-layout">
        <ItemListItem />
        <ItemListItem />
        <ItemListItem />
        <ItemListItem />
        <ItemListItem />
        <ItemListItem />
      </div>
    </div>
  );
}

export default itemList;
