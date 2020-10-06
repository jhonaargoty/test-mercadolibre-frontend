import React, { useEffect, useState } from "react";
import "./itemDetails.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemDetailsItem from "./ItemDetailsItem";

function ItemDetails() {
  const [item, setItem] = useState([]);
  const [itemId] = useState(useParams());
  const [errApi, setErrApi] = useState("0");

  useEffect(() => {
    async function listSearchDetail() {
      try {
        const response = await axios.get(
          `http://localhost:8084/api/items/${itemId.id}`
        );
        setItem([response.data.item]);

        return response;
      } catch (error) {
        setErrApi(error.response.status);
      }
    }

    listSearchDetail();
  }, [itemId]);

  return (
    <div>
      {errApi !== 400 ? (
        item.map((item) => <ItemDetailsItem key={item.id} item={item} />)
      ) : (
        <span className="error">No encontramos lo que buscas :( </span>
      )}
    </div>
  );
}

export default ItemDetails;
