import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen";
import ProductScreen from "./Components/Screens/ProductScreen";
import "./App.scss";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="row d-flex justify-content-center align-items-center">
          <Header />
        </header>
        <main className="row d-flex justify-content-center align-items-start">
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row d-flex justify-content-center align-items-center">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
