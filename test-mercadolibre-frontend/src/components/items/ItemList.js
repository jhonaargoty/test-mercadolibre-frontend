import React, { useEffect, useState, useContext } from "react";
import "./itemList.scss";
import ItemListItem from "./ItemListItem";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BreadcrumbContext from "../../context/BreadcrumbContext";
import { Helmet } from "react-helmet";

function ItemList() {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const { addBreadcrumb, delBreadcrumb } = useContext(BreadcrumbContext);
  const [searchTitle, setSearchTitle] = useState("");
  const [errApi, setErrApi] = useState("0");

  useEffect(() => {
    const urlSearch = new URLSearchParams(location.search).get("search");
    setSearchTitle(urlSearch);
    delBreadcrumb();

    async function listSearch() {
      try {
        const response = await axios.get(
          `http://localhost:8084/api/items?q=${urlSearch}`
        );
        setItems(response.data.items);
        addBreadcrumb(response.data.categories);

        return response;
      } catch (error) {
        setErrApi(error.response.status);
      }
    }

    listSearch();
  }, [location]);
  return (
    <div>
      <Helmet>
        <title>{searchTitle} en Mercadolibre</title>
      </Helmet>
      <div className="search-layout">
        {errApi !== 400 ? (
          items.map((item) => (
            <Link to={`/items/${item.id}`} key={item.id} className="links">
              <ItemListItem item={item} />
            </Link>
          ))
        ) : (
          <span className="error">No encontramos lo que buscas :( </span>
        )}
      </div>
    </div>
  );
}

export default ItemList;
