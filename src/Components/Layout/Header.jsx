import React, { useState } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartOpenHandler={props.cartOpenHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="a table full of delicious foods" />
      </div>
    </React.Fragment>
  );
};

export default Header;
