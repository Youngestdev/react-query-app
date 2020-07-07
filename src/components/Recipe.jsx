import React from "react";
import {useQuery} from 'react-query';

import Button from "./Button";

import {fetchRecipe} from "../queries";

export default function Recipe({activeRecipe, setActiveRecipe}) {
    const recipeQuery = useQuery(
        ["Recipe", {id: activeRecipe}],
        fetchRecipe
    );

    return (
        <React.Fragment>
            <Button onClick={() => setActiveRecipe(null)}>Back</Button>
            <h2>
                ID: {activeRecipe} {recipeQuery.isFetching ? "Loading Recipe" : null}
            </h2>
            {recipeQuery.data ? (
                <div>
                    <p>Title: {recipeQuery.data.title}</p>
                    <p>Content: {recipeQuery.data.content}</p>
                </div>
            ) : null}
            <br/>
            <br/>
        </React.Fragment>
    );
}
