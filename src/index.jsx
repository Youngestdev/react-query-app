import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { ReactQueryConfigProvider } from "react-query";

const Recipes = lazy(() => import("./components/Recipes"));
const Recipe = lazy(() => import("./components/Recipe"));

const queryConfig = {
  suspense: true
};

function App() {
  const [activeRecipe, setActiveRecipe] = React.useState(null);

  return (
  <React.Fragment>
    <h1>Fast Recipes</h1>
    <hr />
    <ReactQueryConfigProvider config={queryConfig}>
        <React.Suspense fallback={<h1> Loading ...</h1>}>
          {  activeRecipe ? (
              <Recipe
                activeRecipe={activeRecipe}
                setActiveRecipe={setActiveRecipe}
              />
            ) : (
              <Recipes setActiveRecipe={setActiveRecipe} />
            )}
        </React.Suspense>
    </ReactQueryConfigProvider>
  </React.Fragment>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)
