import "./App.scss";
import "./Components/ltr.scss";
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen";
import ProductScreen from "./Components/Screens/ProductScreen";
import Header from "./Components/Header/Header";
import CartScreen from "./Components/Screens/CartScreen";
import { AppLanguageContext } from "./context";

function App() {
  const [appLanguage, setAppLanguage] = useState(2);
  const setLanguage = (data) => {
    setAppLanguage(data);
  };
  return (
    <BrowserRouter>
      <div className={`${appLanguage === 2 ? "App" : "ltr"}`}>
        <AppLanguageContext.Provider
          value={{ setAppLanguage: setLanguage, appLanguage }}
        >
          <header className="row d-flex justify-content-center align-items-center">
            <Header />
          </header>
          <main className="row d-flex justify-content-center align-items-start">
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/cart/:id?" component={CartScreen} exact></Route>
          </main>
        </AppLanguageContext.Provider>
        <footer className="row d-flex justify-content-center align-items-center">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
