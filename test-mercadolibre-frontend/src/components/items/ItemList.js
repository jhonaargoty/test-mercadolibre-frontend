import React, { useEffect, useState, useContext, createContext } from "react";
import "./itemList.scss";
import ItemListItem from "./ItemListItem";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemList() {
  const [items, setItems] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const urlSearch = new URLSearchParams(location.search).get("search");
    async function listSearch() {
      const response = await axios.get(
        `http://localhost:8084/api/items?q=${urlSearch}`
      );
      setItems(response.data.items);
      setBreadcrumb(response.data.categories);
      return response;
    }
    listSearch();
  }, [location]);

  return (
    <div>
      <div className="search-layout">
        {items.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id} className="links">
            <ItemListItem
              key={item.id}
              img={item.picture}
              price={item.price.amount}
              title={item.title}
              location={item.address}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
