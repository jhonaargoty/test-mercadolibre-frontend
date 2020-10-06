import React from "react";

function ItemListItem({ img, price, title, location }) {
  return (
    <div>
      <div className="search-layout-item">
        <div className="search-result-image">
          <img alt="titulo-producto" className="item-img" src={img} />
        </div>
        <div className="search-result-content">
          <div className="search-result-content-a">
            <div className="search-result-price">
              $ {new Intl.NumberFormat().format(price)}
            </div>
            <div className="search-result-title">{title}</div>
          </div>

          <div className="search-result-location">{location}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemListItem;
