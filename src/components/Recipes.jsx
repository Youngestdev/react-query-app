import React from "react";
import { useQuery, prefetchQuery } from "react-query";

import Button from "./Button";

import { fetchRecipes, fetchRecipe } from "../queries";

export default function Recipes({ setActiveRecipe }) {
  const { data, isFetching } = useQuery("Recipes", fetchRecipes);

  return (
    <div>
      <h2>Recipes List 
      { isFetching 
        ? " Loading" 
        : null
      }
        </h2>
      {data.map(Recipe => (
        <p key={Recipe.title}>
        {Recipe.title}
          <Button
            onClick={() => {
              // Prefetch the Recipe query
              prefetchQuery(["Recipe", { id: Recipe.id }], fetchRecipe);
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
