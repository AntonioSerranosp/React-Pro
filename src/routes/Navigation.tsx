import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";
/**
 *
 * @returns
 * con lazy load se cargan solamente cuando se requiere el componente
 * a estas cargas se le llaman chuncks "pedazos de codigo"
 * el fallback es cuando recien se va a cargar por PRIMERA VEZ en la trnasicion
 * de carga aparecera el JSX que queramos o null si no
 * Queremos mostrar nada
 * -Una vez que sea cargado el chunk Y lo tenga en memoria
 * Ya no lo hara de nuevo.
 */
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, component: Component, ...rest }) => (
              <Route
                path={path}
                key={path}
                render={() => {
                  return <Component />;
                }}
              />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
