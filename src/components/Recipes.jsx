import React from "react";
import { useQuery, queryCache } from "react-query";

import Button from "./Button";

import { fetchRecipes, fetchRecipe } from "../queries";

export default function Recipes({ setActiveRecipe }) {
  const { data, isFetching } = useQuery("Recipes", fetchRecipes);

  return (
    <div>
      <h2>Recipes List <br />
      { isFetching 
        ? "Loading" 
        : <Button onClick={() => {
            queryCache.refetchQueries("Recipes");
        }}>
        Refesh Recipes
        </Button>
      }
        </h2>
      {data.map(Recipe => (
        <p key={Recipe.title}>
        {Recipe.title}
          <Button
            onClick={() => {
              // Prefetch the Recipe query
              queryCache.prefetchQuery(["Recipe", { id: Recipe.id }], fetchRecipe);
              setActiveRecipe(Recipe.id);
            }}
          >
            Load Recipe
          </Button>{" "}
        </p>
      ))}
    </div>
  );
}
