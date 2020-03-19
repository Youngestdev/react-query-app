const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

const recipes = [
  {
    id: 1,
    title: "Jollof Rice Recipe",
    content: "How to make jollof rice ..."
  },
  {
    id: 2,
    title: "Bacon and Sauced Eggs",
    content: "How to make bacon and sauced eggs"
  },
  {
    id: 3,
    title: "Pancake recipes",
    content: "how to make pancakes..."
  },
];

app.get("/", (req, res) => {
  res.send(recipes);
});

app.get("/:id", (req, res) => {
  const recipe = recipes.filter(
    recipe => recipe.id === parseInt(req.params.id)
  );
  if (recipe.length === 0) return res.status(404).send();
  if (recipe.length > 1) return res.status(500).send();
  res.send(recipe[0]);
});

app.post('/', (req, res) => {
  req.body.id = recipes.length + 1;
  recipes.push(req.body)
  res.status(200).send()
})

app.listen(8081, () => {
  console.log("App's running on port 8081");
});
