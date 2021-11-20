/**
 * Archivo para importaciones y no tener tans sucio nuestros componentes
 */
import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";
/**
 * Esto crea un objeto que se le asignan componentes como propiedades
 */
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
export default ProductCard;
