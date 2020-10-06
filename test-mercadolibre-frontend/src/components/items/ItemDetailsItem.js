import React from "react";
import { Helmet } from "react-helmet";

function ItemDetailsItem({ item }) {
  return (
    <div>
      <Helmet>
        <title>{item.title}</title>
      </Helmet>
      <div className="detail-layout-item">
        <div className="detail-item-image">
          <img alt={item.id} className="item-img" src={item.picture} />
        </div>
        <div className="detail-item-content">
          <div className="detail-item-sold">
            {item.condition} - {item.sold_quantity} vendidos
          </div>
          <div className="detail-item-title">{item.title}</div>
          <div className="detail-item-price">
            $ {new Intl.NumberFormat().format(item.price.amount)}
          </div>
          <div className="detail-item-button">
            <button className="item-button">Comprar</button>
          </div>
        </div>
      </div>
      <div className="detail-item-description">
        <span>Descripcion del producto</span>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default ItemDetailsItem;
