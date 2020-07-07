import React from "react";
import {queryCache, useQuery} from "react-query";

import Button from "./Button";

import {fetchRecipe, fetchRecipes} from "../queries";

export default function Recipes({setActiveRecipe}) {
    const recipesQuery = useQuery("Recipes", fetchRecipes);

    return (
        <div>
            <h2>Recipes List <br/>
                {recipesQuery.isFetching
                    ? "Loading"
                    : <Button onClick={() => {
                        queryCache.invalidateQueries("Recipes")
                    }}>
                        Refresh Recipes
                    </Button>
                }
            </h2>
            {recipesQuery.data.map(Recipe => (
                <p key={Recipe.title}>
                    {Recipe.title}
                    <Button
                        onClick={() => {
                            // Prefetch the Recipe query
                            queryCache.prefetchQuery(["Recipe", {id: Recipe.id}], fetchRecipe);
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
