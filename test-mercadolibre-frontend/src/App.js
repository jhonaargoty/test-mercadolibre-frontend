import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import ItemList from "./components/items/ItemList";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import ItemDetails from "./components/items/ItemDetails";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Breadcrumb />
        <div className="app-content">
          <Switch>
            <Route exact path="/items">
              <ItemList />
            </Route>
            <Route path="/items/:id">
              <ItemDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
