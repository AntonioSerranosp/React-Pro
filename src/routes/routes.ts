// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import React, { LazyExoticComponent } from "react";
import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent; //() => JSX.Element;
  name: string;
  children?: Route[];
}
const LazyModule = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/lazyload",
    component: LazyModule,
    name: "LazyLoading Nested",
  },
  {
    path: "/no-lazy",
    component: NoLazy,
    name: "No lazy component",
  },
];
