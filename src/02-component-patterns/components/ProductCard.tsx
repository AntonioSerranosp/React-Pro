import React, { createContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ListOfProcess } from "./ListOfProcess";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

interface Tarea {
  codigo: number;
  contadorProceso: number;
}

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
  addNumber: number;
  decreceNumber: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  const addNumber = 1;
  const decreceNumber = 1;
  const arrayDetareas: Tarea[] = [
    {
      codigo: 1,
      contadorProceso: 1,
    },
    {
      codigo: 2,
      contadorProceso: 2,
    },
    {
      codigo: 2,
      contadorProceso: 2,
    },
  ];
  const costoProceso = ListOfProcess(arrayDetareas);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        addNumber,
        decreceNumber,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
