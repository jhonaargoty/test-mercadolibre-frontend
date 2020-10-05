import React from "react";

function ItemListItem() {
  return (
    <div>
      <div className="search-layout-item">
        <div className="search-result-image">
          <img
            className="item-img"
            src="https://http2.mlstatic.com/D_NQ_NP_775680-MCO40352964318_012020-V.webp"
          />
        </div>
        <div className="search-result-content">
          <div className="search-result-content-a">
            <div className="search-result-price">$3000</div>
            <div className="search-result-title">Iphone</div>
          </div>

          <div className="search-result-location">Buenos Aires</div>
        </div>
      </div>
    </div>
  );
}

export default ItemListItem;
