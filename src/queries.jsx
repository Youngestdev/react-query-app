export async function fetchRecipes() {
  return (await fetch(`http://localhost:8081`)).json();
}

export async function fetchRecipe(key, { id }) {
  return (await fetch(
    `http://localhost:8081/${id}`
  )).json();
}
