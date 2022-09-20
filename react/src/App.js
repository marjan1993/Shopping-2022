import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailPage, HomePage, CartPage } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/detail/:id" component={DetailPage} />
            <Route exact path="/cart" children={<CartPage />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
