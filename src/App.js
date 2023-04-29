import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cart, setCart] = useState(false);
  const cartOpenHandler = () => {
    setCart(true);
  };
  const cartCloseHandler = () => {
    setCart(false);
  };
  return (
    <React.Fragment>
      {cart && <Cart cartCloseHandler={cartCloseHandler} />}
      <Header cartOpenHandler={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
