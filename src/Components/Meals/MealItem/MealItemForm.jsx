import React from "react";
import classes from "./MealItemForm.module.css";
const MealItemForm = () => {
  return (
    <div className={classes.form}>
      <div>
        <span>Amount</span>
        <input type="number" />
      </div>
      <div>
        <button>+Add</button>
      </div>
    </div>
  );
};

export default MealItemForm;
