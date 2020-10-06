import React, { useContext } from "react";
import BreadcrumbContext from "../../context/BreadcrumbContext";

import "./breadcrumb.scss";

function Breadcrumb() {
  const { categories } = useContext(BreadcrumbContext);
  return (
    <div className="breadcrum-category">
      {categories.map((category) =>
        category.map((cat) => (
          <span key={cat} className="category">
            {cat}
          </span>
        ))
      )}
    </div>
  );
}

export default Breadcrumb;
