import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import ItemList from "./components/items/ItemList";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <ItemList />
    </div>
  );
}

export default App;
