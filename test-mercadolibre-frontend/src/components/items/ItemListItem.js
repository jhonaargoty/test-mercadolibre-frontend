import React from "react";
import ic_shipping from "../../assets/ic_shipping.png";

function ItemListItem({ item }) {
  return (
    <div>
      <div className="search-layout-item">
        <div className="search-result-image">
          <img alt={item.title} className="item-img" src={item.picture} />
        </div>
        <div className="search-result-content">
          <div className="search-result-content-a">
            <div className="search-result-price">
              $ {new Intl.NumberFormat().format(item.price.amount)}
              {item.free_shipping === true ? (
                <img
                  alt="titulo-producto"
                  className="item-img-shipping"
                  src={ic_shipping}
                />
              ) : (
                ""
              )}
            </div>
            <div className={item.title}>{item.title}</div>
          </div>

          <div className="search-result-location">{item.address}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemListItem;
