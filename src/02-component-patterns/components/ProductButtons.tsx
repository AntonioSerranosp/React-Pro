import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
export const ProductButtons = () => {
  const { increaseBy, counter, addNumber, decreceNumber } =
    useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-addNumber)}
      >
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(decreceNumber)}
      >
        +
      </button>
    </div>
  );
};
