import React, { useState } from "react";
import BreadcrumbContext from "../context/BreadcrumbContext";

const BreadcrumbProvider = ({ children }) => {
  const addBreadcrumb = (category) => {
    setCategories((prevState) => ({
      ...prevState,
      categories: [category, ...prevState.categories],
    }));
  };
  const delBreadcrumb = () => {
    setCategories((prevState) => ({
      ...prevState,
      categories: [],
    }));
  };

  const categoryState = {
    categories: [],
    addBreadcrumb,
    delBreadcrumb,
  };

  const [categories, setCategories] = useState(categoryState);

  return (
    <BreadcrumbContext.Provider value={categories}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbProvider;
