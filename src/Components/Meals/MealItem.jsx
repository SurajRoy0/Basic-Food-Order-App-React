import React from "react";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  console.log(props.item);
  return (
    <li className={classes.list} key={props.item.id}>
      <h3>{props.item.name}</h3>
      <div>{props.item.description}</div>
      <span>${props.item.price}</span>
    </li>
  );
};

export default MealItem;
