import React, { useEffect, useState } from "react";
import "./itemDetails.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const [item, setItem] = useState([]);
  const [itemId] = useState(useParams());

  useEffect(() => {
    async function listSearch() {
      const response = await axios.get(
        `http://localhost:8084/api/items/${itemId.id}`
      );
      setItem(response.data.item);
      return response;
    }
    listSearch();
  }, [itemId]);

  return (
    <div>
      <div className="detail-layout-item">
        <div className="detail-item-image">
          <img alt={item.id} className="item-img" src={item.picture} />
        </div>
        <div className="detail-item-content">
          <div className="detail-item-sold">
            {item.condition} - {item.sold_quantity} vendidos
          </div>
          <div className="detail-item-title">{item.title}</div>
          <div className="detail-item-price">${item.condition}</div>
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

export default ItemDetails;
